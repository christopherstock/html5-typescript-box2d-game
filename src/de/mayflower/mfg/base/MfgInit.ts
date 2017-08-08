
    import {MfgGame}     from '../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgInit
    {
        public  static      game    :MfgGame        = null;

        /*****************************************************************************
        *   Inits this app from scratch.
        *****************************************************************************/
        public static init()
        {
            // init the game engine
            MfgInit.game = new MfgGame();
            MfgInit.game.init();
        }
    }
