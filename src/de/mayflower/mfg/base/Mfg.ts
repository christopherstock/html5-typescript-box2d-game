
    import * as mfg from '../mfg';

    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Checkout material parameters for different game objects!
    *   TODO ASAP   Add circle objects.
    *   TODO ASAP   Create enemies.
    *   TODO ASAP   Created animated platforms.
    *   TODO ASAP   CSS: improve margin, center canvas, etc.
    *   TODO ASAP   CameraY shall only change if player collides with the floor!!
    *   TODO ASAP   Create abstract level system.
    *   TODO INIT   Buffer camera.
    *   TODO LOW    Enrich all JavaDoc items.
    *   TODO WEAK   Implement nice changing gravity effects.
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
            let title:string = mfg.MfgSettings.TITLE + ", " + mfg.MfgVersion.CURRENT_VERSION.getVersionDescriptor();

            // acclaim debug console and set title
            mfg.MfgDebug.init.log( title );
            document.title = title;

            //init game engine
            mfg.MfgInit.init();
        }
    }
