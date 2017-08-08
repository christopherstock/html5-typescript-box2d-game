
    const Matter = require('matter-js');
    import {MfgDebug}    from '../mfg';
    import {MfgSettings} from '../mfg';

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgPlayer
    {
        public          boxA                    :Body =                 null;

        /*****************************************************************************
        *   Creates a new player instance.
        *****************************************************************************/
        public constructor()
        {
            this.boxA = Matter.Bodies.rectangle(
                250,
                40,
                MfgSettings.PLAYER_SIZE_X,
                MfgSettings.PLAYER_SIZE_Y
            );
        }
    }
