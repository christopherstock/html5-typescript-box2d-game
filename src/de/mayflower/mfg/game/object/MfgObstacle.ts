
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgObstacle extends mfg.MfgGameObject
    {
        public constructor( x:number, y:number, width:number, height:number )
        {
            super( x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_OBSTACLE, false, true );
        }
    }
