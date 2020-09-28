// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=rHiSsgFRgx4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=25


let bubble1;
let bubble2;


function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
}

function draw() {
  background(246);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}




class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show(){
    stroke(30);
    strokeWeight(2.5);
    fill(246);
    ellipse(this.x, this.y, this.r*2 );
  }
}

// store your classes in a seperate file, and link it in your html as source
// https://www.youtube.com/watch?v=5nf41qLeagU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=26
// let is a better wy to store Information than var
// https://www.youtube.com/watch?v=q8SHaDQdul0
