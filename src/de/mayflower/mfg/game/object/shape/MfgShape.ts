
    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgShape
    {
        /** The shape of a rectangle. */
        public      static          RECTANGLE               :number             = 0;

        /** The shape of a circle. */
        public      static          CIRCLE                  :number             = 1;

        /** The type of this shape. */
        public                      type                    :number             = 0;

        /***************************************************************************************************************
        *   Creates a new game object shape.
        *
        *   @author     Christopher Stock
        *   @version    0.0.1
        ***************************************************************************************************************/
        public constructor( type:number )
        {
            this.type = type;
        }
    }
