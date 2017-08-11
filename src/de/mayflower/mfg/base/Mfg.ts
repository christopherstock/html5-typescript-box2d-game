
    import * as mfg from '../mfg';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO LOW    CameraY shall only change if player collides with the floor!!
    *   TODO HIGH   Vertical camera movement buffering.
    *
    *   TODO HIGH   Checkout material parameters for different game objects!
    *   TODO HIGH   Create lib/factory for assigning different masses and behaviours to bodies.
    *   TODO HIGH   Create levels and sublevels.
    *   TODO HIGH   Create different enemy move patterns.
    *   TODO INIT   Improve switch problem for enums (valueOf?)?
    *   TODO INIT   Create animated platforms.
    *   TODO LOW    Add doors / level portals.
    *   TODO LOW    Create abstract level system.
    *   TODO WEAK   Add main menu and menu keys ..
    *   TODO WEAK   Implement nice changing gravity effects.
    *   TODO WEAK   Add sprites.
    *   TODO WEAK   Add images.
    *   TODO WEAK   Try discreet graphic style.
    *   TODO WEAK   Parallax bg.
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
