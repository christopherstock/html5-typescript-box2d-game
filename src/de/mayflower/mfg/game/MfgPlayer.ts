
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';
    import {MfgKeySystem} from "../hid/MfgKeySystem";

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgPlayer
    {
        public          boxA                    :Matter.Body =                 null;

        /*****************************************************************************
        *   Creates a new player instance.
        *****************************************************************************/
        public constructor()
        {
        }

        /*****************************************************************************
        *   Inits the player instance.
        *****************************************************************************/
        public init()
        {
            this.boxA = Matter.Bodies.rectangle(
                250,
                40,
                mfg.MfgSettings.PLAYER_SIZE_X,
                mfg.MfgSettings.PLAYER_SIZE_Y
            );

            Matter.World.addBody( mfg.MfgInit.game.engine.world, this.boxA );
        }

        /*****************************************************************************
        *   Checks all pressed player keys and performs according actions.
        *****************************************************************************/
        public handleKeys()
        {
            if ( mfg.MfgInit.game.keySystem.isPressed( MfgKeySystem.KEY_LEFT ) )
            {
                Matter.Body.translate( this.boxA, { x: -mfg.MfgSettings.PLAYER_SPEED_MOVE, y: 0 });
            }

            if ( mfg.MfgInit.game.keySystem.isPressed( MfgKeySystem.KEY_RIGHT ) )
            {
                Matter.Body.translate( this.boxA, { x: mfg.MfgSettings.PLAYER_SPEED_MOVE, y: 0 });
            }





        }
    }
