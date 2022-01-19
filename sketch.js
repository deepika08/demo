const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
function preload(){
  bg_img = loadImage("assets/background.gif")
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;



  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(bg_img, 0,0, width, height)
  Engine.update(engine);

 
}

