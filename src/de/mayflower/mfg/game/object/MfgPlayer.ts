
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
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        ***************************************************************************************************************/
        public constructor( x:number, y:number )
        {
            super
            (
                mfg.MfgGameObjectShape.ERectangle,
                x,
                y,
                mfg.MfgSettings.PLAYER_WIDTH,
                mfg.MfgSettings.PLAYER_HEIGHT,
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

                if ( this.collidesBottom )
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
            super.render();

            if ( !this.dead )
            {
                this.handleKeys();

                this.renderJumping();
                this.clipToHorizontalLevelBounds();
                this.checkFallingDead();
            }
        }
    }
