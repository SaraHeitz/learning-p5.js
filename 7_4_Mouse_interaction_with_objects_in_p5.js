// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=RXWO3mFuW-I&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=28


let bubbles = [];
let on = false;


function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++){
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);
  let b = new Bubble(x, y, r);
  bubbles.push(b);
  }
}

function mouseClicked() {
  console.log('mouse pressed');
for (let i = 0; i < bubbles.length; i++){
  // console.log(bubbles[i]);
  bubbles[i].clicked(mouseX, mouseY);
  on = !on;
  }
}

function draw() {
  background(30);
  for (let i = 0; i < bubbles.length; i++){
  bubbles[i].move();
  bubbles[i].show();
  }
}



// ---
class Bubble {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.brighntness = 30;
    }

    clicked(px, py){
      let d = dist(px, py, this.x, this.y);
      if (d < this.r) {
        if(on){
          console.log('on');
        this.brighntness = 255;
      } else {
          console.log('off');
        this.brighntness = 30;
      }
    }
  }

    move(){
      this.x = this.x + random(-1,1);
      this.y = this.y + random(-1,1);
    }

    show(){
      stroke(246);
      strokeWeight(2.5);
      fill(this.brighntness,125);
      ellipse(this.x, this.y, this.r*2 );
    }
}
