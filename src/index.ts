
    import {Mfg} from './de/mayflower/mfg/mfg';
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

        let stack = Composites.stack(250, 50, 6, 3, 0, 0, function(x, y)
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
    *   Example 3 illustrates event handling.
    *******************************************************************************************************************/
    function exampleEvents():any
    {
        console.log(">> show manipulation ..");

        let Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Body = Matter.Body,
            Events = Matter.Events,
            Composite = Matter.Composite,
            Composites = Matter.Composites,
            Common = Matter.Common,
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
                wireframes: false
            }
        });

        Render.run(render);

        // create runner
        let runner = Runner.create();
        Runner.run(runner, engine);

        // an example of using composite events on the world
        Events.on(world, 'afterAdd', function(event) {
            console.log('added to world:', event.object);
        });

        // an example of using beforeUpdate event on an engine
        Events.on(engine, 'beforeUpdate', function(event) {
            let engine = event.source;

            // apply random forces every 5 secs
            if (event.timestamp % 5000 < 50)
                shakeScene(engine);
        });

        // an example of using collisionStart event on an engine
        Events.on(engine, 'collisionStart', function(event) {
            let pairs = event.pairs;

            // change object colours to show those starting a collision
            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i];
                pair.bodyA.render.fillStyle = '#333';
                pair.bodyB.render.fillStyle = '#333';
            }
        });

        // an example of using collisionActive event on an engine
        Events.on(engine, 'collisionActive', function(event) {
            let pairs = event.pairs;

            // change object colours to show those in an active collision (e.g. resting contact)
            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i];
                pair.bodyA.render.fillStyle = '#333';
                pair.bodyB.render.fillStyle = '#333';
            }
        });

        // an example of using collisionEnd event on an engine
        Events.on(engine, 'collisionEnd', function(event) {
            let pairs = event.pairs;

            // change object colours to show those ending a collision
            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i];

                pair.bodyA.render.fillStyle = '#222';
                pair.bodyB.render.fillStyle = '#222';
            }
        });

        let bodyStyle = { fillStyle: '#222' };

        // scene code
        World.add(world, [
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: bodyStyle })
        ]);

        let stack = Composites.stack(70, 100, 9, 4, 50, 50, function(x, y) {
            return Bodies.circle(x, y, 15, { restitution: 1, render: bodyStyle });
        });

        World.add(world, stack);

        let shakeScene = function(engine) {
            let bodies = Composite.allBodies(engine.world);

            for (let i = 0; i < bodies.length; i++) {
                let body = bodies[i];

                if (!body.isStatic && body.position.y >= 500) {
                    let forceMagnitude = 0.02 * body.mass;

                    Body.applyForce(body, body.position, {
                        x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
                        y: -forceMagnitude + Common.random() * -forceMagnitude
                    });
                }
            }
        };

        // add mouse control
        let mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // an example of using mouse events on a mouse
        Events.on(mouseConstraint, 'mousedown', function(event) {
            let mousePosition = event.mouse.position;
            console.log('mousedown at ' + mousePosition.x + ' ' + mousePosition.y);
            shakeScene(engine);
        });

        // an example of using mouse events on a mouse
        Events.on(mouseConstraint, 'mouseup', function(event) {
            let mousePosition = event.mouse.position;
            console.log('mouseup at ' + mousePosition.x + ' ' + mousePosition.y);
        });

        // an example of using mouse events on a mouse
        Events.on(mouseConstraint, 'startdrag', function(event) {
            console.log('startdrag', event);
        });

        // an example of using mouse events on a mouse
        Events.on(mouseConstraint, 'enddrag', function(event) {
            console.log('enddrag', event);
        });

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
    *   Example 4 illustrated manipulation on objects.
    *******************************************************************************************************************/
    function exampleManipulation():any
    {
        console.log(">> show manipulation ..");

        let Engine = Matter.Engine,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Body = Matter.Body,
                Events = Matter.Events,
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
                    showAxes: true,
                    showCollisions: true,
                    showConvexHulls: true
                }
            });

            Render.run(render);

            // create runner
            let runner = Runner.create();
            Runner.run(runner, engine);

            // add bodies
            let bodyA = Bodies.rectangle(100, 200, 50, 50, { isStatic: true }),
                bodyB = Bodies.rectangle(200, 200, 50, 50),
                bodyC = Bodies.rectangle(300, 200, 50, 50),
                bodyD = Bodies.rectangle(400, 200, 50, 50),
                bodyE = Bodies.rectangle(550, 200, 50, 50),
                bodyF = Bodies.rectangle(700, 200, 50, 50),
                bodyG = Bodies.circle(400, 100, 25),
                partA = Bodies.rectangle(600, 200, 120, 50),
                partB = Bodies.rectangle(660, 200, 50, 190),
                compound = Body.create({
                    parts: [partA, partB],
                    isStatic: true
                });

            World.add(world, [bodyA, bodyB, bodyC, bodyD, bodyE, bodyF, bodyG, compound]);

            World.add(world, [
                // walls
                Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
                Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
                Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
                Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
            ]);

            let counter = 0,
                scaleFactor = 1.01;

            Events.on(engine, 'beforeUpdate', function(event) {
                counter += 1;

                if (counter === 40)
                    Body.setStatic(bodyG, true);

                if (scaleFactor > 1) {
                    Body.scale(bodyF, scaleFactor, scaleFactor);
                    Body.scale(compound, 0.995, 0.995);

                    // modify bodyE vertices
                    bodyE.vertices[0].x -= 0.2;
                    bodyE.vertices[0].y -= 0.2;
                    bodyE.vertices[1].x += 0.2;
                    bodyE.vertices[1].y -= 0.2;
                    Body.setVertices(bodyE, bodyE.vertices);
                }

                // make bodyA move up and down
                // body is static so must manually update velocity for friction to work
                let py = 300 + 100 * Math.sin(engine.timing.timestamp * 0.002);
                Body.setVelocity(bodyA, { x: 0, y: py - bodyA.position.y });
                Body.setPosition(bodyA, { x: 100, y: py });

                // make compound body move up and down and rotate constantly
                Body.setVelocity(compound, { x: 0, y: py - compound.position.y });
                Body.setAngularVelocity(compound, 0.02);
                Body.setPosition(compound, { x: 600, y: py });
                Body.rotate(compound, 0.02);

                // every 1.5 sec
                if (counter >= 60 * 1.5) {
                    Body.setVelocity(bodyB, { x: 0, y: -10 });
                    Body.setAngle(bodyC, -Math.PI * 0.26);
                    Body.setAngularVelocity(bodyD, 0.2);

                    // reset counter
                    counter = 0;
                    scaleFactor = 1;
                }
            });

            // add mouse control
            let mouse = Mouse.create(render.canvas),
                mouseConstraint = MouseConstraint.create(engine, {
                    mouse: mouse,
                    constraint: {
                        stiffness: 0.2,
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
        // exampleBridge();
        // exampleEvents();
        // exampleManipulation();

        Mfg.main();
    };

    /*****************************************************************************
    *   Being invoked when the page is left.
    *****************************************************************************/
    window.onunload = function()
    {
    };
