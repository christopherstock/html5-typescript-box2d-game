
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

    /*****************************************************************************
    *   The abstract class of all game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export abstract class MfgGameObject
    {
        /** The game objects' body. */
        public          body                    :Matter.Body                    = null;

        /*****************************************************************************
        *   Creates a new player instance.
        *****************************************************************************/
        public constructor( x:number, y:number, width:number, height:number )
        {
            this.body = Matter.Bodies.rectangle( x, y, width, height );
        }
    }
