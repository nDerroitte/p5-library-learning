var EDGESIZE;

function SquareObject(x,y)
{
    this.x = x;
    this.y = y;
    this.filled = false
    this.finish = 0;
    this.draw = function()
    {
        push();
        stroke(255);
        strokeWeight(1)
        line(this.x,this.y,this.x,this.y+EDGESIZE);
        line(this.x,this.y,this.x+EDGESIZE,this.y);
        pop();
    }
    this.fill = function()
    {
        push();
        fill(255);
        rect(this.x,this.y,EDGESIZE,EDGESIZE);
        this.filled = true;
        this.finish = 15;
        pop();
    }
    this.unFill = function()
    {
        push();
        fill(0);
        rect(this.x,this.y,EDGESIZE,EDGESIZE);
        stroke(255);
        strokeWeight(1)
        line(this.x,this.y,this.x,this.y+EDGESIZE);
        line(this.x,this.y,this.x+EDGESIZE,this.y);
        line(this.x,this.y+EDGESIZE,this.x+EDGESIZE,this.y+EDGESIZE);
        line(this.x+EDGESIZE,this.y,this.x+EDGESIZE,this.y+EDGESIZE);
        pop();
    }
    this.mouseIn = function()
    {
        if((mouseX >= this.x && mouseX < this.x+EDGESIZE)&&(mouseY >= this.y && mouseY < this.y+EDGESIZE))
            return true;
        return false;
    }
    this.fade = function()
    {
        push();
        fill(255,255,255,map(this.finish,15,0,255,0));
        rect(this.x,this.y,EDGESIZE,EDGESIZE);
        stroke(255);
        strokeWeight(1)
        line(this.x,this.y,this.x,this.y+EDGESIZE);
        line(this.x,this.y,this.x+EDGESIZE,this.y);
        line(this.x,this.y+EDGESIZE,this.x+EDGESIZE,this.y+EDGESIZE);
        line(this.x+EDGESIZE,this.y,this.x+EDGESIZE,this.y+EDGESIZE);
        this.finish --;
        if(this.finish == -1)
            this.filled = false;
        pop();
    }
}

var squareObjectArray = [];

function setup()
{
    createCanvas (windowWidth,windowHeight);
    background(0);
    EDGESIZE = windowWidth/20;
    for(i =0; i<=windowWidth+EDGESIZE; i+= EDGESIZE)
    {
        for(j=0;j<= windowHeight+EDGESIZE; j+= EDGESIZE)
        {
            temp = new SquareObject(i,j);
            temp.draw()
            squareObjectArray.push(temp);
        }
    }
}

function draw()
{
    for(i =0; i<squareObjectArray.length;i++)
    {
        if(squareObjectArray[i].mouseIn())
            squareObjectArray[i].fill();
        else if(squareObjectArray[i].filled)
        {
            squareObjectArray[i].unFill();
            squareObjectArray[i].fade();
        }
    }
}
