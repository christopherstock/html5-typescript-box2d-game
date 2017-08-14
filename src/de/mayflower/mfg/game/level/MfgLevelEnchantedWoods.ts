
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   The level set for the level 'enchanted woods'.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgLevelEnchantedWoods extends mfg.MfgLevel
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
            this.player = new mfg.MfgPlayer( 0, 0, mfg.MfgCharacterLookingDirection.ERight );

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

                // moveable boxes

                // sigsaws

                // items

                // enemies

                // player
                this.player,

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 700,  860, 120, 90, null ),
                mfg.MfgGameObjectFactory.createDecoration( 2000, 860, 120, 90, null ),
            ];
        }
    }
