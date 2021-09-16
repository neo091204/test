let x;
let y;
let a;
let jump;

let img;

function preload() {
  img = loadImage("yokokara_shitsurei.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL);
    frameRate(60);
    x=0;
    y=windowHeight/2-130;
    a=0;
    jump=0;
}

function keyPressed() {
    if (key == " ") {
        a=-3;
    }
}

function draw(){
    console.log(y);
    y=y+a;

    
    if(a==-3){
        jump=jump+1;
        if(jump>30){
            a=3;
        }
    }
    if(a==3){
        jump=jump+1;
        if(jump>60){
            a=0;
            jump=0;
        }
    }

    
    background(0);
    //circle(x,y,100);
    //circle(0,0,100);
    fill(200, 150, 150);
    rect(-windowWidth/2, windowHeight/2-50, windowWidth , 100);

    //image(img, 0, 0);

    image(img, x, y, img.width / 10, img.height / 10);
}
