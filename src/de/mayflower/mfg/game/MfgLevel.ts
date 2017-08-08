
    import * as Matter   from 'matter-js';
    import * as mfg      from '../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgLevel
    {
        public      ground                  :mfg.MfgObstacle    = null;
        public      player                  :mfg.MfgPlayer      = null;

        public      boxB                    :mfg.MfgBox         = null;
        public      boxC                    :mfg.MfgBox         = null;
        public      boxD                    :mfg.MfgObstacle    = null;

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public init()
        {
            // init ground
            this.ground = new mfg.MfgObstacle( 400, 550, 750, 26 );

            // init player
            this.player = new mfg.MfgPlayer();

            // init moveable boxes
            this.boxB   = new mfg.MfgBox( 400, 40, 80, 80 );
            this.boxC   = new mfg.MfgBox( 420, 100, 80, 80 );

            // init static obstacles
            this.boxD   = new mfg.MfgObstacle( 210, 497, 80, 80 );


            // add all game objects to the world
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.ground.body );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.player.body );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxB.body   );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxC.body   );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxD.body   );
        }

        /*****************************************************************************
        *   Renders all level components.
        *****************************************************************************/
        public render()
        {
            // render player
            this.player.render();
        }
    }
