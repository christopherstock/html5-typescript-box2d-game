
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
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @return       The created box.
        ***************************************************************************************************************/
        public static createBox( x:number, y:number, width:number, height:number ):mfg.MfgBox
        {
            return new mfg.MfgBox( mfg.MfgGameObjectShape.ERectangle, x, y, width, height );
        }

        /***************************************************************************************************************
        *   Creates a sphere.
        *
        *   @param x        Anchor X.
        *   @param y        Anchor Y.
        *   @param diameter Sphere diameter.
        *   @return         The created sphere.
        ***************************************************************************************************************/
        public static createSphere( x:number, y:number, diameter:number ):mfg.MfgBox
        {
            return new mfg.MfgBox( mfg.MfgGameObjectShape.ECircle, x, y, diameter, diameter );
        }

        /***************************************************************************************************************
        *   Creates an item.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *   @return  The created item.
        ***************************************************************************************************************/
        public static createItem( x:number, y:number ):mfg.MfgItem
        {
            return new mfg.MfgItem( mfg.MfgGameObjectShape.ERectangle, x, y, 25.0, 25.0 );
        }

        /***************************************************************************************************************
        *   Creates an obstacle.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @param angle  The initial rotation.
        *   @return       The created obstacle.
        ***************************************************************************************************************/
        public static createObstacle( x:number, y:number, width:number, height:number, angle:number ):mfg.MfgObstacle
        {
            return new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, x, y, width, height, angle );
        }

        /***************************************************************************************************************
        *   Creates an enemy.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *   @return  The created enemy.
        ***************************************************************************************************************/
        public static createEnemy( x:number, y:number ):mfg.MfgEnemy
        {
            return new mfg.MfgEnemy( mfg.MfgGameObjectShape.ERectangle, 800, 0, 50, 50 );
        }

        /***************************************************************************************************************
        *   Creates a decoration.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @param image  The decoration image.
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createDecoration( x:number, y:number, width:number, height:number, image:string ):mfg.MfgObstacle
        {
            return new mfg.MfgDecoration( mfg.MfgGameObjectShape.ERectangle, x, y, width, height, image );
        }

        /***************************************************************************************************************
        *   Creates a sigsaw.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @param image  The decoration image.
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createSigsaw( x:number, y:number, width:number, height:number, image:string ):mfg.MfgSigSaw
        {
            return new mfg.MfgSigSaw( mfg.MfgGameObjectShape.ERectangle, x, y, width, height, image );
        }
    }
