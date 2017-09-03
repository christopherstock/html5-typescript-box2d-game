
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
            this.player = new mfg.MfgPlayer( 750, 880, mfg.MfgCharacterLookingDirection.LEFT );

            // setup all game objects
            this.gameObjects =
            [
                // static level blocks
                mfg.MfgGameObjectFactory.createBlock( 0, 1000, 2000, 20, 0.0, false ),

                // bg decoration
                mfg.MfgGameObjectFactory.createDecoration( 250,  870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 750,  870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 1250, 870, 120, 90, mfg.MfgImage.IMAGE_TREE ),

                // moveable boxes

                // sigsaws

                // items

                // enemies

                // player
                this.player,

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 500,  870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 1000, 870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 1500, 870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
            ];
        }
    }
