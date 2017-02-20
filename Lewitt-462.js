function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  strokeWeight(4);
  background(255);
  
  
for (var w = 0; w < width; w=w+20) {
  for (var p = 400; p < 850; p=p+20) {
noFill ();
ellipse (0,200,w,w);
noFill ();
ellipse (0,200,p,p);
}
}
}
