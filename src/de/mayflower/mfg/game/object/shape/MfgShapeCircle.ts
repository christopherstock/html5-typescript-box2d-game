
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
        public              diameter                :number             = 0.0;

        /***************************************************************************************************************
        *   Creates a new game object shape.
        *
        *   @author     Christopher Stock
        *   @version    0.0.1
        ***************************************************************************************************************/
        public constructor( type:number, diameter:number )
        {
            super( type );

            this.diameter = diameter;
        }

        public createBody( options:Matter.IBodyDefinition ) : Matter.Body
        {
            return Matter.Bodies.circle(
                ( this.diameter / 2 ),
                ( this.diameter / 2 ),
                ( this.diameter / 2 ),
                options
            );
        }
    }
