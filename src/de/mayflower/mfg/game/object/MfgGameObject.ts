
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

        /*****************************************************************************
        *   Creates a new game object.
        *****************************************************************************/
        public constructor
        (
            shape:mfg.MfgGameObjectShape,
            x:number,
            y:number,
            width:number,
            height:number,
            debugColor:string,
            isSensor:boolean,
            isStatic:boolean
        )
        {
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
    }
