
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

        /** The desired canvas3D width. */
        public      static      CANVAS_WIDTH                                :number             = 800;
        /** The desired canvas3D height. */
        public      static      CANVAS_HEIGHT                               :number             = 600;

        /** The scene's gravity. */
        public      static      GRAVITY                                     :number             = 0.0;      //-0.01;

        /** The relative path from index.html where all images the app makes use of reside. */
        public      static      PATH_IMAGE_TEXTURE                          :string             = "res/image/texture/";
        /** The relative path from index.html where all sounds the app makes use of reside. */
        public      static      PATH_SOUND                                  :string             = "res/sound/";
        /** The relative path from index.html where all 3d model files the app makes use of reside. */
        public      static      PATH_3DS                                    :string             = "res/3ds/";

        /** The player's width. */
        public      static      PLAYER_SIZE_X                               :number             = 80.0;
        /** The player's y dimension (height). */
        public      static      PLAYER_SIZE_Y                               :number             = 120.0;

        /** The player's speed in world coordinate per tick. */
        public      static      PLAYER_SPEED_MOVE                           :number             = 10;
        /** The player's turning speed in degrees per tick. */
        public      static      PLAYER_SPEED_TURN                           :number             = 5.0;
        /** The player's looking up/down speed in degrees per tick. */
        public      static      PLAYER_SPEED_LOOK_UP_DOWN                   :number             = 2.5;
        /** The player's maximum looking up/down in degrees. */
        public      static      PLAYER_MAX_LOOK_UP_DOWN                     :number             = 60.0;
        /** The player's speed for centering the up/down view aim in degrees per tick. */
        public      static      PLAYER_SPEED_CENTER_VIEW_AIM                :number             = 5.0;
    }
