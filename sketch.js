const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button_one;
var button_two;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution: 0.95,
  }

  ball = Bodies.circle(200,100,20, ball_options)
  World.add(world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);

button_one = createImg("right.png");
button_one.position(220,30);
button_one.size(50,50);
button_one.mouseClicked(hForce)

button_two = createImg("up.png")
button_two.position(150,30);
button_two.size(50,50);
button_two.mouseClicked(vForce);


}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse (ball.position.x, ball.position.y, 20)
  
  Engine.update(engine);
}

function hForce() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.02, y:0})
}

function vForce() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05})
}