
    import * as mfg from '../mfg';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Separate all shapes from game objects!
    *   TODO ASAP   Create elevated ramp ( x1, y1, x2, y2, height! )
    *   TODO ASAP   Create 'line' obstacles (parallelograms) in order to simplify rotation.
    *
    *   TODO ASAP   Solve jump-through obstacles!
    *   TODO ASAP   Reduce access to external matter lib to shape package?
    *   TODO ASAP   Modify starting point for all objects so they rotate around left top anchor.
    *   TODO ASAP   Improve Pass-through walls behaviour for all characters etc. ..
    *   TODO ASAP   Checkout all parameters of the collision filters!
    *   TODO ASAP   Check sprite or image clipping and scaling to player size?
    *   TODO ASAP   Skew image (sensor) for waving grass effect?
    *   TODO ASAP   Add sprites and sprite class.
    *   TODO ASAP   Add images and image class ?? Improve image usage for all game objects ..
    *   TODO HIGH   Solve problem that player or enemy get stuck on an rotated obstacle ramp!
    *   TODO ASAP   Create custom renderer that extends Matter.Render?
    *   TODO ASAP   Try discreet graphic style.
    *   TODO HIGH   Create different enemy move patterns.
    *   TODO INIT   Parallax bg.
    *   TODO INIT   Solve same body friction on different surfaces with different friction ... ( "staticFriction" )
    *   TODO LOW    Create levels and sublevels?
    *   TODO LOW    Maximum camera ascend distance if player is superjumped upwards.
    *   TODO LOW    Disable horizontal movements while jumping?
    *   TODO LOW    Improve direction change in air. (no direction change till landed?)
    *   TODO LOW    Improve air behaviour of player on colliding!!
    *   TODO WEAK   Add doors / level portals.
    *   TODO WEAK   Add menu keys for main menu and level map ..
    *   TODO WEAK   Implement nice changing gravity effects.
    *   TODO WEAK   Refactor camera class.
    *   TODO WEAK   Try fullscreen game in browser?
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Mfg
    {
        /** The singleton instance of the game engine. */
        public      static          game                    :mfg.MfgGame                    = null;

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
