
    import * as mfg from '../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgInit
    {
        /** The singleton game instance. */
        public  static      game    :mfg.MfgGame        = null;

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public static init()
        {
            // init the game engine
            MfgInit.game = new mfg.MfgGame();
            MfgInit.game.init();
        }
    }
