function setup()
{
    createCanvas (windowWidth,windowHeight);
    sizeE = width-20;
}

n=0;

function draw()
{
    background(250);
    noFill();
    strokeWeight(20);
    angle = map(n, 0, 200, PI, TWO_PI);
    stroke(255,0,0);
    arc(width/2,height,width-20,width-20,PI,angle);
    stroke(255,128,0);
    arc(width/2,height,width-60,width-60,PI,angle);
    stroke(255,255,0);
    arc(width/2,height,width-100,width-100,PI,angle);
    stroke(0,204,0);
    arc(width/2,height,width-140,width-140,PI,angle);
    stroke(0,128,255);
    arc(width/2,height,width-180,width-180,PI,angle);
    stroke(0,0,204);
    arc(width/2,height,width-220,width-220,PI,angle);
    stroke(102,0,204);
    arc(width/2,height,width-260,width-260,PI,angle);
    n++;

}
