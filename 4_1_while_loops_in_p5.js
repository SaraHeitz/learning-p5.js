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

  background(0);
  stroke(255);
  strokeWeight(4);

// this is a local variable.
// I can only use it in this draw function
  var x = 0;

  while (x <= width) {
  ellipse(x,200,25,25);
  x = x + 50;
}
}
