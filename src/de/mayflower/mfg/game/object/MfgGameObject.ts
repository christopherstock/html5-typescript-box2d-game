
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   The abstract class of all game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class MfgGameObject
    {
        /** High surface friction. */
//        public  static  FRICTION_HIGH           :number                         = 1.0;
        /** Default surface friction. */
        public  static  FRICTION_DEFAULT        :number                         = 0.1;
        /** No surface friction. */
//        public  static  FRICTION_NONE           :number                         = 0.0;

        /** The game objects' body. */
        public          body                    :Matter.Body                    = null;

        /** The width of this object. */
        public          width                   :number                         = 0;
        /** The height of this object. */
        public          height                  :number                         = 0;

        /** Specifies if this object is non-colliding. */
        public          isSensor                :boolean                        = false;
        /** Specifies if this object is static. */
        public          isStatic                :boolean                        = false;

        /***************************************************************************************************************
        *   Creates a new game object.
        *
        *   @param shape      The shape for this object.
        *   @param x          Startup position X.
        *   @param y          Startup position Y.
        *   @param width      The new width.
        *   @param height     The new height.
        *   @param debugColor The color for the debug object.
        *   @param isSensor   Specifies that this object is non-colliding and serves as a sensor only.
        *   @param isStatic   Specifies that this object has a fixed position.
        *   @param image      The image for this game object.
        *   @param angle      The rotation of this body in degrees.
        *   @param friction   The object's body friction.
        ***************************************************************************************************************/
        protected constructor
        (
            shape:mfg.MfgGameObjectShape,
            x:number,
            y:number,
            width:number,
            height:number,
            debugColor:string,
            isSensor:boolean,
            isStatic:boolean,
            image:string,
            angle:number,
            friction:number
        )
        {
            this.isSensor = isSensor;
            this.isStatic = isStatic;

            switch ( shape )
            {
                case mfg.MfgGameObjectShape.ERectangle:
                {
                    this.body = Matter.Bodies.rectangle(
                        x + ( width  / 2 ),
                        y + ( height / 2 ),
                        width,
                        height,
                        {
                            render:
                            {
                                fillStyle:   debugColor,
                                strokeStyle: mfg.MfgSettings.COLOR_DEBUG_BORDER,
                                opacity:     mfg.MfgSettings.COLOR_DEBUG_OPACITY,
                                lineWidth:   1.0,
                            },
                            isSensor: isSensor,
                            isStatic: isStatic,
                            angle: mfg.MfgMath.angleToRad( angle ),
/*
                            chamfer:
                            {
                                radius: [ 5.0, 5.0, 5.0, 5.0 ]
                            },
*/
                            friction: friction,


//                            frictionStatic: friction,


                            collisionFilter: mfg.MfgSettings.COLLISION_GROUP_DEFAULT,
                        }
                    );

                    this.width  = width;
                    this.height = height;

                    break;
                }

                case mfg.MfgGameObjectShape.ECircle:
                {
                    let diameter:number = width;

                    this.body = Matter.Bodies.circle(
                        x + ( diameter / 2 ),
                        y + ( diameter / 2 ),
                        ( diameter / 2 ),
                        {
                            render:
                            {
                                fillStyle:   debugColor,
                                strokeStyle: mfg.MfgSettings.COLOR_DEBUG_BORDER,
                                opacity:     mfg.MfgSettings.COLOR_DEBUG_OPACITY,
                                lineWidth:   1.0,
                            },
                            isSensor: isSensor,
                            isStatic: isStatic,
                            angle: mfg.MfgMath.angleToRad( angle ),

                            friction: friction,


//                            frictionStatic: friction,

                            collisionFilter: mfg.MfgSettings.COLLISION_GROUP_DEFAULT,
                        }
                    );

                    this.width  = diameter;
                    this.height = diameter;

                    break;
                }
            }

            if ( image != null )
            {
                this.body.render.sprite.texture = image;
            }


//            Matter.Body.setMass( this.body, 70.0 );

//            Matter.Body.setDensity( this.body, 0.1 )
        }

        /***************************************************************************************************************
        *   Renders the current game object.
        ***************************************************************************************************************/
        public abstract render();

        /***************************************************************************************************************
        *   Clips this body to level bounds.
        ***************************************************************************************************************/
        protected clipToHorizontalLevelBounds()
        {
            if ( this.body.position.x < this.width / 2 )
            {
                Matter.Body.setPosition(
                    this.body,
                    {
                        x: this.width / 2,
                        y: this.body.position.y
                    }
                );
            }

            if ( this.body.position.x > mfg.Mfg.game.level.width - this.width / 2 )
            {
                Matter.Body.setPosition(
                    this.body,
                    {
                        x: mfg.Mfg.game.level.width - this.width / 2,
                        y: this.body.position.y
                    }
                );
            }
        }
    }
