// Function Basics
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1

var ball = {
  x: 300,
  y: 200,
  xspeed: 5,
  yspeed: -5
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(246);
  move();
  bounce();
  display();
}



//These are my custom made functions
function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(30);
  strokeWeight(2);
  fill(0, 255, 0);
  ellipse(ball.x, ball.y, 40, 40);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
