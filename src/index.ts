
    import * as mfg from './de/mayflower/mfg/mfg';
    import Matter = require( 'matter-js' );

    /*******************************************************************************************************************
    *   Being invoked when the page is loaded completely.
    *******************************************************************************************************************/
    window.onload = function()
    {
        // invoke main method
        mfg.Mfg.main();
    };

    /*******************************************************************************************************************
    *   Being invoked when the page is left.
    *******************************************************************************************************************/
    window.onunload = function()
    {
    };
