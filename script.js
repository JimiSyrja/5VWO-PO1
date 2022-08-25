function setup() {
  createCanvas(400, 400);
  background(133, 193, 233)
}


let a = 1 
let b = 7
let c = 400
let d = 400
let y = 0
let x = 0
let v = 5
let z = 3

function draw() {
  
  background(133, 193, 233)
  if(mouseIsPressed){
    fill(230, 126, 34);
    ellipse(mouseX, mouseY, 100, 100)  
  } else {
  fill(255, 255, 255)
  rect(150, 150, 80, 80);
  }
  
  fill(0, 0, 255)
  ellipse(x,y,100,100)
  x = x+v;
  y = y+z;

  if (x>400){
     v = -5
  }
  
  if(x<0){
    v = 5
  }

  if(y>400){
    z = -3
  }

  if(y<0){
    z = 3
  }

  fill(255, 0, 0)
  ellipse(c,d,75,75)
  c = c + a;
  d = d + b;

  if (c>400){
     a = -1
  }
  
  if(c<0){
    a = 1
  }

  if(d>400){
    b = -2
  }

  if(d<0){
    b = 2
  }
}
