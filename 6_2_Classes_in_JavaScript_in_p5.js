// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=T-HGdc8L-7w&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=24


let bubble1;
let bubble2;


function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  //print(bubble.x, bubble.y);
}

function draw() {
  background(246);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}




class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show(){
    stroke(30);
    strokeWeight(2.5);
    fill(246);
    ellipse(this.x, this.y, 24, 24 );
  }
}
