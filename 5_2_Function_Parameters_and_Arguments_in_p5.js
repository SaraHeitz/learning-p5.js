// Function Parameters and Arguments
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.2-parameters-arguments.html
// https://youtu.be/zkc417YapfE
// https://editor.p5js.org/codingtrain/sketches/eGD-xzsw

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(246);

  for(var x = 100; x <= 700; x = x + 100){
    for(var y = 100; y <= 350; y = y + 100){
    tree(x, y, 20);}
  }
}

function tree(x, y, diameter) {
  fill(220);
  rect(x - 1.5, y, 3, 20);

  fill(0, 255, 0);
  noStroke();
  ellipse(x, y, diameter, diameter);
  fill(0,255,150)
  ellipse(x-5, y-10, diameter, diameter);
  fill(150,255,50)
  ellipse(x+5, y-5, diameter, diameter);
}
