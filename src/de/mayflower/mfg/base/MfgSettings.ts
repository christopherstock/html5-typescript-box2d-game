
    import * as Matter from 'matter-js';

    /*******************************************************************************************************************
    *   All adjustments and balancings for the application.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgSettings
    {
        /** The debug switch. */
        public      static      DEBUG_MODE                                  :boolean                    = true;

        /** The application's internal name. */
        public      static      TITLE                                       :string                     = "TypeScript MatterJS primer, (c) 2017 Mayflower GmbH";

        /** The delta between render ticks in ms. */
        public      static      RENDER_DELTA                                :number                     = 16.66;

        /** The desired canvas3D width. */
        public      static      CANVAS_WIDTH                                :number                     = 800;
        /** The desired canvas3D height. */
        public      static      CANVAS_HEIGHT                               :number                     = 600;

        /** The player's width. */
        public      static      PLAYER_WIDTH                                :number                     = 80.0;
        /** The player's y dimension (height). */
        public      static      PLAYER_HEIGHT                               :number                     = 120.0;
        /** The player's speed in world coordinate per tick. */
        public      static      PLAYER_SPEED_MOVE                           :number                     = 7.5;
        /** The player's jump power in px per tick. */
        public      static      PLAYER_JUMP_POWER                           :number                     = 30.0;

        /** The default vertical gravity for all levels. */
        public      static      DEFAULT_GRAVITY_Y                           :number                     = 1.0;

        /** The camera ration for the horizontal axis. */
        public      static      CAMERA_RATIO_X                              :number                     = 0.25;
        /** The camera ration for the vertical axis. */
        public      static      CAMERA_RATIO_Y                              :number                     = 0.5;

        /** The opacity for the debug colors. */
        public      static      COLOR_DEBUG_OPACITY                         :number                     = 1.0;
        /** The debug color for the player block. */
        public      static      COLOR_DEBUG_BORDER                          :string                     = "#ffffff";
        /** The debug color for the player block. */
        public      static      COLOR_DEBUG_PLAYER                          :string                     = "#7cd1ee";
        /** The debug color for the enemy block. */
        public      static      COLOR_DEBUG_ENEMY                           :string                     = "#ff7e68";
        /** The debug color for a box. */
        public      static      COLOR_DEBUG_BOX                             :string                     = "#ffbf54";
        /** The debug color for an obstacle. */
        public      static      COLOR_DEBUG_OBSTACLE                        :string                     = "#a6a6a6";
        /** The debug color for a sigsaw. */
        public      static      COLOR_DEBUG_SIGSAW                          :string                     = "#c46c9c";
        /** The debug color for a sigsaw joint. */
        public      static      COLOR_DEBUG_SIGSAW_JOINT                    :string                     = "#ba3380";
        /** The debug color for the item. */
        public      static      COLOR_DEBUG_ITEM                            :string                     = "#fdff72";
        /** The debug color for a decoration. */
        public      static      COLOR_DEBUG_DECORATION                      :string                     = "#98ffa3";

        /** The relative path from index.html where all background images reside. */
        public      static      PATH_IMAGE_BG                               :string                     = "res/image/bg/";

        /** The collision group for items and player collision indicator. */
        public      static      UNIQUE_COLLISION_GROUPS                     :Matter.ICollisionFilter    = {
                category: 0x0001,
                mask:     0x00002,
                group:    0x0003
        };
    }
