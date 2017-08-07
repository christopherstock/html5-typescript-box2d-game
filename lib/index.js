"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(">>> index.ts <<<");
var b2d = require('box2d');
var upperBound = new b2d.b2Vec2(1000, 1000);
var lowerBound = new b2d.b2Vec2(-1000, -1000);
var test1 = new b2d.b2AABB(lowerBound, upperBound);
test1.lowerBound = new b2d.b2Vec2(1000, 1000);
test1.upperBound = new b2d.b2Vec2(-1000, -1000);
//console.dir(test1);
///import * as box2d from "../Box2D/Box2D";
// This is a simple example of building and running a simulation
// using Box2D. Here we create a large ground box and a small dynamic
// box.
// There are no graphics for this example. Box2D is meant to be used
// with your rendering engine in your game engine.
function main() {
    // Define the gravity vector.
    var gravity = new b2d.b2Vec2(0, -10);
    console.log("Creating world ..");
    // Construct a world object, which will hold and simulate the rigid bodies.
    var world = new b2d.b2World(test1, gravity, 0);
    console.log("Created world ..");
    // Define the ground body.
    var groundBodyDef = new b2d.b2BodyDef();
    groundBodyDef.position.Set(0, -10);
    // Call the body factory which allocates memory for the ground body
    // from a pool and creates the ground box shape (also from a pool).
    // The body is also added to the world.
    var groundBody = world.CreateBody(groundBodyDef);
    console.log("Creating shape");
    // Define the ground box shape.
    var groundBox = new b2d.b2PolygonShape({
        userData: "test",
        friction: 1.0,
        restitution: 1.0,
        density: 1.0,
        filter: new b2d.b2FilterData(),
    });
    console.log("Created shape");
    // The extents are the half-widths of the box.
    //groundBox.SetAsBox(50, 10);
    groundBox.edgeX = 50.0;
    groundBox.edgeY = 10.0;
    console.log("SeT as box!");
    // Add the ground fixture to the ground body.
    //        groundBody.CreateFixture(groundBox);
    console.log("Created fixture!");
    // Define the dynamic body. We set its position and call the body factory.
    var bodyDef = new b2d.b2BodyDef();
    bodyDef.type = b2d.b2Body.e_dynamicType;
    console.log("Set position ..");
    bodyDef.position.Set(0, 4);
    var body = world.CreateBody(bodyDef);
    console.log("Add dynamic box ..");
    // Define another box shape for our dynamic body.
    var dynamicBox = new b2d.b2PolygonShape({
        userData: "test2",
        friction: 1.0,
        restitution: 1.0,
        density: 1.0,
        filter: new b2d.b2FilterData(),
    });
    /*
            dynamicBox.SetAsBox(1, 1);
    */
    dynamicBox.edgeX = 10.0;
    dynamicBox.edgeY = 25.0;
    console.log("Added dynamic box ..");
    /*
            // Define the dynamic body fixture.
            const fixtureDef: Box2D.Dynamics.b2FixtureDef = new b2d.b2FixtureDef();
            fixtureDef.shape = dynamicBox;
    
            // Set the box density to be non-zero, so it will be dynamic.
            fixtureDef.density = 1;
    
            // Override the default friction.
            fixtureDef.friction = 0.3;
    
            // Add the shape to the body.
            const fixture: Box2D.Dynamics.b2Fixture = body.CreateFixture(fixtureDef);
    */
    // Prepare for simulation. Typically we use a time step of 1/60 of a
    // second (60Hz) and 10 iterations. This provides a high quality simulation
    // in most game scenarios.
    var timeStep = 1 / 60;
    var velocityIterations = 6;
    var positionIterations = 2;
    // This is our little game loop.
    for (var i = 0; i < 60; ++i) {
        // Instruct the world to perform a single step of simulation.
        // It is generally best to keep the time step and iterations fixed.
        world.Step(timeStep, velocityIterations, positionIterations);
        // Now print the position and angle of the body.
        var position = body.GetPosition();
        var angle = body.GetAngle();
        console.log(position.x.toFixed(2), position.y.toFixed(2), angle.toFixed(2));
    }
    // When the world destructor is called, all bodies and joints are freed. This can
    // create orphaned pointers, so be careful about your world management.
    /*
            body.DestroyFixture(fixture);
    */
    world.DestroyBody(body);
    return 0;
}
exports.main = main;
main();
//# sourceMappingURL=index.js.map