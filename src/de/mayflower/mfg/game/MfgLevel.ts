
    const Matter = require('matter-js');
    import {MfgDebug}    from '../mfg';
    import {MfgSettings} from '../mfg';
    import {MfgPlayer}   from '../mfg';
    import {MfgInit}     from '../mfg';

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

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public init()
        {
            // add some example objects
            this.boxB   = Matter.Bodies.rectangle( 400, 40, 80, 80 );
            this.boxC   = Matter.Bodies.rectangle( 420, 100, 80, 80 );
            this.ground = Matter.Bodies.rectangle( 400, 550, 750, 25, { isStatic: true } );
        }
    }
