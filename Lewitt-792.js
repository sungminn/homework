function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  
  background(0);
  strokeWeight(4);
  colorMode(HSB);
  
  var H = 0;
  H= random(360);
  line(100,0,100,400);
  line(250,0,250,400);
  
	line(0,120,100,120);
  line(0,330,100,330);
  
	line(100,60,250,60);
  line(100,200,250,200);
  
  line(250,175,400,175);
  
  stroke(H,50,100,255);
	frameRate(5);
}
