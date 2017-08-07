
    const Matter = require('matter-js');

    /*******************************************************************************************************************
    *   Example 1 displays two falling boxes.
    *******************************************************************************************************************/
    function showFallingBoxes()
    {
        console.log(">> showFallingBoxes()");

        let body = document.querySelector("body");
        // Matter.js module aliases
        let Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies;

        // create a Matter.js engine
        let engine = Engine.create(body);

        // create two boxes and a ground
        let boxA = Bodies.rectangle(400, 200, 80, 80);
        let boxB = Bodies.rectangle(450, 50, 80, 80);
        let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        // add all of the bodies to the world
        World.add(engine.world, [boxA, boxB, ground]);

        // run the engine
        Engine.run(engine);
    }

    /*******************************************************************************************************************
    *   Being invoked when the page is loaded completely.
    *******************************************************************************************************************/
    window.onload = function()
    {
        showFallingBoxes();
    };
