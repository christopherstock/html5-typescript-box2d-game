
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

        public      groundA                 :mfg.MfgObstacle        = null;
        public      groundB                 :mfg.MfgObstacle        = null;
        public      obstacleA               :mfg.MfgObstacle        = null;

        public      boxA                    :mfg.MfgBox             = null;
        public      boxB                    :mfg.MfgBox             = null;

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
            this.player     = new mfg.MfgPlayer(
                0,
                0,
                mfg.MfgSettings.PLAYER_SIZE_X,
                mfg.MfgSettings.PLAYER_SIZE_Y
            );

            // init static obstacles
            this.groundA    = new mfg.MfgObstacle( 0,   550, 600, 25 );
            this.groundB    = new mfg.MfgObstacle( 650, 550, 600, 25 );
            this.obstacleA  = new mfg.MfgObstacle( 250, 470, 80,  80 );

            // init moveable boxes
            this.boxA       = new mfg.MfgBox( 360, 0,  80, 80 );
            this.boxB       = new mfg.MfgBox( 380, 60, 80, 80 );

            // init items
            this.items      = [
                new mfg.MfgItem( 800, 450, 25, 25 ),
                new mfg.MfgItem( 850, 450, 25, 25 ),
                new mfg.MfgItem( 900, 450, 25, 25 ),
            ];

            // adding bodies increases z-index!

            // add bg objects behind the game objects

/*
            // join player parts and add them to the world
            let playerBodies = Matter.Body.create(
                {
                    parts: [
                        this.player.body,
                        this.player.bottomCollisionChecker
                    ],
                    friction: 0
                }
            );
*/
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.player.body    );

            // add all game objects to the world
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.groundA.body   );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.groundB.body   );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.obstacleA.body );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxA.body      );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxB.body      );

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

            // check item collision
            for ( let item of this.items )
            {
                if ( !item.picked )
                {
                    if ( Matter.Bounds.overlaps( item.body.bounds, this.player.body.bounds ) )
                    {
                        mfg.MfgDebug.item.log(">> Player picked item!");

                        item.pick();
                    }
                }
            }
        }
    }
