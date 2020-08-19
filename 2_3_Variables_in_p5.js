// Organizing variables
// JavaScript Objects

// https://thecodingtrain.com/beginners/beginners/p5js/2.3-objects.html
// https://youtu.be/-e5h4IGKZRY
// https://editor.p5js.org/codingtrain/sketches/6J5VPMbW

//defining the circles
var circle1 = {
  x : 300,
  y : 300,
  diameter: 50,
};

var circle2 = {
  x : 300,
  y : 300,
  diameter: 50,
};

var circle3 = {
  x : 300,
  y : 300,
  diameter: 50,
};

var circle4 = {
  x : 300,
  y : 300,
  diameter: 50,
};

//defining the color
var c = {
  r : 0,
  g : 255,
  b : 0,
  alpha : 0.9,
};


function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent('myContainer');
}


function draw() {
  //background
  background(246,246,246);
  //ellipse 1
  fill(c.r, c.g, c.b);
  ellipseMode(CENTER);
  noStroke();
  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
  //animation
  circle1.y = circle1.y + 1;

  //ellipse 2
  fill(color.r, color.g, color.b);
  ellipseMode(CENTER);
  noStroke();
  ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
  //animation
  circle2.x = circle2.x + 2;

  //ellipse 3
  fill(color.r, color.g, color.b);
  ellipseMode(CENTER);
  noStroke();
  ellipse(circle3.x, circle3.y, circle3.diameter, circle3.diameter);
  //animation
  circle3.x = circle3.x - 3;

  //ellipse 4
  fill(color.r, color.g, color.b);
  ellipseMode(CENTER);
  noStroke();
  ellipse(circle4.x, circle4.y, circle4.diameter, circle4.diameter);
  //animation
  circle4.y = circle4.y - 4;


}
