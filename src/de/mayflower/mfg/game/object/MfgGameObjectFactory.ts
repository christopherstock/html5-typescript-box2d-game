
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
            return new mfg.MfgBox
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_BOX,
                    false,
                    0.0,
                    friction
                ),
                x,
                y,
                width,
                height
            );
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
            return new mfg.MfgBox
            (
                new mfg.MfgShapeCircle
                (
                    diameter,
                    mfg.MfgSettings.COLOR_DEBUG_BOX,
                    false,
                    0.0,
                    friction
                ),
                x,
                y,
                diameter,
                diameter
            );
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
            return new mfg.MfgItem
            (
                new mfg.MfgShapeRectangle
                (
                    25.0,
                    25.0,
                    mfg.MfgSettings.COLOR_DEBUG_ITEM,
                    true,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT
                ),
                x,
                y,
                25.0,
                25.0
            );
        }

        /***************************************************************************************************************
        *   Creates an rectangular obstacle.
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
        public static createBlock( x:number, y:number, width:number, height:number, angle:number, jumpPassThrough:boolean ):mfg.MfgObstacle
        {
            return new mfg.MfgObstacle
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_OBSTACLE,
                    true,
                    angle,
                    mfg.MfgGameObject.FRICTION_DEFAULT
                ),
                x,
                y,
                width,
                height,
                jumpPassThrough
            );
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
            return new mfg.MfgEnemy
            (
                new mfg.MfgShapeRectangle
                (
                    50.0,
                    50.0,
                    mfg.MfgSettings.COLOR_DEBUG_ENEMY,
                    false,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                ),
                x,
                y,
                50,
                50
            );
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
            return new mfg.MfgDecoration
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_DECORATION,
                    true,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT
                ),
                x,
                y,
                width,
                height,
                image
            );
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
            return new mfg.MfgSigSaw
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_SIGSAW,
                    false,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                ),
                x,
                y,
                width,
                height,
                image
            );
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
            return new mfg.MfgBounce
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_BOUNCE,
                    false,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                ),
                x,
                y,
                width,
                height,
                image
            );
        }
    }
