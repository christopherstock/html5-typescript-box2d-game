
    import {MfgInit} from '../mfg';

    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Try namespaces (without export) over split files once again?
    *   TODO ASAP   Improve namespaces (like java packages!)
    *   TODO ASAP   Create simple test level.
    *   TODO ASAP   Remove all static contexts.
    *   TODO ASAP   Create abstract level system.
    *   TODO ASAP   Split import statements into several statements.
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
            console.log(">> main() ... :D ");

            //init game engine
            MfgInit.init();
        }
    }
