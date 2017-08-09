
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
        public          bottomSensor            :Matter.Body                    = null;

        public          jumpPower               :number                         = 0.0;
        private         jumpKeyNeedsRelease     :boolean                        = false;

        /*****************************************************************************
        *   Creates a new player instance.
        *****************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number )
        {
            super( shape, x, y, width, height, mfg.MfgSettings.COLOR_DEBUG_PLAYER, false, false );

            this.bottomSensor = Matter.Bodies.rectangle(
                x + ( width  / 2 ),
                y + height + 1,
                width,
                1.0,
                {
                    render:
                    {
                        lineWidth: 1.0,
                        strokeStyle: '#ffffff',
                        fillStyle: "#ffffff",
                        opacity: mfg.MfgSettings.COLOR_DEBUG_OPACITY,
                    },
                    isSensor: true
                }
            );

            this.body = Matter.Body.create(
                {
                    parts: [
                        this.body,
                        this.bottomSensor
                    ]
                }
            );

            // avoid body tilting
            this.body.inertia        = Infinity;
            this.body.inverseInertia = 1 / Infinity;

            // though tilting is off, increase the mass
            this.body.mass = 70.0;
            this.body.inverseMass = 1 / 70.0;

            // density ?
            // this.body.density = 100.0;
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
            // render jumping
            if ( this.jumpPower > 0.0 )
            {
                // move body
                Matter.Body.translate( this.body, { x: 0.0, y: -this.jumpPower });

                this.jumpPower -= 2.0;

                if ( this.jumpPower < 0.0 ) {
                    this.jumpPower = 0.0;
                }
            }
        }

        /*****************************************************************************
        *   Check if the player's bottom sensor currently collides with any other body.
        *****************************************************************************/
        public checkBottomCollision()
        {
            let bodies:Array<Matter.Body> = mfg.MfgInit.game.engine.world.bodies;

            for ( let body of bodies )
            {
                if ( body == this.body )
                {
                    continue;
                }

                if ( Matter.Bounds.overlaps( body.bounds, this.bottomSensor.bounds ) )
                {
                    return true;
                }
            }

            return false;
        }
    }
