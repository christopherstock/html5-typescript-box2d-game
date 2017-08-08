
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgBox
    {
        public              body                :Matter.Body            = null;

        public constructor( x:number, y:number, width:number, height:number )
        {
            this.body = Matter.Bodies.rectangle( x, y, width, height );
            this.body.isStatic = false;
        }
    }
