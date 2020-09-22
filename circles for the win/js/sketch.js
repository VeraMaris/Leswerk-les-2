function setup() {
  // put setup code here
  createCanvas(400,400);
  background(240);

  //line(0, 0, 400, 400)

  

  noStroke()
  fill(255, 200, 0)
  ellipse(150, 150, 120, 120)

  noStroke()
  fill(255)
  ellipse(100, 100, 100, 100)

  stroke(50, 255, 100)
  strokeWeight(5)
  point(100, 100)

  noStroke()
  fill(190)
  ellipse(300, 300, 50, 50)

  stroke(255, 0, 0)
  strokeWeight(5)
  point(300, 300)




}

function draw() {
  // put drawing code here

  //draw is 60 keer per seconde berekend het programma alles opnieuw
  //background(mouseY,0,0);


//random(255) --> 0 tot 255
//random (100,110)--> 100,110. pakt willekurig nummer tussen die bepaalde getallen
  
}