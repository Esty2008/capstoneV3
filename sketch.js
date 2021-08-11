var bgImg;
var formObj;
var alienImg, shelterImg, tankImg, lazerImg, bulletImg, gameBgImg;

function preload(){
  bgImg = loadImage('Images/homeScreen.jpg')

  alienImg = loadImage('Images/alien.png');
  shelterImg = loadImage('Images/empty-red-brick-wall.jpg');
  tankImg = loadImage('Images/tank.png');
  lazerImg = loadImage('Images/lazer.png');
  bulletImg = loadImage('Images/bullet.png');
  gameBgImg = loadImage('Images/294.jpg')
}

function setup(){
  createCanvas(displayWidth-320,displayHeight-190)

}

function draw() {
  background(bgImg)

  formObj = new Form();



        formObj.display();
        drawSprites();
        
}