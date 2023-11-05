var inc=1;
var scl=20;
var cols,rows;
var zoff =0;
var particles=[];
var particleSave=[];
var flowfield;

let noiseX = 0;
let noiseY = 0;

function drawBackground() {
    push();
    noStroke();
    noiseX += 1;
    noiseY += 1;
    for (var x = 0; x < windowWidth; x += windowWidth / 150) {
      for (var y = 0; y < 5/7*windowHeight; y += windowWidth / 150) {
       // var c = 140 * noise(0.01 * x + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY);//convolutional cal
        var con=640*noise((0.01 * x + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY)+noise(0.01 * (x+1) + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY)+noise(0.01 * (x+2) + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY)+noise(0.01 * x + 0.01 * noiseX, 0.01 * (y+2) + 0.01 * noiseY)+noise(0.01 * x + 0.01 * noiseX, 0.01 * (y+1) + 0.01 * noiseY)+noise(0.01 * (x+1) + 0.01 * noiseX, 0.01 * (y+1) + 0.01 * noiseY)+noise(0.01 * (x+2) + 0.01 * noiseX, 0.01 * (y+1) + 0.01 * noiseY)+noise(0.01 * (x+1) + 0.01 * noiseX, 0.01 * (y+2) + 0.01 * noiseY)+noise(0.01 * (x+2) + 0.01 * noiseX, 0.01 * (y+2) + 0.01 * noiseY))/9;
        colorMode(HSL);
        //stroke(215,15,con,80);
        fill(215,15,con);
        rect(x, y, windowWidth / 150, windowWidth / 150);
      }
      
    }
    pop();//draw background with noise
  }


 



function drawWind(){

  // 将当前鼠标位置添加到粒子数组
  particles.push(createVector(mouseX, mouseY));
 
  // 限制数组的长度，以保持拖尾效果
  if (particles.length > 50) {
    particles.splice(0, 30);
  }
  if(mouseXSpeed==0&&mouseYSpeed==0){
    particles.splice(0, 100);
  }

  for(let y=0;y<particles.length;y++){
    let yoff=0;
    for(let x=0;x<particles.length;x++){
      let xoff=0
      if(mouseXSpeed<0){
        particles[x].add(-noise(x,y),random(-5,5));
      }
     if(mouseXSpeed>0){
       particles[x].add(noise(x,y),random(-5,5));
     }
     // particles[x].add(random(-5,5),random(-5,5));
    }
  }
  // 绘制粒子轨迹
  for (let i = 0; i < particles.length; i++) {
    let alpha = map(i, 0, particles.length, 255, 0); // 透明度随时间减小
    fill(255, 0, 0); // 设置粒子颜色
    
    ellipse(particles[i].x, particles[i].y, 10, 10);
    let speedx1=constrain(mouseXSpeed/5,-30,30);
    let speedy1=constrain(mouseYSpeed/5,-30,30);
    
    line(particles[i].x,particles[i].y,particles[i].x-speedx1,particles[i].y-speedy1);
  }
}
