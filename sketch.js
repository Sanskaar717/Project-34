const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld,myEngine;
var bgI,ground,hero,fly;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var monster;

function preload() {
//preload the images here

  bgI = loadImage("Images/GamingBackground.png");
}

function setup() {
  createCanvas(1365, 662);
  // create sprites here

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(682.5,635,10,1365);
  hero = new Hero(200,400);
  fly = new Fly(hero.body,{x:200,y:100});
  b1 = new Block(650,565);
  b2 = new Block(650,515);
  b3 = new Block(650,465);
  b4 = new Block(650,415);
  b5 = new Block(650,365);
  b6 = new Block(650,315);
  b7 = new Block(750,565);
  b8 = new Block(750,515);
  b9 = new Block(750,465);
  b10 = new Block(750,415);
  b11 = new Block(750,365);
  b12 = new Block(750,315);
  b13 = new Block(750,265);
  b14 = new Block(750,215);
  b15 = new Block(850,565);
  b16 = new Block(850,515);
  b17 = new Block(850,465);
  b18 = new Block(850,415);
  b19 = new Block(850,365);
  b20 = new Block(850,315);
  monster = new Monster(1250,100);
}

function draw() {
  background(bgI);

  Engine.update(myEngine);

  ground.display();
  hero.display();
  fly.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}