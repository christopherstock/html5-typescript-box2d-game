
    import * as Matter from 'matter-js';
    import * as mfg    from '../../../mfg';

    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgShapeRectangle extends mfg.MfgShape
    {
        public              width           :number                 = 0.0;

        public              height          :number                 = 0.0;

        /***************************************************************************************************************
        *   Creates a new game object shape.
        *
        *   @author     Christopher Stock
        *   @version    0.0.1
        ***************************************************************************************************************/
        public constructor( type:number, width:number, height:number )
        {
            super( type );

            this.width  = width;
            this.height = height;
        }

        public createBody( options:Matter.IBodyDefinition ) : Matter.Body
        {
            return Matter.Bodies.rectangle(
                ( this.width  / 2 ),
                ( this.height / 2 ),
                this.width,
                this.height,
                options
            );
        }
    }
