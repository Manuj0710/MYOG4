var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var planes, plane1, plane2, plane3, plane4;

var sky, plane1_img, plane2_img, plane3_img, plane4_img;

function preload(){
  sky = loadImage("backgroundImg.jpg");
  plane1_img = loadImage("plane_1.png");
  plane2_img = loadImage("plane_2.png");
  plane3_img = loadImage("plane_3.png");
  plane4_img = loadImage("plane_4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  background(sky)
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
