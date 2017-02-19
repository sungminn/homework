function setup() { 
  createCanvas(400, 400);
} 

function mousePressed()
{
print("("+mouseX+","+mouseY+")");
}

function draw() { 
  background(0);
	stroke(255);
  noFill();

  rect(50,50,300,300);
  
  ellipse(200,200,300,300);
  
  /*triangle*/
  line(50,350,200,50);
	line(350,350,200,50);
  
  /*left line down*/
  line(125,50,125,350);
  /*right line down*/
  line(275,50,275,350);
 	
  /*left diagonal line*/
  line(125,50,50,350);
  
  /*right X*/
  line(350,50,275,350);
  line(275,50,350,350);
}
