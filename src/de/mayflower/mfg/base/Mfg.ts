
    import * as mfg from '../mfg';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Stop player sliding on bouncing against a wall!
    *   TODO ASAP   Improve moving before sensors (decoration)!
    *   TODO ASAP   Checkout all parameters of the collision filters!
    *   TODO ASAP   Improve air behaviour of player on colliding!!
    *   TODO ASAP   Check sprite or image clipping and scaling to player size?
    *   TODO ASAP   Avoid sliding down on platforms on falling and touching platform side?
    *   TODO HIGH   Skew image (sensor) for waving grass effect?
    *   TODO HIGH   Checkout material parameters for different game objects - Create lib/factory for assigning different masses and behaviours to bodies: rubber, steel, etc.
    *   TODO HIGH   Create different enemy move patterns.
    *   TODO INIT   Parallax bg.
    *   TODO LOW    Add doors / level portals.
    *   TODO LOW    Create levels and sublevels?
    *   TODO LOW    Maximum camera ascend distance if player is superjumped upwards.
    *   TODO WEAK   Add menu keys for main menu and level map ..
    *   TODO WEAK   Add sprites.
    *   TODO WEAK   Add images.
    *   TODO WEAK   Create custom renderer that extends Matter.Render?
    *   TODO WEAK   Try discreet graphic style.
    *   TODO WEAK   Implement nice changing gravity effects.
    *   TODO WEAK   Improve Pass-through walls behaviour for all characters etc. ..
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Mfg
    {
        /** The singleton instance of the game engine. */
        public      static          game                    :mfg.MfgGame                = null;

        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            // acclaim debug console and set title
            mfg.MfgDebug.init.log( mfg.MfgSettings.TITLE );
            document.title = mfg.MfgSettings.TITLE;

            //init and start the game engine
            this.game = new mfg.MfgGame();
            this.game.init();
            this.game.start();
        }
    }
