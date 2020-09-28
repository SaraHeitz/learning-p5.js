// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=RXWO3mFuW-I&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=28


let bubbles = [];


function setup() {
  createCanvas(600, 400);
  for (let i = 0; i <100; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,30)
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(30);
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-2,2);
  }

  show(){
    stroke(246);
    strokeWeight(2.5);
    noFill();
    ellipse(this.x, this.y, this.r*2 );
  }
}
