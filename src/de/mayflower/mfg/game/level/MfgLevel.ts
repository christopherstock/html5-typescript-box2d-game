
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents the current level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class MfgLevel
    {
        /** The width of this level. */
        public      width                   :number                     = 0.0;
        /** The height of this level. */
        public      height                  :number                     = 0.0;

        /** The player instance. */
        public      player                  :mfg.MfgPlayer              = null;
        /** ALL game objects for this level, including the player. */
        public      gameObjects             :Array<mfg.MfgGameObject>   = null;

        /***************************************************************************************************************
        *   Creates a new level.
        *
        *   @param width  The width for the new level.
        *   @param height The height for the new level.
        ***************************************************************************************************************/
        public constructor( width:number, height:number )
        {
            this.width  = width;
            this.height = height;
        }

        /***************************************************************************************************************
        *   Sets the player and the game objects.
        ***************************************************************************************************************/
        protected abstract createGameObjects();

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        public init()
        {
            this.createGameObjects();

            // add all bodies of all game objects to the world
            for ( let gameObject of this.gameObjects ) {
                Matter.World.addBody( mfg.MfgInit.game.engine.world, gameObject.body );
            }
        }

        /***************************************************************************************************************
        *   Renders all level components.
        ***************************************************************************************************************/
        public render()
        {
            // render game objects
            for ( let gameObject of this.gameObjects )
            {
                gameObject.render();
            }
        }
    }
