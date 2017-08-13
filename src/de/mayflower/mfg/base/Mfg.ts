
    import * as mfg from '../mfg';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Improve SigSaw inertia behaviour.
    *   TODO ASAP   Create animated platforms.
    *   TODO ASAP   Check sprite or image clipping and scaling to player size?
    *   TODO HIGH   Replace own jump implementation.
    *   TODO HIGH   Skew image (sensor) for waving grass effect?
    *   TODO HIGH   Checkout material parameters for different game objects - Create lib/factory for assigning different masses and behaviours to bodies
    *   TODO HIGH   Create different enemy move patterns.
    *   TODO INIT   Parallax bg.
    *   TODO LOW    Add doors / level portals.
    *   TODO LOW    Create levels and sublevels?
    *   TODO LOW    Create abstract level system.
    *   TODO WEAK   Add menu keys for main menu and level map ..
    *   TODO WEAK   Add sprites.
    *   TODO WEAK   Add images.
    *   TODO WEAK   Try discreet graphic style.
    *   TODO WEAK   Implement nice changing gravity effects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Mfg
    {
        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            let title:string = (
                    mfg.MfgSettings.TITLE
                +   ", "
                +   mfg.MfgVersion.CURRENT_VERSION.getVersionDescriptor()
            );

            // acclaim debug console and set title
            mfg.MfgDebug.init.log( title );
            document.title = title;

            //init game engine
            mfg.MfgInit.init();
        }
    }
