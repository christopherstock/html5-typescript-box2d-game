
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a pickable item.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgItem extends mfg.MfgGameObject
    {
        /** Indicates if this item has been picked. */
        public          picked                      :boolean                        = null;

        /***************************************************************************************************************
        *   Creates a new item.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param width  The new width.
        *   @param height The new height.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_ITEM, true, true, null, 0.0 );
        }

        /***************************************************************************************************************
        *   Renders this item.
        ***************************************************************************************************************/
        public render()
        {
            if ( !this.picked )
            {
                if ( Matter.Bounds.overlaps( this.body.bounds, mfg.Mfg.game.level.player.body.bounds ) )
                {
                    mfg.MfgDebug.item.log("Player picked item");

                    this.pick();
                }
            }
        }

        /***************************************************************************************************************
        *   Picks up this item.
        ***************************************************************************************************************/
        private pick()
        {
            // flag as picked
            this.picked = true;

            // remove the body from the world
            Matter.World.remove( mfg.Mfg.game.engine.world, this.body );
        }
    }
