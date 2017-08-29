
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
        /** Highest surface friction. */
        public  static  FRICTION_CONCRETE       :number                         = 1.0;
        /** Default surface friction. */
        public  static  FRICTION_DEFAULT        :number                         = 0.1;
        /** Low surface friction. */
        public  static  FRICTION_GLASS          :number                         = 0.01;
        /** Lowest surface friction. */
        public  static  FRICTION_ICE            :number                         = 0.0;

        /** Character density. */
        public  static  DENSITY_HUMAN           :number                         = 0.01;
        /** Default density. */
        public  static  DENSITY_DEFAULT         :number                         = 0.001;

        /** The game objects' body. */
        public          body                    :Matter.Body                    = null;

        // TODO prune! (rect only ..)

        /** The width of this object. */
        public          width                   :number                         = 0;
        /** The height of this object. */
        public          height                  :number                         = 0;

        /***************************************************************************************************************
        *   Creates a new game object.
        *
        *   @param shape      The shape for this object.
        *   @param x          Startup position X.
        *   @param y          Startup position Y.
        *   @param width      The new width.
        *   @param height     The new height.
        *   @param image      The image for this game object.
        *   @param density    The density of this body.
        ***************************************************************************************************************/
        protected constructor
        (
            shape:mfg.MfgShape,
            x:number,
            y:number,
            width:number,
            height:number,
            image:string,
            density:number
        )
        {
            switch ( shape.type )
            {
                case mfg.MfgShape.RECTANGLE:
                {
                    this.body = shape.createBody();

                    Matter.Body.translate( this.body, Matter.Vector.create( x, y ) );

                    this.width  = width;
                    this.height = height;

                    break;
                }

                case mfg.MfgShape.CIRCLE:
                {
                    let diameter:number = width;

                    this.body = shape.createBody();

                    Matter.Body.translate( this.body, Matter.Vector.create( x, y ) );

                    this.width  = diameter;
                    this.height = diameter;

                    break;
                }
            }

            if ( image != null )
            {
                this.body.render.sprite.texture = image;
            }

            Matter.Body.setDensity( this.body, density );
        }

        /***************************************************************************************************************
        *   Renders the current game object.
        ***************************************************************************************************************/
        public abstract render();

        /***************************************************************************************************************
        *   Avoids this game object from rotating.
        ***************************************************************************************************************/
        protected resetRotation()
        {
            Matter.Body.setAngularVelocity( this.body, 0.0 );
            Matter.Body.setAngle(           this.body, 0.0 );
        }

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
