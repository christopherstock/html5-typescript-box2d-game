
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
        public      width                   :number                 = 0.0;
        public      height                  :number                 = 0.0;

        public      player                  :mfg.MfgPlayer          = null;
        public      obstacles               :Array<mfg.MfgObstacle> = null;
        public      boxes                   :Array<mfg.MfgBox>      = null;
        public      items                   :Array<mfg.MfgItem>     = null;

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
                mfg.MfgSettings.PLAYER_SIZE_X,
                mfg.MfgSettings.PLAYER_SIZE_Y
            );

            // init static obstacles
            this.obstacles = [
                new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, 0,   550, 600, 25 ),
                new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, 650, 550, 600, 25 ),
                new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, 250, 470, 80,  80 ),
            ];

            // init moveable boxes
            this.boxes = [
                new mfg.MfgBox( mfg.MfgGameObjectShape.ECircle,    360, 0,  40, 40 ),
                new mfg.MfgBox( mfg.MfgGameObjectShape.ERectangle, 380, 60, 80, 80 ),
            ];

            // init items
            this.items = [
                new mfg.MfgItem( mfg.MfgGameObjectShape.ERectangle, 800, 450, 25, 25 ),
                new mfg.MfgItem( mfg.MfgGameObjectShape.ERectangle, 850, 450, 25, 25 ),
                new mfg.MfgItem( mfg.MfgGameObjectShape.ERectangle, 900, 450, 25, 25 ),
            ];

            // adding bodies increases z-index!




            // add bg objects behind the game objects


            // add player body
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.player.body );

            // add all obstacles
            for ( let obstacle of this.obstacles ) {
                Matter.World.addBody( mfg.MfgInit.game.engine.world, obstacle.body );
            }

            // add all boxes
            for ( let box of this.boxes ) {
                Matter.World.addBody( mfg.MfgInit.game.engine.world, box.body );
            }

            // add all items
            for ( let item of this.items )
            {
                Matter.World.addBody( mfg.MfgInit.game.engine.world, item.body );
            }

            // add deco objects in front of the game objects


        }

        /*****************************************************************************
        *   Renders all level components.
        *****************************************************************************/
        public render()
        {
            // render player
            this.player.render();

            // render item
            for ( let item of this.items )
            {
                item.render();
            }
        }
    }
