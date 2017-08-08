
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
        public      player                  :mfg.MfgPlayer      = null;

        public      ground                  :mfg.MfgObstacle    = null;
        public      obstacleA               :mfg.MfgObstacle    = null;

        public      boxA                    :mfg.MfgBox         = null;
        public      boxB                    :mfg.MfgBox         = null;

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public init()
        {
            // init player
            this.player    = new mfg.MfgPlayer( 0, 0 );

            // init static obstacles
            this.ground    = new mfg.MfgObstacle( 0,   550, 600, 25 );
            this.obstacleA = new mfg.MfgObstacle( 250, 470, 80,  80 );

            // init moveable boxes
            this.boxA      = new mfg.MfgBox( 360, 0,  80, 80 );
            this.boxB      = new mfg.MfgBox( 380, 60, 80, 80 );

            // add all game objects to the world
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.player.body    );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.ground.body    );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.obstacleA.body );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxA.body      );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxB.body      );
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
