
    import * as mfg from '../mfg';

    /*****************************************************************************
    *   The key system that manages all pressed keys.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgKeySystem
    {
        /** The keycode that represents the 'ARROW LEFT' key. */
        public      static  KEY_LEFT        :number                             = 37;
        /** The keycode that represents the 'ARROW UP' key. */
        public      static  KEY_UP          :number                             = 38;
        /** The keycode that represents the 'ARROW RIGHT' key. */
        public      static  KEY_RIGHT       :number                             = 39;
        /** The keycode that represents the 'ARROW DOWN' key. */
        public      static  KEY_DOWN        :number                             = 40;

        /** The keycode that represents the 'ENTER' key. */
        public      static  KEY_ENTER       :number                             = 13;
        /** The keycode that represents the 'ESCAPE' key. */
        public      static  KEY_ESCAPE      :number                             = 27;
        /** The keycode that represents the 'SPACE' key. */
        public      static  KEY_SPACE       :number                             = 32;

        /** All current key information. */
        private             iAllKeys        :Array<boolean>                     = [];

        /*****************************************************************************
        *   Creates a new key system.
        *****************************************************************************/
        public constructor()
        {
            //set event listener for keyboard devices - all but IE
            window.addEventListener( "keydown",     this.onKeyDown, false );
            window.addEventListener( "keyup",       this.onKeyUp,   false );

            //set event listener for keyboard devices - IE
            window.addEventListener( "onkeydown",   this.onKeyDown, false );
            window.addEventListener( "onkeyup",     this.onKeyUp,   false );
        }

        /*****************************************************************************
        *   This method is always invoked by the system if a key is pressed.
        *
        *   @param evt  The system's propagated key event.
        *****************************************************************************/
        public onKeyDown=( evt:KeyboardEvent )=>
        {
            let keyCode = evt.which;
            this.iAllKeys[ keyCode ] = true;

            mfg.MfgDebug.key.log( "key pressed ["  + keyCode + "]" );
        };

        /*****************************************************************************
        *   This method is always invoked by the system if a key is released.
        *
        *   @param evt  The system's propagated key event.
        *****************************************************************************/
        public onKeyUp=( evt:KeyboardEvent )=>
        {
            let keyCode = evt.which;
            this.iAllKeys[ keyCode ] = false;

            mfg.MfgDebug.key.log( "key released ["  + keyCode + "]" );
        };

        /*****************************************************************************
        *   Checks if the key with the given keyCode is currently pressed.
        *
        *   @param  keyCode The keyCode of the key to return pressed state.
        *   @return         <code>true</code> if this key is currently pressed.
        *                   Otherwise <code>false</code>.
        *****************************************************************************/
        public isPressed( keyCode:number ):boolean
        {
            return this.iAllKeys[ keyCode ];
        }
    }
