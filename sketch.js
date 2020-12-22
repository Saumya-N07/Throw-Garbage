
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(400, 655, 200, 20);
	dustbin1.Static=true;
	dustbin2 = new Dustbin(300, 615, 20, 100);
	dustbin3 = new Dustbin(500, 615, 20, 100);

	paper1 = new Paper(50, 680, 4);

	ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper2.display();
  ground.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}