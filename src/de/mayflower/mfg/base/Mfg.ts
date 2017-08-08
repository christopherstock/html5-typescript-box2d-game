
    import * as mfg from '../mfg';

    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Remove all static contexts.
    *   TODO ASAP   Create abstract level system.
    *   TODO ASAP   Nice gravity effects?
    *   TODO ASAP   Multiple layers of engines for different calcs/effects?
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class Mfg
    {
        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            // set title and acclaim debug console
            mfg.MfgDebug.init.log( mfg.MfgSettings.TITLE );
            document.title = mfg.MfgSettings.TITLE;

            //init game engine
            mfg.MfgInit.init();
        }
    }
