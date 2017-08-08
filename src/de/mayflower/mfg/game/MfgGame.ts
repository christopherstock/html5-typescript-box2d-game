
    const Matter = require('matter-js');
    import {MfgDebug}    from '../mfg';
    import {MfgSettings} from '../mfg';

    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgGame
    {
        /*****************************************************************************
        *   Inits this app from scratch.
        *****************************************************************************/
        public init()
        {
            MfgDebug.init.log( "Initing game engine" );

            let body = document.querySelector("body");
            // Matter.js module aliases
            let Engine = Matter.Engine,
            World = Matter.World,
            Bodies = Matter.Bodies;

            // create a Matter.js engine
            let engine = Engine.create(body);

            // create two boxes and a ground
            let boxA:Body = Bodies.rectangle(400, 200, 80, 80);
            let boxB:Body = Bodies.rectangle(450, 50, 80, 80);
            let ground:Body = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

            // add all of the bodies to the world
            World.add( engine.world, [ boxA, boxB, ground ] );

            // run the engine
            Engine.run( engine );
        }
    }
