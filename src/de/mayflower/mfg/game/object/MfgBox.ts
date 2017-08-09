
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgBox extends mfg.MfgGameObject
    {
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_BOX, false, false );
        }

        /*****************************************************************************
        *   Renders this box.
        *****************************************************************************/
        public render()
        {
            this.clipToHorizontalLevelBounds();
        }
    }
