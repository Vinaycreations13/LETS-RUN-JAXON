var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(800,800);
  
// Moving background
path=createSprite(400,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.9;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.16;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(40,0,100,10000);
 leftBoundary.visible = false;
rightBoundary=createSprite(1090,0,800,1600);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y >800 ){
    path.y = height/2;
  }
  

 
  
  drawSprites();
}
