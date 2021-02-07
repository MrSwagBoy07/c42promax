var r = 0;
var g = 50;
var b=255;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var boxes=[]
var box,boximg;


function setup() {
  createCanvas(800,400);
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
ground =new Ground(200,390,400,10);


}

function draw() {
  background(r,g,b);  
  r=map(mouseX,0,1200,0,255);
  g=map(mouseX,50,900,0,255);
  b=map(mouseX,100,600,0,255);
  fill("white")
  ellipse(mouseX,mouseY,10,10);
  Engine.update(engine);
    
  ground.display();
  for(var i=0;i<boxes.length;i++){
      boxes[i].display();
  }
 


  drawSprites();
}
function mousePressed(){
  if(mouseY<300){
  boxes.push(new Box(mouseX,mouseY,random(20,50),random(20,50)))
  }
  } 