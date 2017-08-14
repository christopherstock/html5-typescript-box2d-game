
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
            this.player = new mfg.MfgPlayer( 3000, 2650, mfg.MfgCharacterLookingDirection.ELeft );

            // setup all game objects
            this.gameObjects =
            [
                // bg decoration
                // mfg.MfgGameObjectFactory.createDecoration( 0, 0, this.width, this.height, mfg.MfgImages.IMAGE_BG_FOREST_GREEN ),

                // bg decoration
                mfg.MfgGameObjectFactory.createDecoration( 860,  2860, 120, 90, null ),
                mfg.MfgGameObjectFactory.createDecoration( 2200, 2860, 120, 90, null ),

                // static obstacles
                mfg.MfgGameObjectFactory.createObstacle( 0,    2950, 1380, 25, 0.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 2260, 2950, 2000, 25, 0.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 320,  2870, 80,   80, 0.0 ),

                mfg.MfgGameObjectFactory.createObstacle( 80,    2700, 400, 15, -15.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 380,   2500, 400, 15, -15.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 1320,  2700, 400, 15, -15.0 ),
                mfg.MfgGameObjectFactory.createObstacle( 2000,  2300, 400, 15, -15.0 ),

                // moveable boxes
                mfg.MfgGameObjectFactory.createBox(    370,  2100, 80, 80 ),
                mfg.MfgGameObjectFactory.createSphere( 320,  2000,   100    ),
                mfg.MfgGameObjectFactory.createBox(    1000, 2080,  80, 80 ),

                // sigsaws
                mfg.MfgGameObjectFactory.createSigsaw( 1420, 2950, 400, 25, null ),
                mfg.MfgGameObjectFactory.createBounce( 1840, 2950, 400, 25, null ),

                // items
                mfg.MfgGameObjectFactory.createItem( 1100, 2850 ),
                mfg.MfgGameObjectFactory.createItem( 1150, 2850 ),
                mfg.MfgGameObjectFactory.createItem( 1200, 2850 ),

                mfg.MfgGameObjectFactory.createItem( 2600, 2850 ),
                mfg.MfgGameObjectFactory.createItem( 2650, 2850 ),
                mfg.MfgGameObjectFactory.createItem( 2700, 2850 ),

                // enemies
                mfg.MfgGameObjectFactory.createEnemy( 845, 2000 ),

                // player
                this.player,

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 700,  2860, 120, 90, null ),
                mfg.MfgGameObjectFactory.createDecoration( 2000, 2860, 120, 90, null ),
            ];
        }
    }
