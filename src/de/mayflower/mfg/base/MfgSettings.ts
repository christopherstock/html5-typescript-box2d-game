
    /*****************************************************************************
    *   All adjustments and balancings for the application.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgSettings
    {
        /** The debug switch. */
        public      static      DEBUG_MODE                                  :boolean            = true;

        /** The application's internal name. */
        public      static      TITLE                                       :string             = "TypeScript MatterJS primer, (c) 2017 Mayflower GmbH, v.0.0.1";

        /** The delta between render ticks in ms. */
        public      static      RENDER_DELTA                                :number             = 16.66;

        /** The desired canvas3D width. */
        public      static      CANVAS_WIDTH                                :number             = 800;
        /** The desired canvas3D height. */
        public      static      CANVAS_HEIGHT                               :number             = 600;

        /** The player's width. */
        public      static      PLAYER_SIZE_X                               :number             = 80.0;
        /** The player's y dimension (height). */
        public      static      PLAYER_SIZE_Y                               :number             = 120.0;
        /** The player's speed in world coordinate per tick. */
        public      static      PLAYER_SPEED_MOVE                           :number             = 7.5;

        /** The default vertical gravity for all levels. */
        public      static      DEFAULT_GRAVITY_Y                           :number             = 1.0;

        /** The camera ration for the horizontal axis. */
        public      static      CAMERA_RATIO_X                              :number             = 0.5;
        /** The camera ration for the vertical axis. */
        public      static      CAMERA_RATIO_Y                              :number             = 0.25;




        /** The relative path from index.html where all images the app makes use of reside. */
        public      static      PATH_IMAGE_TEXTURE                          :string             = "res/image/texture/";
        /** The relative path from index.html where all sounds the app makes use of reside. */
        public      static      PATH_SOUND                                  :string             = "res/sound/";
        /** The relative path from index.html where all 3d model files the app makes use of reside. */
        public      static      PATH_3DS                                    :string             = "res/3ds/";
    }
