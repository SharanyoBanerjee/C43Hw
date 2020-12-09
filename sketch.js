var hr,min,sec;


function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background("black");  

  hr = hour();
  min = minute();
  sec = second();
 translate(200,200)
 rotate(-90);
 secAngle = map(sec,0,60,0,360)
 push()
 rotate(secAngle)
 stroke("red")
 strokeWeight(3)
 line(0,0,100,0);
 pop();
 noFill();
 strokeWeight(3);
 stroke("red")
 arc(0,0,250,250,0,secAngle);

 minAngle = map(min,0,60,0,360);
 push()
 rotate(minAngle)
 stroke("lightgreen")
 strokeWeight(3);
 line(0,0,70,0);
 pop();
 noFill();
 strokeWeight(3);
 stroke("lightgreen")
 arc(0,0,270,270,0,minAngle)

 hrAngle = map(hr%12,0,12,0,360);
 push()
 rotate(hrAngle)
 stroke("blue")
 strokeWeight(3);
 line(0,0,70,0);
 pop();
 noFill();
 strokeWeight(3);
 stroke("blue")
 arc(0,0,290,290,0,hrAngle)
}