
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgItem extends mfg.MfgGameObject
    {
        /** Indicates if this item has been picked. */
        public          picked                      :boolean                        = null;

        /*****************************************************************************
        *   Creates a new game item.
        *****************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_ITEM, true, true );

            // put the item into a unique collision group so its uncollidable
            this.body.collisionFilter = {
                category: 0x0001,
                mask:     0x00002,
                group:    0x0003
            };
        }

        /*****************************************************************************
        *   Render this item.
        *****************************************************************************/
        public render()
        {
            if ( !this.picked )
            {
                if ( Matter.Bounds.overlaps( this.body.bounds, mfg.MfgInit.game.level.player.body.bounds ) )
                {
                    mfg.MfgDebug.item.log(">> Player picked item!");

                    this.pick();
                }
            }
        }

        /*****************************************************************************
        *   Picks up this item.
        *****************************************************************************/
        private pick()
        {
            // flag as picked
            this.picked = true;

            // remove the body from the world
            Matter.World.remove( mfg.MfgInit.game.engine.world, this.body );
        }
    }
