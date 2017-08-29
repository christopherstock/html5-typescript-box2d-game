
    import * as Matter from 'matter-js';
    import * as mfg    from '../../../mfg';

    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgShapeCircle extends mfg.MfgShape
    {


        /***************************************************************************************************************
        *   Creates a new game object shape.
        *
        *   @author     Christopher Stock
        *   @version    0.0.1
        ***************************************************************************************************************/
        public constructor( type:number, diameter:number )
        {
            super( type );


        }

        public createBody() : Matter.Body
        {


            return null;
        }
    }
