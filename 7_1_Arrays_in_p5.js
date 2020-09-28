// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=VIQoUghHSxU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFARqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=25


let nums = [100, 25, 100, 72];
let num = 23;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(246);
  ellipse(100, 200, num, num)
  ellipse(200, 200, nums[2], nums[2])
}
