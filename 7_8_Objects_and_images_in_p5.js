// Object Communication Part 1
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.6-object-communication-1.html
// https://youtu.be/W1-ej3Wu5zg
// https://editor.p5js.org/codingtrain/sketches/OG-_2K16

let pkmn = [];
let bubbles;

function preload(){
  flower = loadImage ("images/flower.png");
  // for (let i = 0; i<3; i++) {
  // tens [i] = loadImage ("images/pkmn"+ i + "".png")
  }
  // pkmn[0]= loadImage ("images/pkmn1.png");
  // pkmn[1]= loadImage ("images/pkmn2.png");
  // pkmn[2]= loadImage ("images/pkmn3.png");


function setup() {
  createCanvas(600, 400);
    for (let i = 0; i <200; i++){
    let x = random(15,570);
    let y = random(15,370);
    let r = random(10,30);
    let pkmn = random(pkmn);
    bubbles[i] = new Bubble(x, y, r, pkmn);
  }
}

function draw() {
  background(246);
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
  }

}



////////////////////////////////////////////////
class Bubble {

  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.pkmn = img;
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


  show() {
    image(flower, this.x, this.y, this.r, this.r);
    // stroke(0);
    // strokeWeight(1.52);
    // fill(this.brightness, 50);
    // ellipse(this.x, this.y, this.r * 2);
  }

 }
