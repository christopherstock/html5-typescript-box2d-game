
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
        public      width                   :number                     = 3000.0;
        /** The height of this level. */
        public      height                  :number                     = 1500.0;

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects()
        {
            // init player
            this.player = new mfg.MfgPlayer( 1500, 0 );

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
//                mfg.MfgGameObjectFactory.createObstacle( 1840, 950, 1380, 25, 0.0 ),
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
                mfg.MfgGameObjectFactory.createBounce( 1840, 950, 400, 25, null ),

                // items
                mfg.MfgGameObjectFactory.createItem( 1100, 850 ),
                mfg.MfgGameObjectFactory.createItem( 1150, 850 ),
                mfg.MfgGameObjectFactory.createItem( 1200, 850 ),

                mfg.MfgGameObjectFactory.createItem( 2600, 850 ),
                mfg.MfgGameObjectFactory.createItem( 2650, 850 ),
                mfg.MfgGameObjectFactory.createItem( 2700, 850 ),

                // enemies
                mfg.MfgGameObjectFactory.createEnemy( 845, 0 ),

                // player
                this.player,

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 700,  860, 120, 90, null ),
                mfg.MfgGameObjectFactory.createDecoration( 2000, 860, 120, 90, null ),
            ];
        }
    }
