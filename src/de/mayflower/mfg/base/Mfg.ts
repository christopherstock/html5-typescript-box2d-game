
    import * as mfg from '../mfg';

    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Let player jump. Improve moving via friction.
    *   TODO ASAP   Create pickable items.
    *   TODO ASAP   Create abstract level system.
    *   TODO INIT   Player may only jump if colliding with the floor.
    *   TODO ASAP   Create abstract body generation class that uses 0, 0 as left-top corner!
    *
    *   TODO WEAK   Try multiple layers of engines for different calcs/effects.
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
            // set title and acclaim debug console
            mfg.MfgDebug.init.log( mfg.MfgSettings.TITLE );
            document.title = mfg.MfgSettings.TITLE;

            //init game engine
            mfg.MfgInit.init();
        }
    }
