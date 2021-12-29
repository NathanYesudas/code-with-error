var backGround 
var database, gameState=0
var form, player, playerCount=0

function preload() {
  backGround = loadImage("assets/background.jpg")

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}



function draw() 
{
  background(51);
 image(backGround,0,0,width,height)
 if (playerCount === 2) {
  game.update(1);
}
 
 
  drawSprites()
}

