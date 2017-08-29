
    import * as Matter from 'matter-js';
    import * as mfg    from '../../../mfg';

    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgShape
    {
        /** The shape of a rectangle. */
        public      static          RECTANGLE               :number             = 0;

        /** The shape of a circle. */
        public      static          CIRCLE                  :number             = 1;

        /** The type of this shape. */
        public                      type                    :number             = 0;

        /***************************************************************************************************************
        *   Creates a new game object shape.
        *
        *   @author     Christopher Stock
        *   @version    0.0.1
        ***************************************************************************************************************/
        public constructor( type:number )
        {
            this.type = type;
        }

        public createOptions( debugColor:string, isStatic:boolean, friction:number, angle:number ) : Matter.IBodyDefinition
        {
            let options:Matter.IBodyDefinition =
            {
                render:
                {
                    fillStyle:   debugColor,
                    strokeStyle: mfg.MfgSettings.COLOR_DEBUG_BORDER,
                    opacity:     mfg.MfgSettings.COLOR_DEBUG_OPACITY,
                    lineWidth:   1.0,
                },
                isStatic:        isStatic,
                collisionFilter: mfg.MfgSettings.COLLISION_GROUP_COLLIDING,
                friction:        friction,
                angle:           mfg.MfgMath.angleToRad( angle ),
//              isSensor:        isSensor,
//              chamfer:         { radius: [ 5.0, 5.0, 5.0, 5.0 ] },
            };

            return options;
        }

        public createBody() : Matter.Body
        {


            return null;
        }
    }
