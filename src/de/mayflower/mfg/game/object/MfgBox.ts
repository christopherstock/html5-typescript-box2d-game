
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a movable box.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgBox extends mfg.MfgGameObject
    {
        /***************************************************************************************************************
        *   Creates a new box.
        *
        *   @param shape    The shape for this object.
        *   @param x        Startup position X.
        *   @param y        Startup position Y.
        *   @param width    The new width.
        *   @param height   The new height.
        *   @param friction The surface friction for this object.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number, friction:number )
        {
            super
            (
                shape,
                x,
                y,
                width,
                height,
                mfg.MfgSettings.COLOR_DEBUG_BOX,
                false,
                null,
                0.0,
                friction,
                mfg.MfgGameObject.DENSITY_DEFAULT
            );
        }

        /***************************************************************************************************************
        *   Renders this box.
        ***************************************************************************************************************/
        public render()
        {
            this.clipToHorizontalLevelBounds();
        }
    }
