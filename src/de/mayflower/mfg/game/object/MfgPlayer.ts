
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgPlayer extends mfg.MfgCharacter
    {
        /***************************************************************************************************************
        *   Creates a new player instance.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param width  The new width.
        *   @param height The new height.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number )
        {
            super
            (
                shape,
                x,
                y,
                width,
                height,
                mfg.MfgSettings.COLOR_DEBUG_PLAYER,
                null,
                mfg.MfgCharacterLookingDirection.ERight
            );
        }

        /***************************************************************************************************************
        *   Checks all pressed player keys and performs according actions.
        ***************************************************************************************************************/
        private handleKeys()
        {
            if ( mfg.MfgInit.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_LEFT ) )
            {
                Matter.Body.translate( this.body, { x: -mfg.MfgSettings.PLAYER_SPEED_MOVE, y: 0 });

                this.lookingDirection = mfg.MfgCharacterLookingDirection.ELeft;
            }

            if ( mfg.MfgInit.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_RIGHT ) )
            {
                Matter.Body.translate( this.body, { x: mfg.MfgSettings.PLAYER_SPEED_MOVE, y: 0 });

                this.lookingDirection = mfg.MfgCharacterLookingDirection.ERight;
            }

            if ( mfg.MfgInit.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_UP ) )
            {
                mfg.MfgInit.game.keySystem.setNeedsRelease( mfg.MfgKeySystem.KEY_UP );

                if ( this.checkBottomCollision() )
                {
                    this.jumpPower = mfg.MfgSettings.PLAYER_JUMP_POWER;
                }
            }
        }

        /***************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
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
