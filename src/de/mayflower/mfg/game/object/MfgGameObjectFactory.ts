
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   The abstract class of all game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export abstract class MfgGameObjectFactory
    {
        public static createBox( x:number, y:number, width:number, height:number ):mfg.MfgBox
        {
            return new mfg.MfgBox( mfg.MfgGameObjectShape.ERectangle, x, y, width, height );
        }

        public static createSphere( x:number, y:number, width:number, height:number ):mfg.MfgBox
        {
            return new mfg.MfgBox( mfg.MfgGameObjectShape.ECircle, x, y, width, height );
        }

        public static createItem( x:number, y:number ):mfg.MfgItem
        {
            return new mfg.MfgItem( mfg.MfgGameObjectShape.ERectangle, x, y, 25.0, 25.0 );
        }

        public static createObstacle( x:number, y:number, width:number, height:number ):mfg.MfgObstacle
        {
            return new mfg.MfgObstacle( mfg.MfgGameObjectShape.ERectangle, x, y, width, height );
        }

        public static createEnemy( x:number, y:number ):mfg.MfgEnemy
        {
            return new mfg.MfgEnemy( mfg.MfgGameObjectShape.ERectangle, 800, 0, 50, 50 );
        }

        public static createDecoration( x:number, y:number, width:number, height:number ):mfg.MfgObstacle
        {
            return new mfg.MfgDecoration( mfg.MfgGameObjectShape.ERectangle, x, y, width, height );
        }
    }
