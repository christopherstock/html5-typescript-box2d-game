
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
            super( x, y, width, height );

            this.body.isStatic = true;
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
