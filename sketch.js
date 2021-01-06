var fixRec, movingRec;

function setup()
{
  createCanvas(800,400);
  fixRec = createSprite(400, 200, 100, 50);
  fixRec.shapeColor = "blue";
  fixRec.debug = true;

  movingRec = createSprite(400, 300, 50, 50);
  movingRec.shapeColor = "blue";
  movingRec.debug = true;

  bounceOff();
}

function draw() 
{
  background(0); 
  
  movingRec.x = mouseX;
  movingRec.y = mouseY;

  if(movingRec.x - fixRec.x < movingRec.width/2 + fixRec.width/2 && 
    fixRec.x - movingRec.x < movingRec.width/2 + fixRec.width/2 && 
    movingRec.y - fixRec.y < movingRec.height/2 + fixRec.height/2 && 
    fixRec.y - movingRec.y < movingRec.height/2 + fixRec.height/2)
  {
    fixRec.shapeColor = "red";
    movingRec.shapeColor = "red";
  }

  else
  {
    fixRec.shapeColor = "blue";
    movingRec.shapeColor = "blue";
  }

   drawSprites();
}

function bounceOff()
{
  fixRec = createSprite(400, 100, 100, 50);
  fixRec.shapeColor = "blue";
  fixRec.debug = true;
  fixRec.velocityY = 3;

  movingRec = createSprite(400, 350, 50, 50);
  movingRec.shapeColor = "blue";
  movingRec.debug = true;
  movingRec.velocityY = -3;

  if(movingRec.x - fixRec.x < movingRec.width/2 + fixRec.width/2 && 
    fixRec.x - movingRec.x < movingRec.width/2 + fixRec.width/2)
    {
      movingRec.velocityX = movingRec.velocityX * -1;
      fixRec.velocityX = fixRec.velocityX * -1;
    }
    if(movingRec.y - fixRec.y < movingRec.height/2 + fixRec.height/2 && 
      fixRec.y - movingRec.y < movingRec.height/2 + fixRec.height/2)
    {
      movingRec.velocityY = movingRec.velocityY * -1;
      fixRec.velocityY = fixRec.velocityY * -1;
    }
    
}