
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
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_SIGSAW, false, false, image );

            Matter.Composite.add(
                mfg.MfgInit.game.engine.world,
                Matter.Constraint.create(
                    {
                        bodyB: this.body,
                        pointA: { x: this.body.position.x, y: this.body.position.y },
                        pointB: { x: 0, y: 0 },
                        stiffness: 1.0,
                        length: 0,
                        render: {
                            strokeStyle: mfg.MfgSettings.COLOR_DEBUG_SIGSAW_JOINT,
                            lineWidth: 1.0,
                            visible: true,
                        }
                    }
                )
            );

/*
            // avoid body tilting
            this.body.inertia        = 10000.0;
            this.body.inverseInertia = 1 / this.body.inertia;
*/
            // though tilting is off, increase the mass
            this.body.mass        = 100.0;
            this.body.inverseMass = 1 / this.body.mass;
        }

        /***************************************************************************************************************
        *   Renders this sigsaw.
        ***************************************************************************************************************/
        public render()
        {
        }
    }
