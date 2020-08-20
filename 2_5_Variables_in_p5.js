
// The random() Function
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.5-random.html
// https://youtu.be/nicMAoW6u1g
// https://editor.p5js.org/codingtrain/sketches/4gD7Btgi

var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 0,
  g: 255,
  b: 0
};

function setup() {
createCanvas(displayWidth, displayHeight);
background(246,246,246);
}

function draw() {
  //defining the spot color
  col.r = 0;
  col.g = random(240, 255);
  col.b = random(0, 255);
  //defining the spot position
  spot.x = random(0, width);
  spot.y = random(0, height);
  //creating the basic ellipse
  noStroke();
  fill(col.r, col.g, col.b);
  ellipse(spot.x, spot.y, 6, 6);
}
