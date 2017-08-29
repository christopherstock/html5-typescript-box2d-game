
    import * as Matter from 'matter-js';
    import * as mfg    from '../../../mfg';

    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class MfgShape
    {
        /** The body rendering options for this shape. */
        public                  options                 :Matter.IBodyDefinition         = null;

        /** The shape's body. */
        public                  body                    :Matter.Body                    = null;

        /***************************************************************************************************************
        *   Creates a new game object shape.
        *
        *   @param debugColor The color for the debug object.
        *   @param isStatic   Specifies that this object has a fixed position.
        *   @param angle      The rotation of this body in degrees.
        *   @param friction   The object's body friction.
        ***************************************************************************************************************/
        public constructor
        (
            debugColor:string,
            isStatic:boolean,
            angle:number,
            friction:number,
        )
        {
            this.options = this.createOptions( debugColor, isStatic, angle, friction );
        }

        /***************************************************************************************************************
        *   Creates this shapes body rendering options.
        *
        *   @param debugColor The color for the debug object.
        *   @param isStatic   Specifies that this object has a fixed position.
        *   @param angle      The rotation of this body in degrees.
        *   @param friction   The object's body friction.
        *
        *   @return The rendering options for this shape's body.
        ***************************************************************************************************************/
        private createOptions( debugColor:string, isStatic:boolean, angle:number, friction:number ) : Matter.IBodyDefinition
        {
            return {
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
        }

        /***************************************************************************************************************
        *   Creates this shapes body.
        *
        *   @return The body for this shape.
        ***************************************************************************************************************/
        protected abstract createBody() : Matter.Body;
    }
