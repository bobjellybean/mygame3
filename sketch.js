const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var  bomb, bullet, fighter, melon, line

function setup()
{
    var canvas = createCanvas(1200,800);
    engine=Engine.create();
    world= engine.world;

bomb = new bombs(0,0);

fighter = new jetplane(0,0);

melon = new mellon(0,0);

bullet = new bullet(0,0);

 line = new lines(60,800);
}

function draw()  {
    background("white");


    line.display()
    drawsprites();
    
    if(keyPressed(UP)) {
        
    }

    if(keyPressed(DOWN)){
        
    }
}
