
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgPlayer extends mfg.MfgGameObject
    {
        public          jumping                 :boolean                        = false;
        public          jumpPower               :number                         = 0.0;

        /*****************************************************************************
        *   Creates a new player instance.
        *****************************************************************************/
        public constructor()
        {
            super( 250, 40, mfg.MfgSettings.PLAYER_SIZE_X, mfg.MfgSettings.PLAYER_SIZE_Y );
        }

        /*****************************************************************************
        *   Inits the player instance.
        *****************************************************************************/
        public init()
        {
            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.body );
        }

        /*****************************************************************************
        *   Checks all pressed player keys and performs according actions.
        *****************************************************************************/
        public handleKeys()
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
                if ( !this.jumping )
                {
                    this.jumping   = true;
                    this.jumpPower = 30.0;
                }
            }
        }

        /*****************************************************************************
        *   Renders the current player tick.
        *****************************************************************************/
        public render()
        {
            // render jumping
            if ( this.jumping )
            {
                Matter.Body.translate( this.body, { x: 0.0, y: -this.jumpPower });

                this.jumpPower -= 2.0;

                if ( this.jumpPower <= 0.0 ) {
                    this.jumping = false;
                }
            }
        }
    }
