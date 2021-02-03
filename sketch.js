const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld,myEngine;
var bgI,ground,hero;

function preload() {
//preload the images here

  bgI = loadImage("Images/GamingBackground.png")
}

function setup() {
  createCanvas(1365, 662);
  // create sprites here

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(682.5,655,10,1365);
  hero = new Hero(682.5,100);
}

function draw() {
  background(bgI);

  Engine.update(myEngine);

  ground.display();
  hero.display();
}

