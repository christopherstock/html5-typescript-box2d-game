
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a non-colliding decoration.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgDecoration extends mfg.MfgGameObject
    {
        /***************************************************************************************************************
        *   Creates a new decoration.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param width  The new width.
        *   @param height The new height.
        *   @param image  The image source to use.
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
                mfg.MfgSettings.COLOR_DEBUG_DECORATION,
                true,
                image,
                0.0,
                mfg.MfgGameObject.FRICTION_DEFAULT,
                Infinity
            );

            this.body.collisionFilter = mfg.MfgSettings.COLLISION_GROUP_NON_COLLIDING;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {
        }
    }
