
    import * as mfg from '../mfg';

    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Unify all docblocks!
    *
    *   TODO ASAP   Let webpack bundle typeScript source mappings!
    *   TODO ASAP   Add TypeDoc via npm.
    *   TODO ASAP   Create seesaw.
    *
    *   TODO HIGH   Buffer camera according to looking direction.
    *   TODO HIGH   Checkout material parameters for different game objects!
    *   TODO HIGH   Create levels and sublevels.
    *   TODO INIT   Improve switch problem for enums?
    *   TODO INIT   Created animated platforms.
    *   TODO INIT   Create different enemy move patterns.
    *   TODO LOW    Add doors / level portals.
    *   TODO LOW    CameraY shall only change if player collides with the floor!!
    *   TODO LOW    Create abstract level system.
    *   TODO LOW    Add main menu and menu keys ..
    *   TODO WEAK   Implement nice changing gravity effects.
    *   TODO WEAK   Add sprites.
    *   TODO WEAK   Add images.
    *   TODO WEAK   Try a graphic style..?
    *   TODO WEAK   Parallax bg.
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
