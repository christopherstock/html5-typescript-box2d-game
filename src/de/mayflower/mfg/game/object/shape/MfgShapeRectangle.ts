
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
        *   Creates a new circle shape.
        *
        *   @param debugColor The color for the debug object.
        *   @param isStatic   Specifies that this object has a fixed position.
        *   @param angle      The rotation of this body in degrees.
        *   @param friction   The object's body friction.
        ***************************************************************************************************************/
        public constructor
        (
            width:number,
            height:number,
            debugColor:string,
            isStatic:boolean,
            angle:number,
            friction:number,
        )
        {
            super( debugColor, isStatic, angle, friction );

            this.width  = width;
            this.height = height;
        }

        /***************************************************************************************************************
        *   Creates this shapes body.
        *
        *   @return The body for this shape.
        ***************************************************************************************************************/
        public createBody() : Matter.Body
        {
            return Matter.Bodies.rectangle(
                ( this.width  / 2 ),
                ( this.height / 2 ),
                this.width,
                this.height,
                this.options
            );
        }
    }
