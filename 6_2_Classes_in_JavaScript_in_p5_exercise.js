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

    fill(0, 255, 0);
    noStroke();
    ellipse(this.x, this.y, 20, 20);
    fill(0,255,150)
    ellipse(this.x-5, this.y-10, this.y-random(-20,5), 20);
    fill(150,255,50)
    ellipse(this.x+5, this.y-5, 20, 20);
  }
}
