
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Represents an enemy being controled by the system.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgEnemy extends mfg.MfgCharacter
    {
        /*****************************************************************************
        *   Creates a new enemy.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param width  The new width.
        *   @param height The new height.
        *****************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_ENEMY );
        }

        /*****************************************************************************
        *   Renders the current player tick.
        *****************************************************************************/
        public render()
        {
            if ( !this.dead )
            {
                // switch movement pattern


                Matter.Body.translate( this.body, { x: -1.0, y: 0 });

                this.renderJumping();
                this.clipToHorizontalLevelBounds();
                this.checkFallingDead();
            }
        }
    }
