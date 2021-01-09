
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var upPart

function preload()
{
	
}

function setup() {
	createCanvas(1590, 752);


	engine = Engine.create();
	world = engine.world;

	upPart = new UpPart(795,100,1000,50);
	bob1 = new Bob(500,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  upPart.display();
  bob1.display();
  
  drawSprites();
 
}



