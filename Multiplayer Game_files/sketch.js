var bg;
var form;

function preload(){
  bg = loadImage("images/droneBg.jpg");
}

function setup(){
createCanvas(displayWidth-20,displayHeight-30)
form = new Form();
}

function draw (){
form.display();
}