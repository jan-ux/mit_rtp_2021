


function setup() {
  createCanvas(800, 800);
}

function draw() {
  //bg color
  background(220);
  rectMode(CENTER);



  //rand for square dropping
  randomSeed(mouseX);
  //stroke(51);

  //loops for rows and cols of squares
  for (let x = 0; x < 18; x++)
  {
    for (let y = 0; y < 18; y++)
    {
      //rectangle mapping
      let a = map(x, 0, 17, 100, 700);
      let b = map(y, 0, 17, 100, 700);

      //draw rectangles based on these maps
      rect(a,b,33,33);


      //drawing inner rectangles. here its 0-5
      for (let c = 0; c < 5; c++)
      {

      let r = random(50, 220);
      let g = random(180, 220);
      let d = random(190, 255);
      
        let width = float(map(c, 0, 4, 0, 25));
        noFill();
        strokeWeight(1);
        //rectMode(CENTER);

        //dropping of some inners randomly
        if (random(0,1) < 0.95)
        {
        stroke(r, g, d);
        rect(a, b, width, width);
        

        }
      }


    }
  }
}
