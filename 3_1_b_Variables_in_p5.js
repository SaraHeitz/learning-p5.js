// createGraphics()
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=1Osb_iGDdjk&feature=youtu.be

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 300) {
  fill(255,0,0);
  }

  ellipse(300, 200, 100, 100);
 }
