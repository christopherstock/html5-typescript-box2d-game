
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   Represents a character.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export abstract class MfgCharacter extends mfg.MfgGameObject
    {
        /** The bottom line that checks collisions with the body. */
        protected       bottomSensor            :Matter.Body                    = null;
        /** The current jump force. */
        protected       jumpPower               :number                         = 0.0;
        /** Flags if this character is dead. */
        protected       dead                    :boolean                        = false;

        /*****************************************************************************
        *   Creates a new character.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param width  The new width.
        *   @param height The new height.
        *****************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number, debugColor:string )
        {
            super( shape, x, y, width, height, debugColor, false, false );

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
        *   Check if the player falls to death by falling out of the level.
        *****************************************************************************/
        protected checkFallingDead()
        {
            if ( this.body.position.y - this.height / 2 > mfg.MfgInit.game.level.height )
            {
                mfg.MfgDebug.bugfix.log( "character has fallen to dead!" );

                this.kill();
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

        /*****************************************************************************
        *   Kills this character.
        *****************************************************************************/
        public kill()
        {
            // remove character body
            Matter.World.remove( mfg.MfgInit.game.engine.world, this.body );

            // flag as dead
            this.dead = true;
        }

        /*****************************************************************************
        *   Handles jumping.
        *****************************************************************************/
        protected renderJumping()
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
    }
