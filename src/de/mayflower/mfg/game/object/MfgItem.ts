
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
        public constructor( x:number, y:number, width:number, height:number )
        {
            super( x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_ITEM );

            this.body.isStatic = true;

            // put the item into a unique collision group so its uncollidable
            this.body.collisionFilter = {
                category: 0x0001,
                mask: 0x00002,
                group: 0x0003
            };
        }

        /*****************************************************************************
        *   Picks up this item.
        *****************************************************************************/
        public pick()
        {
            // flag as picked
            this.picked = true;

            // remove the body from the world
            Matter.World.remove( mfg.MfgInit.game.engine.world, this.body );
        }
    }
