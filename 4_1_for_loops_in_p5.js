// while and for Loops - p5.js tutorial
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=cnRD9o6odjk

//global variables are on top
//var x = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  background(246);
  stroke(255);
  strokeWeight(4);


  for(var x = 0; x <= width; x = x + 40){
  noStroke()
  fill(x,255,10)
  ellipse(x,100,25,x);
  }

  for(var x = 0; x <= width; x = x + 26){
  noStroke()
  fill(0,x,255)
  ellipse(x,300,25,25);
  }
}
