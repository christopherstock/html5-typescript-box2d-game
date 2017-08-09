
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgPlayer extends mfg.MfgCharacter
    {
        private         jumpKeyNeedsRelease     :boolean                        = false;

        /*****************************************************************************
        *   Creates a new player instance.
        *****************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_PLAYER );
        }

        /*****************************************************************************
        *   Checks all pressed player keys and performs according actions.
        *****************************************************************************/
        private handleKeys()
        {
            if ( mfg.MfgInit.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_LEFT ) )
            {
                Matter.Body.translate( this.body, { x: -mfg.MfgSettings.PLAYER_SPEED_MOVE, y: 0 });
            }

            if ( mfg.MfgInit.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_RIGHT ) )
            {
                Matter.Body.translate( this.body, { x: mfg.MfgSettings.PLAYER_SPEED_MOVE, y: 0 });
            }

            if ( mfg.MfgInit.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_UP ) )
            {
                if ( !this.jumpKeyNeedsRelease )
                {
                    this.jumpKeyNeedsRelease = true;

                    let bottomCollides = this.checkBottomCollision();

                    // jump if colliding with bottom and not currently jumping
                    if ( bottomCollides )
                    {
                        this.jumpPower = mfg.MfgSettings.PLAYER_JUMP_POWER;
                    }
                }
            }
            else
            {
                this.jumpKeyNeedsRelease = false;
            }
        }

        /*****************************************************************************
        *   Renders the current player tick.
        *****************************************************************************/
        public render()
        {
            if ( !this.dead )
            {
                this.handleKeys();

                this.renderJumping();
                this.clipToHorizontalLevelBounds();
                this.checkFallingDead();
            }
        }
    }
