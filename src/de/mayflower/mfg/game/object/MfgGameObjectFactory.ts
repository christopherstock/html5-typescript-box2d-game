
    import * as mfg from '../../mfg';

    /*******************************************************************************************************************
    *   Creates customized instances of game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class MfgGameObjectFactory
    {
        /***************************************************************************************************************
        *   Creates a box.
        *
        *   @param x        Anchor X.
        *   @param y        Anchor Y.
        *   @param width    Object width.
        *   @param height   Object height.
        *   @param friction The surface friction for this object.
        *
        *   @return       The created box.
        ***************************************************************************************************************/
        public static createBox( x:number, y:number, width:number, height:number, friction:number ):mfg.MfgBox
        {
            return new mfg.MfgBox( mfg.MfgGameObjectShape.RECTANGLE, x, y, width, height, friction );
        }

        /***************************************************************************************************************
        *   Creates a sphere.
        *
        *   @param x        Anchor X.
        *   @param y        Anchor Y.
        *   @param diameter Sphere diameter.
        *   @param friction The surface friction for this object.
        *
        *   @return         The created sphere.
        ***************************************************************************************************************/
        public static createSphere( x:number, y:number, diameter:number, friction:number ):mfg.MfgBox
        {
            return new mfg.MfgBox( mfg.MfgGameObjectShape.CIRCLE, x, y, diameter, diameter, friction );
        }

        /***************************************************************************************************************
        *   Creates an item.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *
        *   @return  The created item.
        ***************************************************************************************************************/
        public static createItem( x:number, y:number ):mfg.MfgItem
        {
            return new mfg.MfgItem( mfg.MfgGameObjectShape.RECTANGLE, x, y, 25.0, 25.0 );
        }

        /***************************************************************************************************************
        *   Creates an obstacle.
        *
        *   @param x               Anchor X.
        *   @param y               Anchor Y.
        *   @param width           Object width.
        *   @param height          Object height.
        *   @param angle           The initial rotation.
        *   @param jumpPassThrough Specifies if the player can jump through this obstacle.
        *
        *   @return                The created obstacle.
        ***************************************************************************************************************/
        public static createObstacle( x:number, y:number, width:number, height:number, angle:number, jumpPassThrough:boolean ):mfg.MfgObstacle
        {
            return new mfg.MfgObstacle( mfg.MfgGameObjectShape.RECTANGLE, x, y, width, height, angle, jumpPassThrough );
        }

        /***************************************************************************************************************
        *   Creates an enemy.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *
        *   @return  The created enemy.
        ***************************************************************************************************************/
        public static createEnemy( x:number, y:number ):mfg.MfgEnemy
        {
            return new mfg.MfgEnemy( mfg.MfgGameObjectShape.RECTANGLE, x, y, 50, 50 );
        }

        /***************************************************************************************************************
        *   Creates a decoration.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @param image  The decoration image.
        *
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createDecoration( x:number, y:number, width:number, height:number, image:string ):mfg.MfgDecoration
        {
            return new mfg.MfgDecoration( mfg.MfgGameObjectShape.RECTANGLE, x, y, width, height, image );
        }

        /***************************************************************************************************************
        *   Creates a sigsaw.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @param image  The decoration image.
        *
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createSigsaw( x:number, y:number, width:number, height:number, image:string ):mfg.MfgSigSaw
        {
            return new mfg.MfgSigSaw( mfg.MfgGameObjectShape.RECTANGLE, x, y, width, height, image );
        }

        /***************************************************************************************************************
         *   Creates a bounce.
         *
         *   @param x      Anchor X.
         *   @param y      Anchor Y.
         *   @param width  Object width.
         *   @param height Object height.
         *   @param image  The decoration image.
         *
         *   @return       The created decoration.
         ***************************************************************************************************************/
        public static createBounce( x:number, y:number, width:number, height:number, image:string ):mfg.MfgBounce
        {
            return new mfg.MfgBounce( mfg.MfgGameObjectShape.RECTANGLE, x, y, width, height, image );
        }
    }
