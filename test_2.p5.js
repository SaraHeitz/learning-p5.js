function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent('myContainer');
  fill(0);
}

function draw() {
  if (mouseIsPressed) {
    fill(205, 92, 92);
  } else {
    fill(255, 160, 122);
  }
  ellipse(mouseX, mouseY, 20, 20);
}
