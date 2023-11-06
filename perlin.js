var inc = 1;
var scl = 20;
var cols, rows;
var zoff = 0;
var particles = [];
var flowfield;
let noiseX = 0;
let noiseY = 0;

function drawBackground() {//draw animated background with 2 dimentional perlin noise
  push();
  noStroke();
  noiseX += 1;
  noiseY += 1;
  for (var x = 0; x < windowWidth; x += windowWidth / 150) {
    for (var y = 0; y < 5 / 7 * windowHeight; y += windowWidth / 150) {
      var con = 640 * noise((0.01 * x + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY) + noise(0.01 * (x + 1) + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY) + noise(0.01 * (x + 2) + 0.01 * noiseX, 0.01 * y + 0.01 * noiseY) + noise(0.01 * x + 0.01 * noiseX, 0.01 * (y + 2) + 0.01 * noiseY) + noise(0.01 * x + 0.01 * noiseX, 0.01 * (y + 1) + 0.01 * noiseY) + noise(0.01 * (x + 1) + 0.01 * noiseX, 0.01 * (y + 1) + 0.01 * noiseY) + noise(0.01 * (x + 2) + 0.01 * noiseX, 0.01 * (y + 1) + 0.01 * noiseY) + noise(0.01 * (x + 1) + 0.01 * noiseX, 0.01 * (y + 2) + 0.01 * noiseY) + noise(0.01 * (x + 2) + 0.01 * noiseX, 0.01 * (y + 2) + 0.01 * noiseY)) / 9;
      colorMode(HSL);//average convolutional calculation with a 3*3 filter
      fill(215, 15, con);
      rect(x, y, windowWidth / 150, windowWidth / 150);
    }

  }
  pop();//draw background with perlin noise
}



function drawWind() {

  // record cursor position
  particles.push(createVector(mouseX, mouseY));

  // restrict the number of birds
  if (particles.length > 50) {
    particles.splice(0, 30);
  }

  if (mouseXSpeed == 0 && mouseYSpeed == 0) {
    particles.splice(0, 100);
  }// if cursor not move,eliminate birds

  for (let y = 0; y < particles.length; y++) {
    for (let x = 0; x < particles.length; x++) { 
      if (mouseXSpeed < 0) {
        particles[x].add(-noise(x, y), random(-5, 5));
      }
      if (mouseXSpeed > 0) {
        particles[x].add(noise(x, y), random(-5, 5));
      }//let the birds follow cursor movement
    }
  }
 
  for (let i = 0; i < particles.length; i++) {
    fill(255, 0, 0); // set the color of birds

    ellipse(particles[i].x, particles[i].y, 10, 10);//draw the body of birds with ellipse in the position of cursor
    let speedx1 = constrain(mouseXSpeed / 5, -30, 30);
    let speedy1 = constrain(mouseYSpeed / 5, -30, 30);//represent the length of bird's tail

    line(particles[i].x, particles[i].y, particles[i].x - speedx1, particles[i].y - speedy1);//draw bird's tail with line ,and the length of line depends on cursor speed.
  }
}
