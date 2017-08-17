
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
        /** Specifies if the player shall be allowed to jump through this obstacle. */
        private         jumpPassThrough             :boolean                        = false;

        /***************************************************************************************************************
        *   Creates a new obstacle.
        *
        *   @param shape           The shape for this object.
        *   @param x               Startup position X.
        *   @param y               Startup position Y.
        *   @param width           The new width.
        *   @param height          The new height.
        *   @param angle           The initial rotation.
        *   @param jumpPassThrough Specifies if the player may jump through this obstacle.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number, angle:number, jumpPassThrough:boolean )
        {
            super
            (
                shape,
                x,
                y,
                width,
                height,
                mfg.MfgSettings.COLOR_DEBUG_OBSTACLE,
                false,
                true,
                null,
                angle,
                mfg.MfgGameObject.FRICTION_DEFAULT,
                Infinity
            );

            this.jumpPassThrough = jumpPassThrough;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {
            if ( this.jumpPassThrough )
            {

                if
                (
                    mfg.Mfg.game.level.player.body.velocity.y >= 0.0
/*
                    mfg.Mfg.game.level.player.body.position.y + mfg.Mfg.game.level.player.height / 2
                    <=  this.body.position.y
*/
                )
                {
                    this.body.collisionFilter = mfg.MfgSettings.COLLISION_GROUP_DEFAULT;
                }
                else
                {
                    this.body.collisionFilter = mfg.MfgSettings.COLLISION_GROUP_NON_COLLIDING;
                }

            }
        }
    }
