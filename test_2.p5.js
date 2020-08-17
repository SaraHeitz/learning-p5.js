function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (mouseIsPressed) {
    fill(255, 25, 25);
  } else {
    fill(255, 255, 100);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
