var runner, runnerAnimated, edges;
var roadImage, road, invisibleWall1, invisibleWall2;


function preload(){
  //pre-load images
  runnerAnimated = loadAnimation("Runner-1.png", "Runner-2.png");
  roadImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //creating road
  road = createSprite(200,200,200,400);
  road.addImage(roadImage);
  road.velocityY = 8
  road.scale = 1.2;

  //creating runner
  runner = createSprite(200,300);
  runner.addAnimation("runner", runnerAnimated);
  runner.scale = 0.1

  //creating invisible wall 1
  invisibleWall1 = createSprite(30,200,400,10);
  invisibleWall1.visible = false;

  //creating invisible wall 2
  invisibleWall2 = createSprite(370,200,400,10);
  invisibleWall2.visible = false;

  //creating edges
  edges = createEdgeSprites();
}

function draw() {
  background(0);

  runner.x = World.mouseX;
  runner.collide(invisibleWall1, invisibleWall2);

///logs to help me fix bugs
  //console.log(road.velocityY = 8)
  //console.log(road.y);
  //console.log(runner.x)

  //If statement for infinite road
  if (road.y>400){
    road.y = 100
  }

  if (runner.x < 30){
    runner.x = 40
  }

  if (runner.x > 370){
    runner.x = 360
  }

  drawSprites();
}
