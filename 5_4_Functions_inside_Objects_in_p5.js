// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman



// This is my object called bubble.
// By x and y I define the initial values.
// Alle Funktionen beziehen sich auf die Variable "bubble".
var bubble = {
  x: 300,
  y: 200,
// Mit dieser Funktion erstelle ich das Objekt.
  display: function(){
    stroke(30);
    strokeWeight(2.5);
    fill(246);
    ellipse(this.x,this.y, 24, 24 );
  },
// Mit dieser Funktion animiere ich das Objekt .
  move: function(){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
}


function setup() {
  createCanvas(600, 400);}

// Das nach der Variable ausdefinierte Objekt
// kann in "function draw()"" angesprochen werden.
function draw() {
  background(246);
  bubble.move();
  bubble.display();
}
