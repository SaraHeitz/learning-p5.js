// Selbst bevor die Funktion gesetupped wird
// definieren wir unsere Variablen

var move = 25;
var change = 255;
var slowChange = 255;

// Function Setup schafft die Voraussetzungen,
// die basis-Layer auf der der folgende Layer
// aufbauen. Das Canvas wird aufgezogen, oder
// Daten geladen.

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent('myContainer');
  background(246,246,246);
}


// Function draw erstellt Objekte und
// Animationen basierend auf den Voraus-
// setzungen von function setup(){}

function draw() {
  //function loop
  move = move + 0.8;
  change = change - 0.5;
  slowChange = slowChange - 0.1;
  //elipse
  ellipseMode(CENTER);
  noStroke();
  fill(0, 255 ,change, 0.5);
  ellipse(300, 300, move, move);
}
