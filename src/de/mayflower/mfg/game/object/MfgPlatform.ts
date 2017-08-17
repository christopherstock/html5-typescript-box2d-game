
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a platform that moves.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgPlatform extends mfg.MfgGameObject
    {
        /** Medium moving speed. */
        public  static      SPEED_NORMAL            :number                         = 1.0;

        /** The waypoints for this platform to move. */
        private             waypoints               :Array<Matter.Vector>           = null;
        /** The number of ticks till the next waypoint is reached. */
        private             speed                   :number                         = 0.0;
        /** The current waypoint to move to. */
        private             currentWaypointIndex    :number                         = 0;

        /** The number of animation steps till the next waypoint. */
        private             stepsTillNextWaypoint   :number                         = 0;
        /** A counter for the current step to the next waypoint. */
        private             currentStep             :number                         = 0;

        /** Step size X per tick in px. */
        private             stepSizeX               :number                         = 0.0;
        /** Step size Y per tick in px. */
        private             stepSizeY               :number                         = 0.0;

        /***************************************************************************************************************
        *   Creates a new platform. Initial position is the first waypoint.
        *
        *   @param shape     The shape for this object.
        *   @param width     The new width.
        *   @param height    The new height.
        *   @param angle     The initial rotation.
        *   @param speed     The speed in pixels per tick.
        *   @param waypoints The waypoints for this platform to move to.
        ***************************************************************************************************************/
        public constructor
        (
            shape:mfg.MfgGameObjectShape,
            width:number,
            height:number,
            angle:number,
            speed:number,
            waypoints:Array<Matter.Vector>
        )
        {
            super
            (
                shape,
                0.0,
                0.0,
                width,
                height,
                mfg.MfgSettings.COLOR_DEBUG_OBSTACLE,
                false,
                true,
                null,
                angle,
                mfg.MfgGameObject.FRICTION_DEFAULT
            );

            this.waypoints = waypoints;
            this.speed     = speed;

            this.currentWaypointIndex = -1;
            this.assignNextWaypoint();

            this.body.frictionStatic = Infinity;
/*
            Matter.Body.setMass( this.body, 70.0 );
*/
        }

        /***************************************************************************************************************
        *   Assigns the next waypoint to aim to.
        ***************************************************************************************************************/
        private assignNextWaypoint()
        {
            // assign current wp
            ++this.currentWaypointIndex;
            if ( this.currentWaypointIndex >= this.waypoints.length ) this.currentWaypointIndex = 0;

            // assign next wp
            let nextWaypointIndex = this.currentWaypointIndex + 1;
            if ( nextWaypointIndex >= this.waypoints.length ) nextWaypointIndex = 0;

            // set player to starting wp
            Matter.Body.setPosition( this.body, this.waypoints[ this.currentWaypointIndex ] );

            let deltaX:number = Math.abs( this.waypoints[ nextWaypointIndex ].x - this.waypoints[ this.currentWaypointIndex ].x );
            let deltaY:number = Math.abs( this.waypoints[ nextWaypointIndex ].y - this.waypoints[ this.currentWaypointIndex ].y );

            let directDistance:number = Math.sqrt( ( deltaX * deltaX ) + ( deltaY * deltaY ) );

            this.currentStep = 0;
            this.stepsTillNextWaypoint = directDistance / this.speed;

            this.stepSizeX = ( this.waypoints[ nextWaypointIndex ].x - this.waypoints[ this.currentWaypointIndex ].x ) / this.stepsTillNextWaypoint;
            this.stepSizeY = ( this.waypoints[ nextWaypointIndex ].y - this.waypoints[ this.currentWaypointIndex ].y ) / this.stepsTillNextWaypoint;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {
            ++this.currentStep;
            if ( this.currentStep > this.stepsTillNextWaypoint )
            {
                this.assignNextWaypoint();
            }

            // move platform
            Matter.Body.setVelocity( this.body, Matter.Vector.create( this.stepSizeX, this.stepSizeY ) );
            Matter.Body.translate(   this.body, Matter.Vector.create( this.stepSizeX, this.stepSizeY ) );
        }
    }
