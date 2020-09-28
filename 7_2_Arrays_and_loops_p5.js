// Function inside Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://www.youtube.com/watch?v=RXWO3mFuW-I&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=28


let nums = [100, 25, 46, 72];


function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(246);
  for(var i = 0; i < 4; i++){
    fill(255);
    ellipse(i * 100 + 100 , 200, nums[i], nums[i])
  }
}
