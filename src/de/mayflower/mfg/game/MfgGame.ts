
    import * as Matter   from 'matter-js';
    import {MfgDebug}    from '../mfg';
    import {MfgSettings} from '../mfg';
    import {MfgPlayer}   from '../mfg';
    import {MfgLevel}    from '../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgGame
    {
        private     engine                  :Matter.Engine      = null;
        private     renderer                :Matter.Render      = null;

        private     player                  :MfgPlayer          = null;
        private     level                   :MfgLevel           = null;

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
                this.engine.world,
                [
                    this.level.boxB,
                    this.level.boxC,
                    this.level.ground,
                    this.player.boxA,
                ]
            );

            // start the game loop
            this.start();
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
            this.engine = Matter.Engine.create();

            this.renderer = Matter.Render.create(
                {
                    element: document.body,
                    engine:  this.engine
                }
            );

            this.renderer.canvas.width  = MfgSettings.CANVAS_WIDTH;
            this.renderer.canvas.height = MfgSettings.CANVAS_HEIGHT;
        }

        /*****************************************************************************
        *   Inits the level.
        *****************************************************************************/
        private initLevel()
        {
            this.level = new MfgLevel();
            this.level.init();
        }

        /*****************************************************************************
        *   Starts the game loop.
        *****************************************************************************/
        private start()
        {
            Matter.Render.run( this.renderer );

            window.setInterval(
                this.tick,
                MfgSettings.RENDER_DELTA
            );
        }

        /*****************************************************************************
        *   Being invoked each tick of the game loop in order to render the game.
        *****************************************************************************/
        private tick=()=>
        {
            MfgDebug.bugfix.log("render game ..");

            // update MatterJS 2d engine
            Matter.Engine.update(this.engine, MfgSettings.RENDER_DELTA);
        }
    }
