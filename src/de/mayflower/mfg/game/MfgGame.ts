
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgGame
    {
        public      engine                  :Matter.Engine      = null;
        private     renderer                :Matter.Render      = null;

        public      keySystem               :mfg.MfgKeySystem   = null;
        public      camera                  :mfg.MfgCamera      = null;
        private     level                   :mfg.MfgLevel       = null;

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public init()
        {
            mfg.MfgDebug.init.log( "Initing game engine" );

            this.initEngine2D();
            this.initLevel();
            this.initKeySystem();
            this.initCamera();

            // start the game loop
            this.start();
        }

        /*****************************************************************************
        *   Inits the key system.
        *****************************************************************************/
        private initKeySystem()
        {
            this.keySystem = new mfg.MfgKeySystem();
        }

        /*****************************************************************************
        *   Inits the camera.
        *****************************************************************************/
        private initCamera()
        {
            this.camera = new mfg.MfgCamera(
                mfg.MfgSettings.CAMERA_RATIO_X,
                mfg.MfgSettings.CAMERA_RATIO_Y
            );
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

            // this.renderer.options.showCollisions = true;

            this.renderer.canvas.width  = mfg.MfgSettings.CANVAS_WIDTH;
            this.renderer.canvas.height = mfg.MfgSettings.CANVAS_HEIGHT;

            this.renderer.options.hasBounds = true;

            this.engine.world.gravity = {
                x: 0.0,
                y: mfg.MfgSettings.DEFAULT_GRAVITY_Y,
                scale: 0.001
            };
        }

        /*****************************************************************************
        *   Inits the level.
        *****************************************************************************/
        private initLevel()
        {
            this.level = new mfg.MfgLevel( 5000, 600 );
            this.level.init();
        }

        /*****************************************************************************
        *   Starts the game loop.
        *****************************************************************************/
        private start()
        {
            // render 1st engine tick
            this.tick();

            // start the renderer
            Matter.Render.run( this.renderer );

            window.setInterval(
                this.tick,
                mfg.MfgSettings.RENDER_DELTA
            );
        }

        /*****************************************************************************
        *   Being invoked each tick of the game loop in order to render the game.
        *****************************************************************************/
        private tick=()=>
        {
            // handle player keys
            this.level.player.handleKeys();

            // render the engine
            this.render();

            // update MatterJS 2d engine
            Matter.Engine.update( this.engine, mfg.MfgSettings.RENDER_DELTA );
        };

        /*****************************************************************************
        *   Renders all game components.
        *****************************************************************************/
        private render()
        {
            // render level
            this.level.render();

            // render camera
            this.camera.update(
                this.level.width,
                this.level.height,
                mfg.MfgSettings.CANVAS_WIDTH,
                mfg.MfgSettings.CANVAS_HEIGHT,
                this.level.player.body.position.x,
                this.level.player.body.position.y,
                this.renderer
            );
        }
    }
