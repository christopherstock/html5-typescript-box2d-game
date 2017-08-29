
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
        *   Creates a new circle shape.
        *
        *   @param debugColor The color for the debug object.
        *   @param isStatic   Specifies that this object has a fixed position.
        *   @param angle      The rotation of this body in degrees.
        *   @param friction   The object's body friction.
        ***************************************************************************************************************/
        public constructor( type:number, diameter:number,
            debugColor:string,
            isStatic:boolean,
            angle:number,
            friction:number,
        )
        {
            super( type, debugColor, isStatic, angle, friction );

            this.diameter = diameter;
        }

        /***************************************************************************************************************
        *   Creates this shapes body.
        *
        *   @return The body for this shape.
        ***************************************************************************************************************/
        public createBody() : Matter.Body
        {
            return Matter.Bodies.circle(
                ( this.diameter / 2 ),
                ( this.diameter / 2 ),
                ( this.diameter / 2 ),
                this.options
            );
        }
    }
