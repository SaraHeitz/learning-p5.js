// Object Communication Part 1
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.6-object-communication-1.html
// https://youtu.be/W1-ej3Wu5zg
// https://editor.p5js.org/codingtrain/sketches/OG-_2K16

let bubbles = [];
// let puppy;

function setup() {
  createCanvas(600, 400);
    for (let i = 0; i <50; i++){
    let x = random(50,550);
    let y = random(50,350);
    let r = random(10,30)
    bubbles[i] = new Bubble(x, y, r);
  }
  puppy = new Bubble(300,200,10);
}

function draw() {
  background(200);
  // for (let i = 0; i < bubbles.length; i++) {
  //   bubbles[i].show();
  //   bubbles[i].move();
  // }
  // puppy.x = mouseX;
  // puppy.y = mouseY;
  // puppy.show();

  for (b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (other of bubbles){
      if (b !== other && b.intersects(other)) {
        overlapping = true;
     }
   }
   if (overlapping){
     b.changeColor(255);
   } else {
     b.changeColor(0);
   }
}
}



////////////////////////////////////////////////
class Bubble {

  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 30;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  move(){
    this.x = this.x + random(-0.5,0.5);
    this.y = this.y + random(-0.5,0.5);
  }

  changeColor(bright) {
  this.brightness = bright;
}

  show() {
    stroke(0);
    strokeWeight(1.52);
    fill(this.brightness, 50);
    ellipse(this.x, this.y, this.r * 2);
  }

 }
