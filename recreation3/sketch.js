// let myFont;
// function preload() {
//   myFont = loadFont("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap");
// }
// couldnt get text to work :/

function setup() {
 // loadFont("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap", writeText)
  createCanvas(800, 800, WEBGL);
  // textFont(myFont);
  // textSize(45);
  // textAlign(LEFT);
}

function writeText(font) {
  fill('black');
  textFont(font, 45);
  // textSize(45);
  // textAlign(LEFT);
  text('Coffee', 0, -30);
  text('Hour', 0, -60);
  text('Ashdown', 0, -90);
  text('Dining Room', 0, -120);
  text('Mon-Fri', 0, -150);
  text('10-11 am', 0, -180);

}

function pillDraw() {
  //fill(237, 34, 93);
  fill('white');
  noStroke();
  //start center
  //arc, a rectangle, and then another arc
  //dont even need to use vectors theoretically

  push();
  arc(0, 100, 100, 100, PI, TWO_PI, CHORD);
  rect(-50, 100, 100, 100);
  rotate(PI);
  translate(0, -400);
  arc(0, 200, 100, 100, PI, TWO_PI, CHORD);
  pop();

}

function eyeDraw() {
  fill('black');
  noStroke();

  //mess with these some more for the eye shape
  push();
  //just 2 arcs.
  arc(0, 150, 75, 75, PI, TWO_PI);
  rotate(PI);
  translate(100, 150);
  arc(-100, -300, 75, 75, PI, TWO_PI);
  pop();

}


function draw() {
  background('#da1215');
  //change the fill ???

  //writeText();

  
  push();
  translate(-120, -100);
  pillDraw();
  eyeDraw();
  pop();

  push();
  translate(15, -180);
  pillDraw();
  eyeDraw();
  pop();

  push();
  translate(-230, -180);
  pillDraw();
  eyeDraw();
  pop();

  push();
  translate(-340, -100);
  pillDraw();
  eyeDraw();
  pop();

  push();
  translate(-230, 40);
  pillDraw();
  eyeDraw();
  pop();

  push();
  translate(15, 70);
  scale(1.5);
  pillDraw();
  eyeDraw();
  pop();

  push();
  translate(175, -40);
  scale(2);
  pillDraw();
  eyeDraw();
  pop();

  push();
  translate(375, -165);
  scale(2.5);
  pillDraw();
  eyeDraw();
  pop();

  //noLoop();
}