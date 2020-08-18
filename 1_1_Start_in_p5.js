// Function Setup schafft die Voraussetzungen,
// die basis-Layer auf der der folgende Layer
// aufbauen. Das Canvas wird aufgezogen, oder
// Daten geladen.
// happens once!

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent('myContainer');
  fill(0);
}


// Function draw erstellt Objekte und
// Animationen basierend auf den Voraus-
// setzungen von function setup(){}
// repeats itself for ever!

function draw() {

  //This is the start of ellipses

  ellipseMode(CENTER);
  fill(0,255,0);
  noStroke();
  ellipse(50,50,50,50);

  ellipseMode(CENTER);
  fill(0,255,0);
  noStroke();
  ellipse(550,550,50,50);

  ellipseMode(CENTER);
  fill(0,255,0);
  noStroke();
  ellipse(550,50,50,50);

  ellipseMode(CENTER);
  fill(0,255,0);
  noStroke();
  ellipse(50,550,50,50);

  //This is the end of ellipses

  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(3.5);
  rect(300, 300, 500, 500, 3.5, 3.5, 20, 20);
}
