
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   The level set for the dev level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgLevelDev extends mfg.MfgLevel
    {
        /** The width of this level. */
        public      width                   :number                     = 5000.0;
        /** The height of this level. */
        public      height                  :number                     = 5000.0;

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects()
        {
            // init player
            this.player = new mfg.MfgPlayer( 2000, 500, mfg.MfgCharacterLookingDirection.ERight );

            // setup all game objects
            this.gameObjects =
            [
                // grounds and ramps
                mfg.MfgGameObjectFactory.createObstacle( 0,    700, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createObstacle( 490,  765, 500, 15, 15.0, false ),
                mfg.MfgGameObjectFactory.createObstacle( 980,  830, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createObstacle( 2310, 830, 500, 15, 0.0,  false ),
/*
                // jump through obstacle
                mfg.MfgGameObjectFactory.createObstacle( 3800,  2700, 400, 10, 0.0, true ),
*/
                // bg decoration
                mfg.MfgGameObjectFactory.createDecoration( 75,  550, 25, 150, null ),
                mfg.MfgGameObjectFactory.createDecoration( 150, 550, 25, 150, null ),
                mfg.MfgGameObjectFactory.createDecoration( 225, 550, 25, 150, null ),

                // moveable boxes
                mfg.MfgGameObjectFactory.createBox(    100,  500, 80, 80, mfg.MfgGameObject.FRICTION_CONCRETE ),
                mfg.MfgGameObjectFactory.createSphere( 200,  500, 80,     mfg.MfgGameObject.FRICTION_GLASS    ),
                mfg.MfgGameObjectFactory.createBox(    300,  500, 80, 80, mfg.MfgGameObject.FRICTION_ICE      ),

                // sigsaws and bounces
                mfg.MfgGameObjectFactory.createSigsaw( 1490, 830,  400, 25, null ),
                mfg.MfgGameObjectFactory.createBounce( 1900, 830,  400, 25, null ),

                // animated platforms
                new mfg.MfgPlatform( mfg.MfgGameObjectShape.ERectangle, 200.0, 15.0, 0.0, mfg.MfgPlatform.SPEED_NORMAL,
                    [
                        Matter.Vector.create( 2820.0, 830.0 ),
                        Matter.Vector.create( 3020.0, 830.0 ),
                    ]
                ),

                // items
                mfg.MfgGameObjectFactory.createItem( 2500, 740 ),
                mfg.MfgGameObjectFactory.createItem( 2550, 740 ),
                mfg.MfgGameObjectFactory.createItem( 2600, 740 ),
/*
                // enemies
                mfg.MfgGameObjectFactory.createEnemy( 845, 2000 ),
*/
                // player
                this.player,

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 300, 550, 25, 150, null ),
                mfg.MfgGameObjectFactory.createDecoration( 375, 550, 25, 150, null ),
                mfg.MfgGameObjectFactory.createDecoration( 450, 550, 25, 150, null ),
            ];
        }
    }
