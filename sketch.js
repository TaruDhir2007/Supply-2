var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var plank1, plank2, plank3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	plank1Sprite = createSprite(300, 620, 20, 90);
	plank2Sprite = createSprite(500, 620, 20, 90);
	plank3Sprite = createSprite(400, 650, 200, 20);
	
	plank1Sprite.shapeColor = color(255,0,0);
	plank2Sprite.shapeColor = color(255,0,0);
	plank3Sprite.shapeColor = color(255,0,0);

	plank1 = Bodies.rectangle(300, 620, 20, 90 , {isStatic:true} );
	plank2 = Bodies.rectangle(500, 620, 20, 90 , {isStatic:true} );
	plank3 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false);

  }
}



