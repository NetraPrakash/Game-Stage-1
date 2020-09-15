var player,mask1,mask2,mask3,v1,v2,v3,v4,v5,rborder,lborder,downborder,ground,groundimg;

function preload(){
groundimg= loadImage("Background.jpg");
}

function setup() {
  createCanvas(1000,700);

  //creating the moving ground
  ground=createSprite(100,500,2000,700);
  ground.addImage("background",groundimg);
  console.log(ground.width);

  //creating the borders
  rborder=createSprite(1000,0,10,1000);
  rborder.visible=false;
  lborder=createSprite(0,0,10,1000);
  lborder.visible=false;
  downborder=createSprite(0,500,1000,10);
  downborder.visible=false;

  //creating the player
  player= createSprite(20,690,20,20);

  //creating the masks and viruses to block the player from reaching them
  mask1=createSprite(10,10,10,10);
  v1=createSprite(10,30,10,10);
  v1.velocityX=+5;
  mask2=createSprite(990,10,10,10);
  v2=createSprite(990,50,10,10);
  v2.velocityX=-5;
  mask3=createSprite(500,300,10,10);

  //creating extra virus obstacles
  v3=createSprite(200,450,10,10);
  v3.velocityX=+6;
  v4=createSprite(400,450,10,10);
  v4.velocityX=+6;
  v5=createSprite(600,450,10,10);
  v5.velocityX=+6;
}

function draw() {
  background(groundimg); 

  //making the ground move
  ground.velocityY=+5;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  //player moves with the arrow keys
  if (keyDown(UP_ARROW)){
    player.y=player.y-3;
  }
  if (keyDown(DOWN_ARROW)){
    player.y=player.y+3;
  }
  if (keyDown(RIGHT_ARROW)){
    player.x=player.x+3;
  }
  if (keyDown(LEFT_ARROW)){
    player.x=player.x-3;
  }

  v1.bounceOff(rborder) ;
  v1.bounceOff(lborder) ;
  v2.bounceOff(rborder) ;
  v2.bounceOff(lborder) ;
  v3.bounceOff(lborder);
  v3.bounceOff(rborder);
  v4.bounceOff(lborder);
  v4.bounceOff(rborder);
  v5.bounceOff(lborder);
  v5.bounceOff(rborder);
  drawSprites();
}