function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);

	
	fill(0);
	noStroke();
	rect(50,50,300,300,20);

	
	fill(255);
	noStroke();
	rect(100,100,200,200,20);
	
	
	
	strokeWeight(12);
	stroke(255);
	noFill();
	rect(75,75,250,250,20);
	filter(BLUR,10);
	

	
}
