var inc=1;
var scl=20;
var cols,rows;
var zoff =0;
var particles=[];
var flowfield;

let noiseX = 0;
let noiseY = 0;

function drawBackground() {
    push();
    noStroke();
    noiseX += 1;
    noiseY += 1;
    for (var x = 0; x < windowWidth; x += windowWidth / 100) {
      for (var y = 0; y < windowHeight; y += windowWidth / 100) {
       // var c = 140 * noise(0.01 * x + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY);//convolutional cal
        var con=340*noise((0.01 * x + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY)+noise(0.01 * (x+1) + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY)+noise(0.01 * (x+2) + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY)+noise(0.01 * x + 0.01 * noiseX, 0.01 * (y+2) + 0.01 * noiseY)+noise(0.01 * x + 0.01 * noiseX, 0.01 * (y+1) + 0.01 * noiseY)+noise(0.01 * (x+1) + 0.01 * noiseX, 0.01 * (y+1) + 0.01 * noiseY)+noise(0.01 * (x+2) + 0.01 * noiseX, 0.01 * (y+1) + 0.01 * noiseY)+noise(0.01 * (x+1) + 0.01 * noiseX, 0.01 * (y+2) + 0.01 * noiseY)+noise(0.01 * (x+2) + 0.01 * noiseX, 0.01 * (y+2) + 0.01 * noiseY))/9;
        colorMode(HSL);
        fill(215,35,con);
        rect(x, y, windowWidth / 100, windowWidth / 100);
      }
    }
    pop();//draw background with noise
  }


 



function drawWind(){

  // 将当前鼠标位置添加到粒子数组
  particles.push(createVector(mouseX, mouseY));

  // 限制数组的长度，以保持拖尾效果
  if (particles.length > 100) {
    particles.splice(0, 30);
  }

  // 绘制粒子轨迹
  for (let i = 0; i < particles.length; i++) {
    let alpha = map(i, 0, particles.length, 255, 0); // 透明度随时间减小
    fill(255, 0, 0); // 设置粒子颜色
    noStroke();
    ellipse(particles[i].x, particles[i].y, 10, 10);
  }
}