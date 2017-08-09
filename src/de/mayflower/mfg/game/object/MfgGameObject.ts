
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*****************************************************************************
    *   The abstract class of all game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export abstract class MfgGameObject
    {
        /** The game objects' body. */
        public          body                    :Matter.Body                    = null;

        /** The width of this object. */
        public          width                   :number                         = 0;
        /** The height of this object. */
        public          height                  :number                         = 0;

        /** Specifies if this object is non-colliding. */
        public          isSensor                :boolean                        = false;

        /*****************************************************************************
        *   Creates a new game object.
        *****************************************************************************/
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
            image:string
        )
        {
            this.width  = width;
            this.height = height;

            this.isSensor = isSensor;

            let sprite:any = {};
            if ( image != null )
            {
                sprite = {
                    texture: image,
                    xScale:  1.0,
                    yScale:  1.0,
                };
            }

            switch ( +shape )
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
                                sprite:      sprite,
                            },
                            isSensor: isSensor,
                            isStatic: isStatic
                        }
                    );

                    break;
                }

                case mfg.MfgGameObjectShape.ECircle:
                {
                    this.body = Matter.Bodies.circle(
                        x + ( width  / 2 ),
                        y + ( width / 2 ),
                        width,
                        {
                            render:
                            {
                                fillStyle:   debugColor,
                                strokeStyle: mfg.MfgSettings.COLOR_DEBUG_BORDER,
                                opacity:     mfg.MfgSettings.COLOR_DEBUG_OPACITY,
                                lineWidth:   1.0,
                                sprite:      sprite,
                            },
                            isSensor: isSensor,
                            isStatic: isStatic
                        }
                    );

                    break;
                }
            }
        }

        /*****************************************************************************
        *   Renders the current game object.
        *****************************************************************************/
        public abstract render();

        /*****************************************************************************
        *   Clips this body to level bounds.
        *****************************************************************************/
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

            if ( this.body.position.x > mfg.MfgInit.game.level.width - this.width / 2 )
            {
                Matter.Body.setPosition(
                    this.body,
                    {
                        x: mfg.MfgInit.game.level.width - this.width / 2,
                        y: this.body.position.y
                    }
                );
            }
        }
    }
