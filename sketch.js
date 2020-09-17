var bullet, wall;
var speed, weight;
var thickness;
function setup()  {
createCanvas(1600, 920);
speed = random(223, 321);
weight = random(30, 52);
thickness = random(22, 83);
bullet = createSprite(50, 350, 20, 50);
wall = createSprite(1500, 350, thickness, height/2);
wall.shapeColor = '80, 80, 80';
bullet.shapeColor = 'white';
}
function draw()  {
  background(0);
   
bullet.velocityX = speed;
if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    bullet.shapeColor = color(255, 0, 0);
    wall.shapeColor = 'yellow';
  }
  if(deformation<180&&deformation>100)
  {
    bullet.shapeColor = color(230, 230, 0);
    wall.shapeColor = 'green';
  }
  if(deformation<100)
  {
    bullet.shapeColor = color(0, 255, 0);
    wall.shapeColor = 'red';
  }
}
drawSprites()
}
function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x+bullet.width;
wallLeftEdge = wall.x;
if(hasCollided(bullet, wall))  {
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>5)  {
   wall.shapeColor = 'red';
  }
  if(damage<5)  {
    wall.shapeColor = 'green';
  }
}
 
if(bulletRightEdge>=wallLeftEdge)
{
 return true; 
}
return false;

}
