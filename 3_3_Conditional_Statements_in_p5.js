// createGraphics()
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=LO3Awjn_gyU

//abscisse et ordonnée de l'ellipse
let x =10, y = 20;

//direction et vitesse des déplacements
let direction ={
  vitX:4,
  vitY:2,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(246);
map

  fill(20*direction.vitY,20*direction.vitX,map(x,0,400,0,255) );

  ellipse(x, y, 40+2*direction.vitX,80+2*direction.vitY);

  x+=direction.vitX;
  y+=direction.vitY;

  if (x > width) {
    direction.vitX = random(-7,-1);
  }
  else if (x < 0 ) {
           direction.vitX = random(1,7);
           }
  if (y >height) {
    direction.vitY = random(-7,-1);
  }
  else if (y <0 ) {
    direction.vitY = random(1,7);
  }

}
