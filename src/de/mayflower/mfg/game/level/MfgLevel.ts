
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents the current level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgLevel
    {
        /** The width of this level. */
        public      width                   :number                     = 0.0;
        /** The height of this level. */
        public      height                  :number                     = 0.0;

        /** The player instance. */
        public      player                  :mfg.MfgPlayer              = null;
        /** ALL game objects for this level, including the player. */
        public      gameObjects             :Array<mfg.MfgGameObject>   = null;

        /***************************************************************************************************************
        *   Creates a new level.
        *
        *   @param width  The width for the new level.
        *   @param height The height for the new level.
        ***************************************************************************************************************/
        public constructor( width:number, height:number )
        {
            this.width  = width;
            this.height = height;
        }

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        public init()
        {
            // init player
            this.player = new mfg.MfgPlayer( 0, 0, mfg.MfgSettings.PLAYER_WIDTH, mfg.MfgSettings.PLAYER_HEIGHT );

            // setup all game objects
            this.gameObjects =
            [
                // bg decoration
                // mfg.MfgGameObjectFactory.createDecoration( 0, 0, this.width, this.height, mfg.MfgImages.IMAGE_BG_FOREST_GREEN ),

                // bg decoration
                mfg.MfgGameObjectFactory.createDecoration( 860,  860, 120, 90, null ),
                mfg.MfgGameObjectFactory.createDecoration( 2200, 860, 120, 90, null ),

                // static obstacles
                mfg.MfgGameObjectFactory.createObstacle( 0,    950, 1380, 25, 0.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 1840, 950, 1380, 25, 0.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 320,  870, 80,   80, 0.0 ),

                mfg.MfgGameObjectFactory.createObstacle( 80,    700, 400, 15, -15.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 380,   500, 400, 15, -15.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 1320,  700, 400, 15, -15.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 2000,  300, 400, 15, -15.0 ),

                // moveable boxes
                mfg.MfgGameObjectFactory.createBox(    370,  100, 80, 80 ),
                mfg.MfgGameObjectFactory.createSphere( 320,  0,   100    ),
                mfg.MfgGameObjectFactory.createBox(    1000, 80,  80, 80 ),

                // sigsaws
                mfg.MfgGameObjectFactory.createSigsaw( 1420, 950, 400, 25, null ),

                // items
                mfg.MfgGameObjectFactory.createItem( 1100, 850 ),
                mfg.MfgGameObjectFactory.createItem( 1150, 850 ),
                mfg.MfgGameObjectFactory.createItem( 1200, 850 ),

                mfg.MfgGameObjectFactory.createItem( 2600, 850 ),
                mfg.MfgGameObjectFactory.createItem( 2650, 850 ),
                mfg.MfgGameObjectFactory.createItem( 2700, 850 ),

                // enemies
                mfg.MfgGameObjectFactory.createEnemy( 800, 0 ),

                // player
                this.player,

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 700,  860, 120, 90, null ),
                mfg.MfgGameObjectFactory.createDecoration( 2000, 860, 120, 90, null ),
            ];

            // add all bodies of all game objects to the world
            for ( let gameObject of this.gameObjects ) {
                Matter.World.addBody( mfg.MfgInit.game.engine.world, gameObject.body );
            }
        }

        /***************************************************************************************************************
        *   Renders all level components.
        ***************************************************************************************************************/
        public render()
        {
            // render game objects
            for ( let gameObject of this.gameObjects )
            {
                gameObject.render();
            }
        }
    }
