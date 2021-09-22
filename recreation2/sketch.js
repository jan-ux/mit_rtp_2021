//recreation of a scene from john whitneys
// 1968 film - experiments in motion graphics.
// attempted by january-jones carter for mit rtp 2021! 
//initiailizing lines and tracker for time
let NUM_LINES = 16;
let t = 0;

function setup() {
  createCanvas(500, 500);
}

//functions for sine and cos waves
//to animate out the lines
function xcoord1(t) {
  return sin(t / 20) * 100 + sin(t / 5) * 20;
}

function ycoord1(t) {
  return cos(t / 30) * 100;
}
 
function xcoord2(t) {
  return sin(t / 20) * 200 + sin(t) * 2;
}

function ycoord2(t) {
  return cos(t / 30) * 200 + cos(t / 1) * 20;
}

function draw() {
  background (0);
  stroke(255);
  strokeWeight(5);
  
  //moving the lines
  translate(width/2, height/2);
  

  //for the number of lines,
  for (let i = 0; i < NUM_LINES; i++)
   {
    //keep drawing lines at these coords
    line(xcoord1(t+i), ycoord1(t+i), xcoord2(t+i), ycoord2(t+i));
   }
  //increment t for moving new drawn lines
  t++;
}


