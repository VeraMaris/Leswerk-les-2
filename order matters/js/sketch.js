function setup() {
  // put setup code here
  createCanvas(750,750);
  background(240);


  //dit is de linker vorm

  //dit is het grijze achtervlak
  noStroke()
  fill(200)
  rect(25, 100, 200, 200)

  //dit is de halve cirkel
  fill(240, 104, 41)
  ellipse(225, 200, 200, 200)


  //dit is het grijze vlak voor de cirkel
  fill(200)
  rect(125, 200, 	100, 100)

  //dit is het witte vlak voor de cirkel
  fill(255)
  rect(225, 200, 	100, 100)

  //dit is de punt
  stroke(0)
  strokeWeight(8)
  point(225, 200)


  // dit is de rechter vorm


  //dit is de halve cirkel
  noStroke()
  fill(240, 104, 41)
  ellipse(575, 200, 200, 200)

  //dit is het grijze achtervlak
  noStroke()
  fill(200)
  rect(375, 100, 200, 200)


  //dit is de punt
  stroke(0)
  strokeWeight(8)
  point(575, 200)

  




}

function draw() {
  // put drawing code here

  //draw is 60 keer per seconde berekend het programma alles opnieuw
  //background(mouseY,0,0);


//random(255) --> 0 tot 255
//random (100,110)--> 100,110. pakt willekurig nummer tussen die bepaalde getallen
  
}