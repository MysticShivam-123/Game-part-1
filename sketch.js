var boy1
var ground
var boy1img

function preload(){
boy1img = loadAnimation("boy1.png")
ground1img = loadAnimation("ground1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(displayWidth/2,windowHeight-20,windowWidth,50)
  boy1 = createSprite(50,windowHeight-80,60,60)
  boy1.addAnimation("boy1",boy1img)
  ground.velocityX = -3
  ground.addAnimation("ground1",ground1img)
}

function draw() {
  background(0);  
  drawSprites();
  if(ground.x < 0){
    ground.x = ground.width/2
  }
}

