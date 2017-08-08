
    import {MfgInit}     from '../mfg';
    import {MfgDebug}    from '../mfg';
    import {MfgSettings} from '../mfg';

    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Remove all static contexts.
    *   TODO ASAP   Create abstract level system.
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
            MfgDebug.acclaim.log( MfgSettings.TITLE );
            document.title = MfgSettings.TITLE;

            //init game engine
            MfgInit.init();
        }
    }
