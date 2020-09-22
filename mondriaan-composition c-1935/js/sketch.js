function setup() {
  // put setup code here
  createCanvas(500,500);
  background(240);

  noStroke()
  fill(255, 0, 0)
  rect(0, 0, 230, 200)

  fill(255, 255, 0)
  rect(0,310,80,190)

  fill(0, 0, 255)
  rect(230,310,160,160)

  stroke(0)
  strokeWeight(8)
  line(230, 0, 230, 500)

  line(0, 200, 500, 200)
  
  line(0, 310, 500, 310)

  line(80, 310, 80, 500)

  line(390, 310, 390, 500)

  line(230, 470, 390, 470)






}

function draw() {
  // put drawing code here

  //draw is 60 keer per seconde berekend het programma alles opnieuw
  //background(mouseY,0,0);


//random(255) --> 0 tot 255
//random (100,110)--> 100,110. pakt willekurig nummer tussen die bepaalde getallen
  
}