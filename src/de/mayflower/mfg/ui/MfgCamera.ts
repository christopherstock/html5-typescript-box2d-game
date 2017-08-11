
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

    /*******************************************************************************************************************
    *   Manages the camera that calculates the scrolling amounts.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *******************************************************************************************************************/
    export class MfgCamera
    {
        /** Current camera target X. */
        private     targetX                     :number                 = 0.0;
        /** Current camera target Y. */
        private     targetY                     :number                 = 0.0;

        /** Current camera offset X. */
        private     offsetX                     :number                 = 0.0;
        /** Current camera offset Y. */
        private     offsetY                     :number                 = 0.0;

        /** Camera centering ratio X. */
        private     ratioX                      :number                 = 0.0;
        /** Camera centering ratio X. */
        private     ratioY                      :number                 = 0.0;

        /** Camera moving speed. */
        private     movingSpeed                 :number                 = 0.0;

        /***************************************************************************************************************
        *   Constructs a new camera.
        *
        *   @param ratioX      Camera ratio X for horizontal centering of the player.
        *   @param ratioY      Camera ratio Y for vertical centering   of the player.
        *   @param movingSpeed The moving speed for the camera.
        ***************************************************************************************************************/
        public constructor( ratioX:number, ratioY:number, movingSpeed:number )
        {
            this.ratioX      = ratioX;
            this.ratioY      = ratioY;

            this.movingSpeed = movingSpeed;
        }

        /***************************************************************************************************************
        *   Updates the singleton instance of the camera by reassigning
        *   it's horizontal and vertical offset.
        *
        *   @param levelWidth       The width of the level.
        *   @param levelHeight      The height of the level.
        *   @param canvasWidth      The width of the canvas.
        *   @param canvasHeight     The height of the canvas.
        *   @param subjectX         The subject coordinate X to center the camera.
        *   @param subjectY         The subject coordinate Y to center the camera.
        *   @param lookingDirection The current direction the player looks at.
        *   @param renderer         The MatterJS renderer.
        ***************************************************************************************************************/
        public update
        (
            levelWidth:number,
            levelHeight:number,
            canvasWidth:number,
            canvasHeight:number,
            subjectX:number,
            subjectY:number,
            lookingDirection:mfg.MfgCharacterLookingDirection,
            renderer:Matter.Render
        )
        {
            // calculate scroll-offsets so camera is centered to subject
            switch ( +lookingDirection )
            {
                case mfg.MfgCharacterLookingDirection.ELeft:
                {
                    this.targetX = subjectX - ( canvasWidth  * ( 1.0 - this.ratioX ) );
                    break;
                }

                case mfg.MfgCharacterLookingDirection.ERight:
                {
                    this.targetX = subjectX - ( canvasWidth  * this.ratioX );
                    break;
                }
            }
            this.targetY = subjectY - ( canvasHeight * this.ratioY );

            // clip camera target x to level bounds
            if ( this.targetX < 0                          ) this.targetX = 0;
            if ( this.targetX > levelWidth - canvasWidth   ) this.targetX = levelWidth - canvasWidth;

            // clip camera target y to level bounds
            if ( this.targetY < 0                          ) this.targetY = 0;
            if ( this.targetY > levelHeight - canvasHeight ) this.targetY = levelHeight - canvasHeight;

            // move actual camera offsets to camera target
            let cameraMoveX:number = 0.0;
            if ( this.offsetX < this.targetX )
            {
                cameraMoveX = ( this.targetX - this.offsetX ) * this.movingSpeed;
                this.offsetX += cameraMoveX;
                if ( this.offsetX > this.targetX ) this.offsetX = this.targetX;
            }
            else if ( this.offsetX > this.targetX )
            {
                cameraMoveX = ( this.offsetX - this.targetX ) * this.movingSpeed;
                this.offsetX -= cameraMoveX;
                if ( this.offsetX < this.targetX ) this.offsetX = this.targetX;
            }
            this.offsetY = this.targetY;

            // assign current camera offset to renderer
            renderer.bounds = Matter.Bounds.create(
                [
                    {
                        x: this.offsetX,
                        y: this.offsetY
                    },
                    {
                        x: this.offsetX + canvasWidth,
                        y: this.offsetY + canvasHeight
                    }
                ]
            );
        }
    }
