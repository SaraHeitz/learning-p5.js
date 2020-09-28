// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=VIQoUghHSxU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFARqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=25


let words = ["Anna", "Beat", "Claudia", "Dora", "Emil", "Frieda", "Gunther"];
let index = 0;
let col = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0+col,0+col,0+col);
  if (index == 0) {
  background(0,255,0)
  }
  fill(255);
  textSize(100);
  text(words[index], 20, 250);
}

function mousePressed() {
  index = index + 1;
  col = col + 5
  if (index == words.length) {
    index = 0;
  }
  if (col == 65) {
    col = 30;
  }
}
