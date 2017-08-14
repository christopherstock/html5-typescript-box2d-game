
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a collidable and solid obstacle.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgObstacle extends mfg.MfgGameObject
    {
        /***************************************************************************************************************
        *   Creates a new obstacle.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param width  The new width.
        *   @param height The new height.
        *   @param angle  The initial rotation.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number, angle:number )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_OBSTACLE, false, true, null, angle, mfg.MfgGameObject.FRICTION_DEFAULT );
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {


/*
console.dir( this.body.collisionFilter );


            if ( this.body.position.y > mfg.Mfg.game.level.player.body.position.y )
            {
                this.body.collisionFilter = mfg.MfgSettings.UNIQUE_COLLISION_GROUP_1;
            }
            else
*/
            {
//                this.body.collisionFilter = mfg.MfgSettings.UNIQUE_COLLISION_GROUP_2;
            }


        }
    }
