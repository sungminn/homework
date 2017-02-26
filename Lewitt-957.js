function setup() { 
  createCanvas(400, 400);
} 

function mousePressed()
{
print("("+mouseX+","+mouseY+")");
}

function draw() { 
  background(255);
  noStroke();
    
  quad(30, 370, 270, 370, 270, 320, 30, 320);
  fill(200); 
	fill(180);

  quad(270, 370, 270, 320, 370, 273, 370, 320);
  fill(220);
  fill(210);
 
  
  quad(272, 322, 32, 320, 160, 273, 370, 273);
  fill(230);
  
  quad(135, 320, 316, 295, 316, 255, 135, 275);
	fill(240);
  
 	quad(101, 295, 135, 320, 136, 275, 101, 255);

  quad(101, 255, 135, 275, 316, 255, 280, 236);
  
}
