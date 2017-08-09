
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

    /*****************************************************************************
    *   Manages the camera that handles the scrolling part.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    export class MfgCamera
    {
        /** Current camera offset X. */
        private     offsetX                     :number                 = 0.0;
        /** Current camera offset Y. */
        private     offsetY                     :number                 = 0.0;

        /** Camera centering ration X. */
        private     ratioX                      :number                 = 0.0;
        /** Camera centering ration X. */
        private     ratioY                      :number                 = 0.0;

        /*****************************************************************************
        *   Constructs a new camera.
        *****************************************************************************/
        public constructor( ratioX:number, ratioY:number )
        {
            this.ratioX = ratioX;
            this.ratioY = ratioY;
        }

        /*****************************************************************************
        *   Updates the singleton instance of the camera by reassigning
        *   it's horizontal and vertical offset.
        *****************************************************************************/
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
