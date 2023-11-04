
var isClicked = false;
let speed = 0;
let t = 0;
let noiseX = 0;
let noiseY = 0;
let xspeed = [];
let acceleration = 0.1;
let acc = 0;


for (i = 0; i < circles.length; i++) {
  xspeed[i] = 0;
}//xspeed default


function mouseClicked() {
  isClicked = !isClicked;
  if (isClicked) {
    speed = 0;
    for (i = 0; i < circles.length; i++) {
      xspeed[i] = 0;
    }
    acc = 0;//set all parameters to default
  }
}

function drawBackground() {
    push();
    noStroke();
    noiseX += 1;
    noiseY += 1;
    for (var x = 0; x < windowWidth; x += windowWidth / 100) {
      for (var y = 0; y < windowHeight; y += windowWidth / 100) {
        var c = 255 * noise(0.01 * x + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY);
        fill(c);
        rect(x, y, windowWidth / 100, windowWidth / 100);
      }
    }//reference https://genekogan.com/code/p5js-perlin-noise/
    pop();//draw background with noise
  }
 
  HalfCircle.prototype.movement = function(){
    if(isClicked&&this.y<windowHeight){
        acc += acceleration;
    speed += acc; //simulate gravity

    this.y += speed;
    this.y = min(this.y, windowHeight/4*3);
    }
    
    if(!isClicked){
      for(let i = 0; i < circles.length; i++){
      circles[i].y=record[i].y
      }
    }
   
   //this.xPos += xspeed[i];//apples stop trembling after falling on the ground;
    
  }

  HalfCircle.prototype.tremble = function(){
    t+=0.01;
    for(let i = 0; i < circles.length; i++){
      let xcoo= circles[i].x+noise(t)*random(-0.5,0.5);
      circles[i].x=constrain(xcoo,record[i].x-5,record[i].x+5);
      
      if(circles[i].y==windowHeight*3/4){
        circles[i].x=record[i].x;
      }
      }
  //   for(let i = 0; i < circles.length; i++){
  //     if (this.y == windowHeight) {
       
  //       xspeed[i] = 0;
      
  //     } else {
       
  //       xspeed[i] += noise(frameCount) * random(-10, 10);
      
  //   }
  //   circles[i].x+=xspeed[i];
  // }
  }