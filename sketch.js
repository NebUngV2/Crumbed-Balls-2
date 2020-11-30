
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(50, 50, 50);
	dustbin = new Dustbin(400, 400, 100, 130);
	ground = new Ground(250, 480, 500, 20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  dustbin.display();
  ground.display();

  
  drawSprites();
 
}


function keyPressed() {
   if(keyCode===UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-270})
   }

}
