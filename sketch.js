var fixedRect, movingRect;
var g1,g2,g3,g4
function setup() {
  createCanvas(1200,800);
  g1=createSprite(100,100,50,50)
  g2=createSprite(200,100,50,50)
  g3=createSprite(300,100,50,50)
  g4=createSprite(400,100,50,50)

  g1.shapeColor="green"
  g2.shapeColor="green"
  g3.shapeColor="green"
  g4.shapeColor="green"


  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
if(isTouching(movingRect,g1) ||isTouching(movingRect,g2)|| isTouching(movingRect,g3)||isTouching(movingRect,g4)){
  movingRect.shapeColor="red"
  g1.shapeColor="red"
  g2.shapeColor="red"
  g3.shapeColor="red"
  g4.shapeColor="red"
}
else{
  movingRect.shapeColor="green"
  g1.shapeColor="green"
  g2.shapeColor="green"
  g3.shapeColor="green"
  g4.shapeColor="green"

}
  drawSprites();
}
function isTouching(object1,object2){
  
if (object1.x - object2.x < object2.width/2 + object1.width/2 &&
   object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
     object2.y - object2.y < object2.height/2 + object1.height/2) 
     { return true; }
      else { return false; } }
