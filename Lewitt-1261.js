function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  strokeWeight(3);
  stroke(255);
  background(0);
 
//noprotect

for (var w = 0; w < 800; w=w+50) {
noFill ();
ellipse (200,200,w,w);
filter(BLUR, 5);
}
}
