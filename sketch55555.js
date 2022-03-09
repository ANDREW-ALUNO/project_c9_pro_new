

function setup() {
  createCanvas(800,800);

}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
 background ("green")
}
if(keyIsDown(LEFT_ARROW)){
 background("yellow")
 }
 if(keyIsDown(UP_ARROW)){
  background("red")
}
if(keyIsDown(DOWN_ARROW)){
  background("blue")
}





drawSprites()
}




