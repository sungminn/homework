function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
noStroke();
colorMode(RGB);
  
  fill(220);

  rect(30,30,170,170);
	
  fill(255,255,0);
  rect(200,30,170,170);
  
  fill(255,0,255);
  rect(30,200,170,170);

	fill(0,255,255);
  rect(200,200,170,170);

}
