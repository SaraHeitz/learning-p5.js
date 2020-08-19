// createGraphics()
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.6-create-graphics.html
// https://youtu.be/TaluaAD9MKA

// Main Sketch: https://editor.p5js.org/codingtrain/sketches/7RN7GFD-Y
// Stars Sketch: https://editor.p5js.org/codingtrain/sketches/0kQ9v-bhM

// If you find "let" confusing, you can learn more in this video: https://www.youtu.be/q8SHaDQdul0

let x = 300;
let y = 300;
let extraCanvas;

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
  createCanvas(600, 600);
  extraCanvas = createGraphics(600, 600);
  extraCanvas.clear();
  background(246);
}

function draw() {

  // No trails!
  background(246);
  x += random(-3, 3);
  y += random(-3, 3);

  image(extraCanvas, 0, 0);
  fill(0, 255, 0);
  stroke(0);
  strokeWeight(3.5)
  ellipseMode(CENTER);
  ellipse(x, y, 100, 100);

  // trails
  //defining the spot color
  col.r = 0;
  col.g = random(240, 255);
  col.b = random(0, 255);
  //defining the spot position
  spot.x = random(0, width);
  spot.y = random(0, height);
  //creating the basic ellipse, extraCanvas funktionert wie eine BG Layer!
  extraCanvas.noStroke();
  extraCanvas.fill(col.r, col.g, col.b);
  extraCanvas.ellipse(spot.x, spot.y, 6, 6);
  }
