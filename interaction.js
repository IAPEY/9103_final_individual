var isClicked = false;
let speed = [];
let t = 0;
let xspeed = [];
let tremblE = [];
let acceleration = 0.05;
let acc = [];
let isdrop = [];
let prevMouseX;
let prevMouseY;
let mouseXSpeed;
let mouseYSpeed;//mousespeed parameters

function mouseClicked() {//set all status to default while clicking
  for (i = 0; i < circles.length; i++) {

    speed[i] = 0;
    isdrop[i] = 0;
    circles[i].y = record[i].y
  }
  acc = 0;//set all parameters to default
}

HalfCircle.prototype.movement = function () {// class apple

  for (let i = 0; i < circles.length; i++) {
    if (mouseXSpeed / 100 * circles[i].diam * circles[i].diam >= 4900 || mouseXSpeed / 100 * circles[i].diam * circles[i].diam <= -4900) {//a calculation with mousespeed and the scale of apples. while shaking the tree,larger apples falls on the ground more easily.
      isdrop[i] = 1;//record if the apple droped
    }
    if (this.y < windowHeight && isdrop[i]) {
      speed[i] += acceleration;//simulate gravity while falling
      circles[i].y += speed[i] / 100;
      circles[i].y = min(circles[i].y, windowHeight / 4 * 3);//restrict apples will not goes outside the window
      //console.log(speed[1]);//debug
    }
  }
}

HalfCircle.prototype.tremble = function () {//the apple trembles natutrally 
  //t += 0.01; //debug
  for (let i = 0; i < circles.length; i++) {
    let xcoo = circles[i].x + noise(t) * random(-0.5, 0.5);//calculate how to tremble with random seeds.
    circles[i].x = constrain(xcoo, record[i].x - 5, record[i].x + 5);
    tremblE[i] = circles[i].x;//record tremble status

    if (circles[i].y >= windowHeight * 3 / 4) {
      circles[i].x = record[i].x;
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

HalfCircle.prototype.waving = function () {
  this.tremble();
  for (let i = 0; i < circles.length; i++) {
    if (mouseXSpeed == 0) {
      if (!(circles[i].y == windowHeight * 3 / 4)) {
        circles[i].x = tremblE[i];//if mouse speed =0 and apples are on the tree
      }
    }
    else if (circles[i].y == windowHeight * 3 / 4) {
      circles[i].x = record[i].x;//if apples fell on the ground stop trembling
    }
    else {
      circles[i].x = tremblE[i] + mouseXSpeed / 10 * circles[i].diam / 80;//while shaking the tree with cursor,apples move with cursor
    }
  }
}

// HalfCircle.prototype.drop = function(){
//    if(!(circles[i].y==windowHeight*3/4)){
//   if(mouseXSpeed>300||mouseXSpeed<-300){
//     isWaved=0;
//    }
// }
// }
function getMouseSpeed() {
  mouseXSpeed = mouseX - prevMouseX;
  mouseYSpeed = mouseY - prevMouseY;//get mouse speed


  prevMouseX = mouseX;
  prevMouseY = mouseY;

  //shouw mouse speed
  textSize(20);
  text("Xspeed: " + mouseXSpeed, 10, 30);
  text("Yspeed: " + mouseYSpeed, 10, 60);
  // text(mouseXSpeed / 10 * circles[1].diam / 10, 10, 90);//show strength debug

  // show the position of cursor
  ellipse(mouseX, mouseY, 20, 20);

}