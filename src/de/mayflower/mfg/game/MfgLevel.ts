
    import * as Matter   from 'matter-js';
    import * as mfg      from '../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgLevel
    {
        public      ground                  :Matter.Body        = null;

        public      boxB                    :Matter.Body        = null;
        public      boxC                    :Matter.Body        = null;
        public      boxD                    :Matter.Body        = null;

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public init()
        {
            // ground
            this.ground = Matter.Bodies.rectangle( 400, 550, 750, 26, { isStatic: true } );

            // moveable boxes
            this.boxB   = Matter.Bodies.rectangle( 400, 40, 80, 80 );
            this.boxC   = Matter.Bodies.rectangle( 420, 100, 80, 80 );

            // static box
            this.boxD   = Matter.Bodies.rectangle( 210, 497, 80, 80 );
            Matter.Body.setStatic( this.boxD, true );


            // add all bodies to the world
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.ground );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxB   );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxC   );
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxD   );
        }
    }
