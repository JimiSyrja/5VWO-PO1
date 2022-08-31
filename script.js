class ball{
  constructor(x, y, w, h, vx, vy, c){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = c;
  }

  draw(){
    fill(this.color)
    ellipse(this.x,this.y,this.width,this.height);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

     if(this.x < 0 || this.x >= 400){
      this.vx = this.vx * -1;
    }

    if(this.y < 0 || this.y >= 400){
      this.vy = this.vy * -1;
    }
  }
}

var ball1, ball2, ball3, ball4, ball5;

function setup() {
  createCanvas(400, 400);
  background(133, 193, 233)

  ball1 = new ball(70,30,50,50,5,5,"red");
  ball2 = new ball(375,20,50,50,6,6,"green")
  ball3 = new ball(100,100,50,50,2,4,"yellow")
  ball4 = new ball(254,326,50,50,4,2,"orange")
}



function draw() {
	background(133,193,233);  
  
  ball1.draw();
  ball2.draw();
  ball3.draw();
  ball4.draw();
}