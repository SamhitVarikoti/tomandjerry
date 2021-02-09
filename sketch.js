var canvas,bg;
var together;
var cat,catImage1,catImage2;
var mouse,mouseImage1,mouseImage2;


function preload() {
    bg = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png");
    catImage3 = loadAnimation("images/cat3.png");
    catImage4  = loadAnimation("images/cat4.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png");
    mouseImage3 = loadAnimation("images/mouse3.png");
    mouseImage4 = loadAnimation("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",catImage1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImage2);
    mouse.scale = 0.15;

}

function draw() {

    background(bg);

    text(mouseX + ',' + mouseY,10,45);

    

    if(cat.x - mouse.x < 70){
        cat.velocityX = 0;
        cat.addAnimation("catlastImage",catImage4);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catlastImage");
        mouse.addAnimation("mouselastImage",mouseImage4);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouselastImage");
     }

    

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning",catImage2);
     cat.changeAnimation("catRunning");
  }
  
  


}
