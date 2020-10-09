//variables for images and characters
var forest,idle,run,jump,fall,player;

//loading images and animations
function preload() {
    forest = loadImage("background.jpg");
}

//seting canvas and characters and objects
function setup() {
    createCanvas(displayWidth, displayHeight);

    //player settings
    player = createSprite(displayWidth/2,displayHeight-300,40,80);

    //ground settingd
    ground = createSprite(displayWidth/2,displayHeight-40,displayWidth,80);
}

//drawing the sprites
function draw() {

    //background
    background(forest);

    //statements for jumo and side movement
    if(keyDown("UP_ARROW")) {
        player.velocityY = -10;
    }

    if(keyDown("RIGHT_ARROW")) {
        player.velocityX = 7;
    }
    
    if(keyDown("LEFT_ARROW")) {
        player.velocityX = -7;
    }

    //friction
    player.velocityX = player.velocityX*0.7;

    //gravity
    player.velocityY = player.velocityY+0.6;

    //collision
    player.collide(ground);

    //scrolling ground

    //draw sprites
    drawSprites();
}