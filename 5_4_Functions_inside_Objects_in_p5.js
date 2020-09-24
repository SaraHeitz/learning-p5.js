// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=QoFWCPVpWUE&frags=pl%2Cwn

var bubble = {
  x: 300,
  y: 200,
}

function setup() {
  createCanvas(600, 400);}


function draw() {
  background(246);
  move();
  display(300,200,50);
}

function move() {
  bubble.x = bubble.x + random(-1.1);
  bubble.y = bubble.y + random(-1.1);
  }

function display(x,y,diameter) {
  fill(0,255,0);
  ellipse(bubble.x,bubble.y,diameter);
  }
