
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
        /** The default jump power ( player ). */
        public      static  JUMP_POWER_DEFAULT          :number                             = -4.0;

        /** The looking direction for this character. */
        public              lookingDirection            :mfg.MfgCharacterLookingDirection   = null;

        /** Flags if this character is dead. */
        protected           dead                        :boolean                            = false;

        /** flags if the character collides with the bottom sensor. */
        public              collidesBottom              :boolean                            = false;

        /** The speed for horizontal movements. */
        private             speedMove                   :number                             = 0.0;

        /** The jump power to apply for this character. */
        private             jumpPower                   :number                             = 0.0;

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
        *   @param speedMove        The speed for horizontal movement.
        *   @param jumpPower        The vertical force to apply on jumping.
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
            lookingDirection:mfg.MfgCharacterLookingDirection,
            speedMove:number,
            jumpPower:number
        )
        {
            super
            (
                shape,
                x,
                y,
                width,
                height,
                debugColor,
                false,
                image,
                0.0,
                mfg.MfgGameObject.FRICTION_DEFAULT,
                mfg.MfgGameObject.DENSITY_HUMAN
            );

            this.lookingDirection = lookingDirection;
            this.speedMove        = speedMove;
            this.jumpPower        = jumpPower;
        }

        /***************************************************************************************************************
        *   Renders the current character tick.
        ***************************************************************************************************************/
        public render()
        {
            // check bottom collision state
            this.collidesBottom = this.isCollidingBottom();

            // avoid this body from rotating!
            Matter.Body.setAngularVelocity( this.body, 0.0 );
            Matter.Body.setAngle( this.body, 0.0 );

            this.clipToHorizontalLevelBounds();

            if ( !this.dead )
            {
                this.checkFallingDead();
            }
        }

        /***************************************************************************************************************
        *   Check if the player falls to death by falling out of the level.
        ***************************************************************************************************************/
        protected checkFallingDead()
        {
            if ( this.body.position.y - this.height / 2 > mfg.Mfg.game.level.height )
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
            Matter.World.remove( mfg.Mfg.game.engine.world, this.body );

            // flag as dead
            this.dead = true;
        }

        /***************************************************************************************************************
        *   Check if the character's bottom line currently collides with any other colliding body.
        *
        *   @return <code>true</code> if a bottom collision is currently active.
        ***************************************************************************************************************/
        private isCollidingBottom()
        {
            let bodiesToCheck:Array<Matter.Body> = [];

            // browse all game objects
            for ( let gameObject of mfg.Mfg.game.level.gameObjects )
            {
                // skip own body and non-colliding game objects
                if
                (
                        gameObject.body == this.body
                    ||  gameObject instanceof mfg.MfgDecoration
                )
                {
                    continue;
                }

                bodiesToCheck.push( gameObject.body );
            }

            return Matter.Query.ray
            (
                bodiesToCheck,
                Matter.Vector.create( this.body.position.x - ( this.width / 2 ), this.body.position.y + ( this.height / 2 ) ),
                Matter.Vector.create( this.body.position.x + ( this.width / 2 ), this.body.position.y + ( this.height / 2 ) )
            ).length > 0;
        }

        /***************************************************************************************************************
        *   Lets this character jump.
        ***************************************************************************************************************/
        protected jump()
        {
            if ( this.collidesBottom )
            {
                Matter.Body.applyForce
                (
                    this.body,
                    this.body.position,
                    Matter.Vector.create( 0.0, this.jumpPower )
                );
            }
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveLeft()
        {
            Matter.Body.translate( this.body, Matter.Vector.create( -this.speedMove, 0 ) );
            this.lookingDirection = mfg.MfgCharacterLookingDirection.ELeft;
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveRight()
        {
            Matter.Body.translate( this.body, Matter.Vector.create( this.speedMove, 0 ) );
            this.lookingDirection = mfg.MfgCharacterLookingDirection.ERight;
        }
    }
