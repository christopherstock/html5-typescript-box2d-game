
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgLevel
    {
        public      width                   :number                     = 0.0;
        public      height                  :number                     = 0.0;

        public      player                  :mfg.MfgPlayer              = null;
        private     gameObjects             :Array<mfg.MfgGameObject>   = null;

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public constructor( width:number, height:number )
        {
            this.width  = width;
            this.height = height;
        }

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public init()
        {
            // init player
            this.player = new mfg.MfgPlayer(
                null,
                0,
                0,
                mfg.MfgSettings.PLAYER_WIDTH,
                mfg.MfgSettings.PLAYER_HEIGHT
            );

            // adding bodies increases z-index!
            this.gameObjects =
            [
                // bg decoration
                mfg.MfgGameObjectFactory.createDecoration( 30, 860, 120, 120 ),

                // static obstacles
                mfg.MfgGameObjectFactory.createObstacle( 0,    950, 600,  25 ),
                mfg.MfgGameObjectFactory.createObstacle( 700,  950, 600,  25 ),
                mfg.MfgGameObjectFactory.createObstacle( 1350, 950, 1650, 25 ),
                mfg.MfgGameObjectFactory.createObstacle( 250, 870, 80,  80 ),

                // moveable boxes
                mfg.MfgGameObjectFactory.createBox( 380, 60, 80, 80 ),
                mfg.MfgGameObjectFactory.createSphere( 360, 0, 40, 40 ),

                // items
                mfg.MfgGameObjectFactory.createItem( 800, 850 ),
                mfg.MfgGameObjectFactory.createItem( 850, 850 ),
                mfg.MfgGameObjectFactory.createItem( 900, 850 ),

                // enemies
                mfg.MfgGameObjectFactory.createEnemy( 800, 0 ),

                // player
                this.player,

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 860, 860, 60, 120 ),
            ];

            // add all bodies of all game objects to the world
            for ( let gameObject of this.gameObjects ) {
                Matter.World.addBody( mfg.MfgInit.game.engine.world, gameObject.body );
            }
        }

        /*****************************************************************************
        *   Renders all level components.
        *****************************************************************************/
        public render()
        {
            // render game objects
            for ( let gameObject of this.gameObjects )
            {
                gameObject.render();
            }
        }
    }
