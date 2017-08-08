
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

        /*****************************************************************************
        *   Inits the game from scratch.
        *****************************************************************************/
        public init()
        {
            // add some example objects
            this.boxB   = Matter.Bodies.rectangle( 450, 50, 80, 80 );
            this.ground = Matter.Bodies.rectangle( 400, 610, 810, 60, { isStatic: true } );
        }
    }
