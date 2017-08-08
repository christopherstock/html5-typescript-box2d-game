
    const Matter = require('matter-js');
    import {MfgDebug}    from '../mfg';
    import {MfgSettings} from '../mfg';
    import {MfgPlayer}   from '../mfg';
    import {MfgLevel}    from '../mfg';
    import {MfgInit}     from '../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgGame
    {
        public      engine                  :Matter.Engine      = null;
        public      player                  :MfgPlayer          = null;
        public      level                   :MfgLevel           = null;

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public init()
        {
            MfgDebug.init.log( "Initing game engine" );

            this.initEngine2D();
            this.initLevel();
            this.initPlayer();

            // add all of the bodies to the world
            Matter.World.add(
                MfgInit.game.engine.world,
                [
                    MfgInit.game.player.boxA,
                    MfgInit.game.level.boxB,
                    MfgInit.game.level.boxC,
                    MfgInit.game.level.ground
                ]
            );

            Matter.Engine.run( this.engine );
        }

        /*****************************************************************************
        *   Inits the player instance.
        *****************************************************************************/
        private initPlayer()
        {
            this.player = new MfgPlayer();
        }

        /*****************************************************************************
        *   Inits the 2D engine.
        *****************************************************************************/
        private initEngine2D()
        {
            let htmlBody:HTMLBodyElement = document.querySelector("body");

            this.engine = Matter.Engine.create( htmlBody, {} );

            this.engine.render.canvas.width  = MfgSettings.CANVAS_WIDTH;
            this.engine.render.canvas.height = MfgSettings.CANVAS_HEIGHT;
        }

        /*****************************************************************************
        *   Inits the level.
        *****************************************************************************/
        private initLevel()
        {
            this.level = new MfgLevel();
            this.level.init();
        }
    }
