
function draw() {
  push();
  colorMode(HSL)
  
  background(20,15,30);
  drawBackground();
  pop();
  // black stroke
  drawWind();
  push();
  getMouseSpeed();
  pop();
  scale(scaleNum);
  translate(1/3*windowWidth,1/4*windowHeight);
  noFill();
  stroke(0);
  for (let i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, circles[i].diam + 2);
  }
  push();
  rectMode(CORNERS);
  // bottom
  fill("#d7b764");
  rect(104, 482, 333, 539);
  stroke("#d7b764");
  fill("#ea3e3e");
  rect(148, 482, 186, 539);
  fill("#519365");
  rect(186, 482, 230, 539);
  rect(266, 482, 308, 539);
  noStroke();
  fill("#519365");
  arc(127, 539, 40, 40, PI, 2 * PI);
  fill("#d7b764");
  arc(168, 539, 40, 30, PI, 2 * PI);
  fill("#ea3e3e");
  stroke("#d7b764");
  arc(208, 539, 40, 50, PI, 2 * PI);
  noStroke();
  arc(248, 539, 38, 40, PI, 2 * PI);
  fill("#d7b764");
  arc(286, 539, 38, 20, PI, 2 * PI);
  fill("#519365");
  arc(320, 539, 25, 25, PI, 2 * PI);

  stroke(0);
  noFill();
  rect(104, 482, 333, 539);

  noStroke();
  
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
    push();
    scale(0.4);
    translate(600,660);
    stroke(0,60);
    ellipse(record[i].x, record[i].y, record[i].diam + 2);
    record[i].show();
    pop();

    push();
    scale(0.6);
    translate(-300,320);
    stroke(0,60);
    ellipse(record[i].x, record[i].y, record[i].diam + 2);
    record[i].show();
    pop();

    push();
    scale(1.2);
    translate(-500,0);
    stroke(0,80);
    ellipse(record[i].x, record[i].y, record[i].diam + 2);
    record[i].show();
    pop();

    push();
    scale(1.7);
    translate(300,-60);
    stroke(0,90);
    ellipse(record[i].x, record[i].y, record[i].diam + 2);
    record[i].show();
    pop();

    push();
    scale(1.0);
    translate(400,0);
    stroke(0,60);
    ellipse(record[i].x, record[i].y, record[i].diam + 2);
    record[i].show();
    pop();
  }
  
  pop();
  // line
  stroke("#d7b764");
  line(145, 482, 306, 482);
  line(230, 480, 238, 198);
  line(136, 268, 323, 268);
  line(143, 142, 136, 268);
  line(143, 142, 100, 144);
  line(96, 26, 100, 144);
  line(330, 120, 323, 268);
  line(330, 120, 406, 148);
  line(410, 120, 406, 148);
  line(183, 198, 277, 198);
  line(274, 173, 277, 198);
  line(204, 173, 203, 198);



}
