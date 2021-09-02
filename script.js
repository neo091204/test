let x;
let y;
let a;
function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL);
    frameRate(60);
    x=0;
    y=0;
    a=3;
}

function draw(){
    y=y+a;
    if(y>windowHeight/2-50){
        a=-3;

    }
    if(y<-windowHeight/2+50){
        a=3;
    }
    background(0);
    circle(x,y,100);
}