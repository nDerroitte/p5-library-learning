function setup() {
    createCanvas (640,360);
    strokeWeight(8);
}

rainDrop = function()
{
  this.x = random(0,width);
  this.y = 0;
  this.rand = random(3,7);
  this.moveLength = map(this.rand,3,7,5,20);
  this.move = function()
  {
    this.y += this.rand;
  }
  this.print = function()
  {
    line(this.x,this.y,this.x,this.y+this.moveLength);
  }
}

var rainDropArray= [];

function draw() {
  background(225);
  var c = random(10)
  stroke(40);
  if(c>5)
    rainDropArray.push(new rainDrop());
  for(i = 0; i<rainDropArray.length ; i++)
  {
    rainDropArray[i].print();
    rainDropArray[i].move();
    if(rainDropArray[i].y >= height)
    {
      rainDropArray.splice(i,1);
      i--;
    }
  }
}
