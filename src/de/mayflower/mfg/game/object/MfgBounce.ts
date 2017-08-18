
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a bounce.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgBounce extends mfg.MfgGameObject
    {
        /** The constraint that builds the turning point for the bounce. */
        private                     constraint                      :Matter.Constraint                  = null;

        /***************************************************************************************************************
        *   Creates a new bounce.
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
                mfg.MfgSettings.COLOR_DEBUG_BOUNCE,
                false,
                image,
                0.0,
                mfg.MfgGameObject.FRICTION_DEFAULT,
                mfg.MfgGameObject.DENSITY_DEFAULT
            );

            this.constraint = Matter.Constraint.create(
                {
                    bodyB: this.body,
                    pointA: { x: this.body.position.x, y: this.body.position.y },
                    pointB: { x: 0, y: 0 },
                    stiffness: 0.01,
                    length: 0,
                    render: {
                        strokeStyle: mfg.MfgSettings.COLOR_DEBUG_BOUNCE_JOINT,
                        lineWidth: 1.0,
                        visible:   true,
                    }
                }
            );

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
            Matter.Body.setAngle(           this.body, 0.0 );
            Matter.Body.setAngularVelocity( this.body, 0.0 );
        }
    }
