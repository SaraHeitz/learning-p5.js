// Function Parameters and Arguments
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.2-parameters-arguments.html
// https://youtu.be/zkc417YapfE
// https://editor.p5js.org/codingtrain/sketches/eGD-xzsw
var on = false;

function setup() {
  createCanvas(630, 400);
}

function draw() {
  background(246);

  if (on) {
  background(246);
  for(var x = 30;
          x <= 600;
          x = x + 30){
    for(var y = 30;
          y <= 350;
          y = y + 30){
    tree(x, y, random(20));}
  }
} else {
  background(100);
}

}

function tree(x, y, diameter) {
  fill(230);
  rect(x-1, y, 2, 20);

  fill(0, 255, 0);
  noStroke();
  ellipse(x, y, diameter, diameter);
}

function mousePressed() {
  on = !on;
}
