
    const Matter = require('matter-js');

    /*******************************************************************************************************************
    *   Example 1 displays two falling boxes.
    *******************************************************************************************************************/
    function exampleBasic():void
    {
        console.log(">> show basic example ..");

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

    /*******************************************************************************************************************
    *   Example 2 displays a bridge full of boxes.
    *******************************************************************************************************************/
    function exampleBridge():any
    {
        console.log(">> show the bridge ..");

        let Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Body = Matter.Body,
            Composites = Matter.Composites,
            Common = Matter.Common,
            Constraint = Matter.Constraint,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Bodies = Matter.Bodies;

        // create engine
        let engine = Engine.create(),
            world = engine.world;

        // create renderer
        let render = Render.create({
            element: document.body,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                showAngleIndicator: true
            }
        });

        Render.run(render);

        // create runner
        let runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        let group = Body.nextGroup(true);
        let bridge = Composites.stack(160, 290, 15, 1, 0, 0, function(x, y) {

            return Bodies.rectangle(x - 20, y, 53, 20, {
                collisionFilter: { group: group },
                chamfer: 5,
                density: 0.005,
                frictionAir: 0.05,
                render: {
                    fillStyle: '#575375'
                }
            });
        });

        Composites.chain(bridge, 0.3, 0, -0.3, 0, {
            stiffness: 1,
            length: 0,
            render: {
                visible: false
            }
        });

        var stack = Composites.stack(250, 50, 6, 3, 0, 0, function(x, y)
        {
            return Bodies.rectangle(x, y, 50, 50, Common.random(20, 40));
        });

        World.add(world, [
            bridge,
            stack,
            Bodies.rectangle(30, 490, 220, 380, {
                isStatic: true,
                chamfer: { radius: 20 }
            }),
            Bodies.rectangle(770, 490, 220, 380, {
                isStatic: true,
                chamfer: { radius: 20 }
            }),
            Constraint.create({
                pointA: { x: 140, y: 300 },
                bodyB: bridge.bodies[0],
                pointB: { x: -25, y: 0 },
                length: 2,
                stiffness: 0.9
            }),

            Constraint.create({
                pointA: { x: 660, y: 300 },
                bodyB: bridge.bodies[bridge.bodies.length - 1],
                pointB: { x: 25, y: 0 },
                length: 2,
                stiffness: 0.9
            })
        ]);

        // add mouse control
        let mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.1,
                    render: {
                        visible: false
                    }
                }
            });

        World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 }
        });

        // context for MatterTools.Demo
        return {
            engine: engine,
            runner: runner,
            render: render,
            canvas: render.canvas,
            stop: function() {
                Matter.Render.stop(render);
                Matter.Runner.stop(runner);
            }
        };
    }

    /*******************************************************************************************************************
    *   Being invoked when the page is loaded completely.
    *******************************************************************************************************************/
    window.onload = function()
    {
        // exampleBasic();

        exampleBridge();



    };
