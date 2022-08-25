function setup() {
  createCanvas(400, 400);
  background(133, 193, 233)
}

let y = 0
let x = 0
let v = 5
let z = 3
function draw() {
  
  background(133, 193, 233)
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 100, 100)
    fill(230, 126, 34);
  } else {
  fill(39, 174, 96)
  rect(150, 150, 80, 80);
  }
  

  ellipse(x,y,80,80)
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
}
