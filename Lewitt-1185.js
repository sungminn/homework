function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  stroke(255);
  strokeWeight(50);
  
  line(0,200,400,200);
  filter(BLUR,50);
}
