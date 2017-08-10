
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a character.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class MfgCharacter extends mfg.MfgGameObject
    {
        /** The bottom line that checks collisions with the body. */
        protected       bottomSensor            :Matter.Body                    = null;
        /** The current jump force. */
        protected       jumpPower               :number                         = 0.0;
        /** Flags if this character is dead. */
        protected       dead                    :boolean                        = false;

        /***************************************************************************************************************
        *   Creates a new character.
        *
        *   @param shape      The shape for this object.
        *   @param x          Startup position X.
        *   @param y          Startup position Y.
        *   @param width      The new width.
        *   @param height     The new height.
        *   @param debugColor The color for the debug object.
        *   @param image      The image for this game object.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgGameObjectShape, x:number, y:number, width:number, height:number, debugColor:string, image:string )
        {
            super( shape, x, y, width, height, debugColor, false, false, image );

            this.bottomSensor = Matter.Bodies.rectangle(
                x + ( width  / 2 ),
                y + height + 1,
                width,
                1.0,
                {
                    render:
                    {
                        opacity: 0.0,
                    },
                    isSensor: true
                }
            );

            this.body = Matter.Body.create(
                {
                    parts:
                    [
                        this.body,
                        this.bottomSensor,
                    ]
                }
            );

            // avoid body tilting
            this.body.inertia        = Infinity;
            this.body.inverseInertia = 1 / this.body.inertia;

            // though tilting is off, increase the mass
            this.body.mass        = 70.0;
            this.body.inverseMass = 1 / this.body.mass;

            // density ?
            // this.body.density = 100.0;
        }

        /***************************************************************************************************************
        *   Check if the player falls to death by falling out of the level.
        ***************************************************************************************************************/
        protected checkFallingDead()
        {
            if ( this.body.position.y - this.height / 2 > mfg.MfgInit.game.level.height )
            {
                mfg.MfgDebug.bugfix.log( "Character has fallen to dead" );

                this.kill();
            }
        }

        /***************************************************************************************************************
        *   Check if the character's bottom sensor currently
        *   collides with any other colliding body.
        *
        *   @return <code>true</code> if a bottom collision is currently active.
        ***************************************************************************************************************/
        public checkBottomCollision()
        {
            for ( let object of mfg.MfgInit.game.level.gameObjects )
            {
                if ( object.body == this.body || object.isSensor )
                {
                    continue;
                }

                if ( Matter.Bounds.overlaps( object.body.bounds, this.bottomSensor.bounds ) )
                {
                    return true;
                }
            }

            return false;
        }

        /***************************************************************************************************************
        *   Kills this character.
        ***************************************************************************************************************/
        public kill()
        {
            // remove character body
            Matter.World.remove( mfg.MfgInit.game.engine.world, this.body );

            // flag as dead
            this.dead = true;
        }

        /***************************************************************************************************************
        *   Handles jumping.
        ***************************************************************************************************************/
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
