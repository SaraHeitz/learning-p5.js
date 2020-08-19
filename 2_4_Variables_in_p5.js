
// The map() Function
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.4-map.html
// https://youtu.be/nicMAoW6u1g
// https://editor.p5js.org/codingtrain/sketches/yJqbGf71

var r = 0;
var g = 0;
var b = 0;

function setup() {
createCanvas(600, 400);
}

function draw() {
// background
g = map(mouseX, 0, 600, 0, 255);
b = map(mouseX, 0, 600, 255, 0);
r = map(mouseY, 0, 600, 0, 255);
background(r, g, b);

// ellipse
fill(r, b, g);
noStroke()
ellipse(mouseX, mouseY, 50, 50);
}
