
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Represents the player being controled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgPlayer extends mfg.MfgGameObject
    {
        public          bottomCollisionChecker  :Matter.Body                    = null;

        public          jumping                 :boolean                        = false;
        public          jumpPower               :number                         = 0.0;

        /*****************************************************************************
        *   Creates a new player instance.
        *****************************************************************************/
        public constructor( x:number, y:number, width:number, height:number )
        {
            super( x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_PLAYER, false, false );

            this.bottomCollisionChecker = Matter.Bodies.rectangle(
                x + ( width  / 2 ),
                y + height,
                width,
                1.0,
                {
                    render:
                    {
                        strokeStyle: '#dedede',
                        lineWidth: 1,
                        opacity: mfg.MfgSettings.COLOR_DEBUG_OPACITY,
                        fillStyle: "#ffffff"
                    },
                    isSensor: true
                }
            );

            this.body = Matter.Body.create(
                {
                    parts: [
                        this.body,
                        this.bottomCollisionChecker
                    ]
                }
            );

            // avoid body tilting
            this.body.inertia        = Infinity;
            this.body.inverseInertia = 1 / Infinity;
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
