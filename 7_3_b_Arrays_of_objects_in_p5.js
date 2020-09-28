// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=RXWO3mFuW-I&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=28


let bubbles = [];


function setup() {
  createCanvas(600, 400);
}

function mouseDragged() {
  let r = random(10,50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

// This is using javascript without the counter
// Javascript will draw the objects counting in order up from 0
function draw() {
  background(30);
  for (let bubble of bubbles){
      bubble.move();
      bubble.show();
  }

  // for (let i = 0; i < bubbles.length; i++){
  //  bubbles[i].move();
  //  bubbles[i].show();
  // }
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
