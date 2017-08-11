
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
        /** The looking direction for this character. */
        public          lookingDirection        :mfg.MfgCharacterLookingDirection   = null;

        /** The top line that checks collisions with the ceiling. */
        protected       topSensor               :Matter.Body                        = null;
        /** The bottom line that checks collisions with the floor. */
        protected       bottomSensor            :Matter.Body                        = null;

        /** The current jump force. */
        protected       jumpPower               :number                             = 0.0;
        /** Flags if this character is dead. */
        protected       dead                    :boolean                            = false;

        /** flags if the character collides with the top sensor. */
        public          collidesTop             :boolean                            = false;
        /** flags if the character collides with the bottom sensor. */
        public          collidesBottom          :boolean                            = false;

        /***************************************************************************************************************
        *   Creates a new character.
        *
        *   @param shape            The shape for this object.
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param width            The new width.
        *   @param height           The new height.
        *   @param debugColor       The color for the debug object.
        *   @param image            The image for this game object.
        *   @param lookingDirection The initial looking direction.
        ***************************************************************************************************************/
        public constructor
        (
            shape:mfg.MfgGameObjectShape,
            x:number,
            y:number,
            width:number,
            height:number,
            debugColor:string,
            image:string,
            lookingDirection:mfg.MfgCharacterLookingDirection
        )
        {
            super( shape, x, y, width, height, debugColor, false, false, image, 0.0 );

            this.lookingDirection = lookingDirection;

            this.bottomSensor = Matter.Bodies.rectangle(
                x + ( width  / 2 ),
                y + height + 1,
                width,
                1.0,
                {
                    render:
                    {
                        opacity: 1.0,
                        strokeStyle: '#ff0000',
                        lineWidth: 5.0,
                    },
                    isSensor: true
                }
            );

            this.topSensor = Matter.Bodies.rectangle(
                x + ( width  / 2 ),
                y - 1,
                width,
                1.0,
                {
                    render:
                    {
                        opacity: 1.0,
                        strokeStyle: '#00ff00',
                        lineWidth: 5.0,
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
                        this.topSensor,
                    ]
                }
            );
/*
            // avoid body tilting
            this.body.inertia        = Infinity;
            this.body.inverseInertia = 1 / this.body.inertia;

            // though tilting is off, increase the mass
            this.body.mass        = 70.0;
            this.body.inverseMass = 1 / this.body.mass;
*/
        }

        /***************************************************************************************************************
        *   Renders the current character tick.
        ***************************************************************************************************************/
        public render()
        {
            // check top and bottom collision state
            this.collidesTop    = this.isColliding( this.topSensor,    true  );
            this.collidesBottom = this.isColliding( this.bottomSensor, false );

            // avoid this body from rotating!
            Matter.Body.setAngularVelocity( this.body, 0.0 );
            Matter.Body.setAngle( this.body, 0.0 );
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
        *   Check if the specified sensor currently collides with any other colliding body.
        *
        *   This function is an entire TECHNICAL DEBT!
        *
        *   @param sensor      The sensor body to check collision for.
        *   @param ignoreBoxes Specifies if boxes shall be considered for collision checks.
        *
        *   @return <code>true</code> if a bottom collision is currently active.
        ***************************************************************************************************************/
        private isColliding( sensor:Matter.Body, ignoreBoxes:boolean )
        {
            let bodiesToCheck:Array<Matter.Body> = [];

            // browse all game objects
            for ( let gameObject of mfg.MfgInit.game.level.gameObjects )
            {
                // skip own body and sensors
                if ( gameObject.body == this.body || gameObject.isSensor )
                {
                    continue;
                }

                // skip boxes
                if ( ignoreBoxes && gameObject instanceof mfg.MfgBox )
                {
                    continue;
                }

                bodiesToCheck.push( gameObject.body );
            }

            return Matter.Query.ray
            (
                bodiesToCheck,
                Matter.Vector.create( sensor.position.x - ( this.width / 2 ), sensor.position.y ),
                Matter.Vector.create( sensor.position.x + ( this.width / 2 ), sensor.position.y )
            ).length > 0;
        }

        /***************************************************************************************************************
        *   Handles jumping.
        ***************************************************************************************************************/
        protected renderJumping()
        {
            // render jumping
            if ( this.jumpPower > 0.0 )
            {
                // check top collision
                if ( this.collidesTop )
                {
                    this.jumpPower = 0.0;
                }
                else
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

    }
