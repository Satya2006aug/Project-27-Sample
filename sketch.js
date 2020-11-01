
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5,roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	bobObj1 = new Bob(400,350,50);
	bobObj2 = new Bob(350,350,50);
	bobObj3 = new Bob(300,350,50);
	bobObj4 = new Bob(450,350,50);
	bobObj5 = new Bob(500,350,50);
	roof = new Roof(400,50,250,20);
	rope1 = new Rope(bobObj1.body,roof.body,425,350);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roof.display();
  
  drawSprites();
 
}



