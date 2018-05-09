var c = 4;
var n =0;

function setup() {
    createCanvas (640,360);
    angleMode(DEGREES);
    background(0);
    colorMode(HSB);
}

function draw() {
  a = n * 137.5;
  r = c * sqrt(n);
  x = r * cos(a) + width/2;
  y = r * sin(a) + height/2;
  push();
  noStroke();
  fill(a%256,255,255);
  ellipse(x,y,5);
  pop();
  n++;
}
