var h,m,s;
var hhand,mhand,shand

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
 translate(400,200)

  h = hour();
  m = minute();
  s = second();

  hhand = map(h,12,0,12,0,360)
  mhand = map(m,0,60,0,360)
  shand = map(s,0,60,0,360)

  push();
  rotate(shand);
  stroke("red");
  strokeWeight(5)
  line(0,0,100,0)
  pop();

  push();
  rotate(mhand)
  stroke("blue")
  strokeWeight(8)
  line(0,0,100,0)
  pop();

  push();
  rotate(hhand)
  stroke("green")
  strokeWeight(10)
  line(0,0,100,0)
  pop();

  stroke(255,20,150);
  point(0,0)
  strokeWeight(5)
  noFill();
  stroke("green");
  arc(0,0,300,300,0,hhand)
  stroke("blue");
  arc(0,0,290,290,0,mhand)
  stroke("red");
  arc(0,0,280,280,0,shand)

  drawSprites();
}