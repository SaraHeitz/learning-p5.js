// Removing Objects from Arrays
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.5-removing-objects-from-array.html
// https://youtu.be/tA_ZgruFF9k

// Main Sketch: https://editor.p5js.org/codingtrain/sketches/smC4Jedi
// Trail Sketch: https://editor.p5js.org/codingtrain/sketches/9Ve9S6Mx

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  }
//   for (let i = 0; i < 10; i++) {
//     let x = random(580);
//     let y = random(380);
//     let r = random(20, 60);
//     let b = new Bubble(x, y, r);
//     bubbles.push(b);
//   }
// }

// function mousePressed() {
//   for (let i = bubbles.length - 1; i >= 0; i--) {
//     if (bubbles[i].contains(mouseX, mouseY)) {
//       bubbles.splice(i, 1);
//     }
//   }
// }

function mouseDragged() {
    let x = mouseX;
    let y = mouseY;
    let r = random(5,15);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
  background(30);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(0,255,0);
    } else {
      bubbles[i].changeColor(30,30,30);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
  if(bubbles.length > 50) {
    bubbles.splice(0,1);
  }

}



////////////////////////////////////////////////
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(red,g,b) {
    this.red = red;
    this.g = g;
    this.b = b;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    stroke(0,255,0);
    strokeWeight(1);
    fill(this.red, this.g, this.b);
    ellipse(this.x, this.y, this.r * 2);
  }
}
