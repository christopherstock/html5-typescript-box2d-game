
    import * as mfg from './de/mayflower/mfg/mfg';
    let Matter = require( 'matter-js' );

    /*******************************************************************************************************************
    *   Being invoked when the page is loaded completely.
    *******************************************************************************************************************/
    window.onload = function()
    {
var Example = Example || {};

Example.doublePendulum = function() {
    var Engine = Matter.Engine,
        Events = Matter.Events,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Vector = Matter.Vector;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            wireframes: false,
            background: '#0f0f13'
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var group = Body.nextGroup(true),
        length = 200,
        width = 25;

    var pendulum = Composites.stack(350, 160, 1, 1, -20, 0, function(x, y) {
        return Bodies.rectangle(x, y, length, width, {
            collisionFilter: { group: group },
            frictionAir: 0,
            chamfer: 5,
            render: {
                fillStyle: 'transparent',
                lineWidth: 1
            }
        });
    });

    pendulum.bodies[0].render.strokeStyle = '#ff0000';

    world.gravity.scale = 0.002;
/*
    Composites.chain(pendulum, 0.45, 0, -0.45, 0, {
        stiffness: 0.9,
        length: 0,
        angularStiffness: 0.7,
        render: {
            strokeStyle: '#0000ff'
        }
    });
*/
    Composite.add(pendulum, Constraint.create({
        bodyB: pendulum.bodies[0],
        pointB: { x: -length * 0.42, y: 0 },
        pointA: { x: pendulum.bodies[0].position.x - length * 0.42, y: pendulum.bodies[0].position.y },
        stiffness: 0.9,
        length: 0,
        render: {
            strokeStyle: '#ffff00'
        }
    }));

    World.add(world, pendulum);

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 700, y: 600 }
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
};



//Example.doublePendulum();

        // invoke main method
mfg.Mfg.main();
    };

    /*******************************************************************************************************************
    *   Being invoked when the page is left.
    *******************************************************************************************************************/
    window.onunload = function()
    {
    };
