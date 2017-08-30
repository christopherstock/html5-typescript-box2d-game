
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
        public      height                  :number                     = 1000.0;

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects()
        {
            // init player
            //this.player = new mfg.MfgPlayer( 3500, 500, mfg.MfgCharacterLookingDirection.RIGHT );
            this.player = new mfg.MfgPlayer( 0.0, 0.0, mfg.MfgCharacterLookingDirection.RIGHT );

            // setup all game objects
            this.gameObjects =
            [
                // grounds and ramps
                mfg.MfgGameObjectFactory.createBlock( 0,    700, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createBlock( 490,  765, 500, 15, 15.0, false ),
                mfg.MfgGameObjectFactory.createBlock( 980,  830, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createBlock( 2310, 830, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createBlock( 3230, 830, 500, 15, 0.0,  false ),





/*
                // jump through obstacle
                mfg.MfgGameObjectFactory.createBlock( 3800,  2700, 400, 10, 0.0, true ),
*/
                // bg decoration
                mfg.MfgGameObjectFactory.createDecoration( 75,  550, 25, 150, null ),
                mfg.MfgGameObjectFactory.createDecoration( 150, 550, 25, 150, null ),
                mfg.MfgGameObjectFactory.createDecoration( 225, 550, 25, 150, null ),

                // moveable boxes
                mfg.MfgGameObjectFactory.createBox(    100,  500, 80, 80, mfg.MfgGameObject.FRICTION_CONCRETE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createSphere( 200,  500, 80,     mfg.MfgGameObject.FRICTION_GLASS,    mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    300,  500, 80, 80, mfg.MfgGameObject.FRICTION_ICE,      mfg.MfgGameObject.DENSITY_DEFAULT ),

                mfg.MfgGameObjectFactory.createSphere( 3600, 400, 80,     mfg.MfgGameObject.FRICTION_ICE,      mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    3625, 350, 80, 80, mfg.MfgGameObject.FRICTION_ICE,      mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    3650, 300, 80, 80, mfg.MfgGameObject.FRICTION_ICE,      mfg.MfgGameObject.DENSITY_DEFAULT ),

                // sigsaws and bounces
                mfg.MfgGameObjectFactory.createSigsaw( 1490, 830,  400, 25, null ),
                mfg.MfgGameObjectFactory.createBounce( 1900, 830,  400, 25, null ),

                // animated platforms
                mfg.MfgGameObjectFactory.createPlatform
                (
                    200.0,
                    15.0,
                    null,
                    mfg.MfgPlatform.SPEED_NORMAL,
                    [
                        Matter.Vector.create( 2820.0, 830.0 ),
                        Matter.Vector.create( 3020.0, 830.0 ),
                    ]
                ),

                // items
                mfg.MfgGameObjectFactory.createItem( 2500, 740 ),
                mfg.MfgGameObjectFactory.createItem( 2550, 740 ),
                mfg.MfgGameObjectFactory.createItem( 2600, 740 ),

                // player
                this.player,

                // enemies (fg)
                mfg.MfgGameObjectFactory.createEnemy( 1200, 0 ),

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 300, 550, 25, 150, null ),
                mfg.MfgGameObjectFactory.createDecoration( 375, 550, 25, 150, null ),
                mfg.MfgGameObjectFactory.createDecoration( 450, 550, 25, 150, null ),
            ];
        }
    }
