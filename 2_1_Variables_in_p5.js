
// Function Setup schafft die Voraussetzungen,
// die basis-Layer auf der der folgende Layer
// aufbauen. Das Canvas wird aufgezogen, oder
// Daten geladen.

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
  background(0,255,0);
}


// Function draw erstellt Objekte und
// Animationen basierend auf den Voraus-
// setzungen von function setup(){}

function draw() {
  noStroke();
  fill(250, 200 ,200 ,50 );
  ellipse(mouseX, mouseY, 25, 25);
}
function mousePressed() {
  background(0)

}
