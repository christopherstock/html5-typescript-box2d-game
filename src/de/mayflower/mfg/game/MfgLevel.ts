
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

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
        public      gameObjects             :Array<mfg.MfgGameObject>   = null;

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
            this.gameObjects = [

                // add bg objects behind the game objects

                // static obstacles
                new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, 0,    950, 600,  25 ),
                new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, 650,  950, 600,  25 ),
                new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, 1350, 950, 1650, 25 ),
/*
                new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, 250, 870, 80,  80 ),
*/

/*
                // moveable boxes
                new mfg.MfgBox( mfg.MfgGameObjectShape.ECircle,    360, 0,  40, 40 ),
                new mfg.MfgBox( mfg.MfgGameObjectShape.ERectangle, 380, 60, 80, 80 ),
*/
                // items
                new mfg.MfgItem( mfg.MfgGameObjectShape.ERectangle, 800, 850, 25, 25 ),
                new mfg.MfgItem( mfg.MfgGameObjectShape.ERectangle, 850, 850, 25, 25 ),
                new mfg.MfgItem( mfg.MfgGameObjectShape.ERectangle, 900, 850, 25, 25 ),

                // enemies
                new mfg.MfgEnemy( mfg.MfgGameObjectShape.ERectangle, 800, 0, 50, 50 ),



                // add fg objects behind the game objects

            ];

            // add player body
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.player.body );

            // add all game objects
            for ( let gameObject of this.gameObjects ) {
                Matter.World.addBody( mfg.MfgInit.game.engine.world, gameObject.body );
            }
        }

        /*****************************************************************************
        *   Renders all level components.
        *****************************************************************************/
        public render()
        {
            // render player
            this.player.render();

            // render game objects
            for ( let gameObject of this.gameObjects )
            {
                gameObject.render();
            }
        }
    }
