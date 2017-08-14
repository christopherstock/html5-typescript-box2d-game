
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';
    import {MfgCharacterLookingDirection} from "./MfgCharacterLookingDirection";

    /*******************************************************************************************************************
    *   Represents the player being controlled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgPlayer extends mfg.MfgCharacter
    {
        /***************************************************************************************************************
        *   Creates a new player instance.
        *
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param lookingDirection The initial looking direction.
        ***************************************************************************************************************/
        public constructor( x:number, y:number, lookingDirection:MfgCharacterLookingDirection )
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
                lookingDirection,
                mfg.MfgSettings.PLAYER_SPEED_MOVE
            );
        }

        /***************************************************************************************************************
        *   Checks all pressed player keys and performs according actions.
        ***************************************************************************************************************/
        private handleKeys()
        {
            if ( mfg.Mfg.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_LEFT ) )
            {
                this.moveLeft();
            }

            if ( mfg.Mfg.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_RIGHT ) )
            {
                this.moveRight();
            }

            if ( mfg.Mfg.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_UP ) )
            {
                mfg.Mfg.game.keySystem.setNeedsRelease( mfg.MfgKeySystem.KEY_UP );

                this.jump();
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
            }
        }
    }
