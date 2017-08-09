
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Represents an enemy being controled by the system.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgEnemy extends mfg.MfgGameObject
    {
        /*****************************************************************************
        *   Creates a new enemy instance.
        *****************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_ENEMY, false, false );
/*
            this.bottomSensor = Matter.Bodies.rectangle(
                x + ( width  / 2 ),
                y + height + 1,
                width,
                1.0,
                {
                    render:
                    {
                        lineWidth: 1.0,
                        strokeStyle: '#ffffff',
                        fillStyle: "#ffffff",
                        opacity: mfg.MfgSettings.COLOR_DEBUG_OPACITY,
                    },
                    isSensor: true
                }
            );
*/
/*
            this.body = Matter.Body.create(
                {
                    parts: [
                        this.body,
                        this.bottomSensor
                    ]
                }
            );
*/
            // avoid body tilting
            this.body.inertia        = Infinity;
            this.body.inverseInertia = 1 / Infinity;

            // though tilting is off, increase the mass
            this.body.mass = 70.0;
            this.body.inverseMass = 1 / 70.0;

            // density ?
            // this.body.density = 100.0;
        }

        /*****************************************************************************
        *   Renders the current player tick.
        *****************************************************************************/
        public render()
        {
            Matter.Body.translate( this.body, { x: -3.0, y: 0 });

            this.clipToHorizontalLevelBounds();

        }
    }
