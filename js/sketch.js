const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, mini6, mini62

var block1,block2block3,bck4block5block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var block17,block18,block19,block20,block21,block22,block23,block24,block25
var hexa_image, hexa
var chain 

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    hexa_image=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,500,1000,20);
    mini6= new Ground(640,250,220,20);
    mini62= new Ground(330,450,250,20);

    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    slingShot=new SlingShot(this.polygon,{x:100,y:200})

    ImageMode(CENTER)
    Image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    
    //level 1//
    block1= new Block(240,425,30,30);
    block2=new Block(240,425,30,30);
    block3=new Block(240,425,30,30);
    block4=new Block(240,425,30,30);
    block5=new Block(240,425,30,30);
    block6=new Block(240,425,30,30);
    block7=new Block(240,425,30,30);
    
    block8=new Block(240,425,30,30);
    block9=new Block(240,425,30,30);
    block10=new Block(240,425,30,30)
    block11=new Block(240,425,30,30);
   
    box3 = new Box(390,155,30,40);
    
    
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(-2);
    stroke("white");
    textSize(13);
    fill("red");
    text("Score :"+ score, width-300, 50)
    
    platform.display();
    
    slingshot.display();    
    
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
}
