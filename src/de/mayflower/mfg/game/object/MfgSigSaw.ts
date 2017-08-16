
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a sigsaw.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgSigSaw extends mfg.MfgGameObject
    {
        /** The constraint that builds the turning point for the sigsaw. */
        private                     constraint                      :Matter.Constraint                  = null;

        /***************************************************************************************************************
        *   Creates a new sigsaw.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param width  The new width.
        *   @param height The new height.
        *   @param image  The image for this game object.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number, image:string )
        {
            super
            (
                shape,
                x,
                y,
                width,
                height,
                mfg.MfgSettings.COLOR_DEBUG_SIGSAW,
                false,
                false,
                image,
                0.0,
                mfg.MfgGameObject.FRICTION_DEFAULT
            );

            this.constraint = Matter.Constraint.create(
                {
                    bodyB: this.body,
                    pointA: { x: this.body.position.x, y: this.body.position.y },
                    pointB: { x: 0, y: 0 },
                    stiffness: 1.0,
                    length: 0,
                    render: {
                        strokeStyle: mfg.MfgSettings.COLOR_DEBUG_SIGSAW_JOINT,
                        lineWidth: 1.0,
                        visible:   true,
                    }
                }
            );
/*
            Matter.Body.setMass( this.body, 25.0 );
*/
            Matter.Composite.add(
                mfg.Mfg.game.engine.world,
                this.constraint
            );
        }

        /***************************************************************************************************************
        *   Renders this sigsaw.
        ***************************************************************************************************************/
        public render()
        {
            this.clipRotation();
            this.clipRotationSpeed();
        }

        /***************************************************************************************************************
        *   Clips the rotation of the sigsaw.
        ***************************************************************************************************************/
        private clipRotation()
        {
            const clipAngle = 15.0;

            const minAngle = mfg.MfgMath.angleToRad( -clipAngle );
            const maxAngle = mfg.MfgMath.angleToRad( clipAngle  );

            if ( this.body.angle < minAngle )
            {
                Matter.Body.setAngle(           this.body, minAngle );
                Matter.Body.setAngularVelocity( this.body, 0.0       );
            }
            else if ( this.body.angle > maxAngle )
            {
                Matter.Body.setAngle(           this.body, maxAngle );
                Matter.Body.setAngularVelocity( this.body, 0.0       );
            }
        }

        /***************************************************************************************************************
        *   Clips the rotation speed of the sigsaw.
        ***************************************************************************************************************/
        private clipRotationSpeed()
        {
            const maxRotationSpeed = 0.005;

            if ( this.body.angularVelocity < -maxRotationSpeed )
            {
                Matter.Body.setAngularVelocity( this.body, -maxRotationSpeed );
            }
            else if ( this.body.angularVelocity > maxRotationSpeed )
            {
                Matter.Body.setAngularVelocity( this.body, maxRotationSpeed );
            }
        }
    }
