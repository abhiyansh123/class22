
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground;
let ball

var top_wall;
var btn1

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);
 
  var ball_options = {
    restitution:1
  }
  btn1 = createImg("up.png")
  btn1.position(20,30)
  btn1.size(50,50)
  btn1.mouseClicked(hforce)
  ball = Bodies.circle(100,200,15,ball_options)
  World.add(world,ball)
 
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  
 ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);
} 
function hforce(){

  Matter.Body.applyForce(ball,{x:0,y:0,},{x:0.01,y:0.05})
}

