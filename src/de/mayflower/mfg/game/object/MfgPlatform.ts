
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
        /** The waypoints for this platform to move. */
        protected           waypoints               :Array<Matter.Vector>           = null;
        /** The current waypoint to move to. */
        protected           currentWaypointIndex    :number                         = 0;

        /***************************************************************************************************************
        *   Creates a new platform.
        *
        *   @param shape     The shape for this object.
        *   @param x         Startup position X.
        *   @param y         Startup position Y.
        *   @param width     The new width.
        *   @param height    The new height.
        *   @param angle     The initial rotation.
        *   @param waypoints The waypoints for this platform to move.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number, angle:number, waypoints:Array<Matter.Vector> )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_OBSTACLE, false, true, null, angle );

            this.waypoints = waypoints;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {



        }
    }
