const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    // Over 9000

    ground = new Ground(9000,height,1200,20);
    platform = new Ground(9000, 305, 300, 170);

    box1 = new Box(9000,320,70,70);
    box2 = new Box(9000,320,70,70);
    pig1 = new Pig(9000, 350);
    log1 = new Log(9000,260,300, PI/2);

    box3 = new Box(9000,240,70,70);
    box4 = new Box(9000,240,70,70);
    pig3 = new Pig(9000, 220);

    log3 =  new Log(9000,180,300, PI/2);

    box5 = new Box(9000,160,70,70);
    log4 = new Log(9000,120,150, PI/7);
    log5 = new Log(9000,120,150, -PI/7);

    // The only Required stuff
    roof = new Ground(700,780,700,10)
    
    roof1 = new Ground(1055,450,10,650)

    roof2 = new Ground(750,700,10,100)

    roof3 = new Ground(650,700,10,100)

    roof4 = new Ground(500,700,10,100)

    roof5 = new Ground(900,700,10,100)

    roof6 = new Ground(345,450,10,650)

    bird = new Bird(450,360);
//slingshot = new SlingShot(bird.body,{x:500, y:60});

    bird1 = new Bird(550,100);


    bird2 = new Bird(560,100);


    bird3 = new Bird(650,100);


    bird4 = new Bird(700,100);


    bird5 = new Bird(750,100);


    bird6 = new Bird(800,100);


    bird7 = new Bird(850,100);
 

    bird8 = new Bird(900,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    text("John's Bird Cradle",650,50)

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

 
    platform.display();
    //log6.display();

    roof.display()
    
    roof1.display()

    roof2.display()

    roof3.display()

    roof4.display()

    roof5.display()

    roof6.display()



    bird.display();

    bird1.display();

    bird2.display();

    bird3.display();

    bird4.display();

    bird5.display();

    bird6.display();

    bird7.display();
 
    bird8.display();

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

