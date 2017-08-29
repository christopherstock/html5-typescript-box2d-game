
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
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgShape, x:number, y:number, width:number, height:number, friction:number )
        {
            super
            (
                shape,
                x,
                y,
                width,
                height,
                null,
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
