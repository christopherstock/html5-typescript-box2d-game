
    import * as Matter from 'matter-js';

    /*******************************************************************************************************************
    *   Manages the camera that calculates the scrolling amounts.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *******************************************************************************************************************/
    export class MfgCamera
    {
        /** Current camera offset X. */
        private     offsetX                     :number                 = 0.0;
        /** Current camera offset Y. */
        private     offsetY                     :number                 = 0.0;

        /** Camera centering ratio X. */
        private     ratioX                      :number                 = 0.0;
        /** Camera centering ratio X. */
        private     ratioY                      :number                 = 0.0;

        /***************************************************************************************************************
        *   Constructs a new camera.
        *
        *   @param ratioX Camera ratio X for horizontal centering of the player.
        *   @param ratioY Camera ratio Y for vertical centering   of the player.
        ***************************************************************************************************************/
        public constructor( ratioX:number, ratioY:number )
        {
            this.ratioX = ratioX;
            this.ratioY = ratioY;
        }

        /***************************************************************************************************************
        *   Updates the singleton instance of the camera by reassigning
        *   it's horizontal and vertical offset.
        *
        *   @param levelWidth   The width of the level.
        *   @param levelHeight  The height of the level.
        *   @param canvasWidth  The width of the canvas.
        *   @param canvasHeight The height of the canvas.
        *   @param subjectX     The subject coordinate X to center the camera.
        *   @param subjectY     The subject coordinate Y to center the camera.
        *   @param renderer     The MatterJS renderer.
        ***************************************************************************************************************/
        public update
        (
            levelWidth:number,
            levelHeight:number,
            canvasWidth:number,
            canvasHeight:number,
            subjectX:number,
            subjectY:number,
            renderer:Matter.Render
        )
        {

            //calculate scroll-offsets so camera is centered to subject
            this.offsetX = subjectX - ( canvasWidth  * this.ratioX );
            this.offsetY = subjectY - ( canvasHeight * this.ratioY );

            //clip camera-x to level bounds
            if ( this.offsetX < 0                          ) this.offsetX = 0;
            if ( this.offsetX > levelWidth - canvasWidth   ) this.offsetX = levelWidth - canvasWidth;

            //clip camera-y to level bounds
            if ( this.offsetY < 0                          ) this.offsetY = 0;
            if ( this.offsetY > levelHeight - canvasHeight ) this.offsetY = levelHeight - canvasHeight;

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
