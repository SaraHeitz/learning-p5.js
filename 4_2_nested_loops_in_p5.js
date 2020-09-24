// while and for Loops - p5.js tutorial
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=1c1_TMdf8b8

d
var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  if (on) {
  background(30);
  } else {
  background(246);
  }
  if(mouseIsPressed){
    on = !on;
  }

  for(var x = 0; x <= mouseX; x = x + 10){
    for(var y = 0; y <= mouseY; y = y + 10){
    noStroke()
    fill(0,x,random(255))
    ellipse(x ,y,7,7);
    }

  }
}
