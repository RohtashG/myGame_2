var knight, knight_running, knight_collided;
var bg, bgImg;
var cactus, cactusImg;
var ground, groundImg, invisibleGround;
var goblin, goblin1, goblin1Img, goblin2, goblin2Img, goblin3, goblin3Img;

function preload(){
  bgImg = loadImage("images/bg.png");
  knight_running = loadAnimation("images/runner1.png","images/runner2.png","images/runner3.png","images/runner4.png");
  knight_collided = loadImage("images/runnerCollided.png");

  groundImg = loadImage("images/grass.png");

  goblin1Img = loadImage("images/goblin1.png");
  goblin2Img = loadImage("images/goblin2.png");
  goblin3Img = loadImage("images/goblin3.png");
  
}

function setup() {
  createCanvas(600, 210);
  
  knight = createSprite(50,180,20,50);

  knight.addAnimation("running",knight_running);
  knight.addAnimation("collided",knight_collided);
  knight.scale=0.75;

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImg);
  ground.x = ground.width /2;
  ground.velocityX = -6
  ground.scale=0.25;

  
}

function draw() {
  background(bgImg)
  if(keyDown("space") && knight.y >= 159) {
    knight.velocityY = -12;
  }

  knight.velocityY = 0;

  drawSprites();

  spawnGoblin();
 }

 function spawnGoblin(){
  if(frameCount % 80 === 0) {
    var goblin = createSprite(600,165,10,40);
   goblin.scale = 0.2;
   goblin.velocityX = -6;
    
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: goblin.addImage(goblin1Img);
              break;
      case 2: goblin.addImage(goblin2Img);
              break;
      case 3: goblin.addImage(goblin3Img);
      
    }
 }
}
