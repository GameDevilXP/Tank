// You could have multiple flags like: start, launch to indicate the state of the game.

var myEngine;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine



*/

var ground,tanker,shootball,canonball,ball;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

    ground = new Ground(200,380,400,30);

    

    shootball = new ShootBall();

    tanker = new Tanker(380,355,50,50);

}

function draw() {
// Remember to update the Matter Engine and set the background.
  background("red");
  ground.display();
  if(mouseClickOver(tanker)) {
    canonball = new CanonBall(shootball.angle + 10,shootball.angle + 10);
}
  shootball.display();
  tanker.display();
}

Engine.update(myEngine);


function keyReleased() {
    // Call the shoot method for the cannon.
}