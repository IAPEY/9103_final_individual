 
 var isClicked = false;

 let speed =[];
 let t = 0;

 let xspeed = [];
 let tremblE = [];
 let acceleration = 0.01;
 let acc = [];
 let isdrop=[];
 let prevMouseX;
 let prevMouseY;
 let mouseXSpeed;
 let mouseYSpeed;//mousespeed paras
  
function mouseClicked() {
    // isClicked = !isClicked;
    // if (isClicked) {
    
       for (i = 0; i < circles.length; i++) {
        
         speed[i] = 0;
         isdrop[i]=0;
         circles[i].y=record[i].y
       }
      acc = 0;//set all parameters to default
    // }
    
  }
  
  HalfCircle.prototype.movement = function(){
    // this.drop();
    
    for(let i=0;i<circles.length;i++){
      if(mouseXSpeed/100*circles[i].diam*circles[i].diam>=4900||mouseXSpeed/100*circles[i].diam*circles[i].diam<=-4900){
        isdrop[i]=1;
      }
      if(this.y<windowHeight&&isdrop[i]){
        //  acc[i] += acceleration;
        //  speed[i] += acc[i]; //simulate gravity
        speed[i]+=acceleration;
        circles[i].y += speed[i];
        circles[i].y = min(circles[i].y, windowHeight/4*3);
        console.log(speed[1]);
    }
    } 
    // if(isClicked){
    //   for(let i = 0; i < circles.length; i++){
    //   circles[i].y=record[i].y
    //   }
    // }
   
   //this.xPos += xspeed[i];//apples stop trembling after falling on the ground;
    
  }

  HalfCircle.prototype.tremble = function(){
    t+=0.01;
    for(let i = 0; i < circles.length; i++){
      let xcoo= circles[i].x+noise(t)*random(-0.5,0.5);
      circles[i].x=constrain(xcoo,record[i].x-5,record[i].x+5);
      tremblE[i]=circles[i].x;//record tremble status

      if(circles[i].y>=windowHeight*3/4){
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

  HalfCircle.prototype.waving = function(){
    this.tremble();
    for(let i = 0; i < circles.length; i++){
      if(mouseXSpeed==0){
        if(!(circles[i].y==windowHeight*3/4)){
          circles[i].x=tremblE[i];
        }
        
      
      }
      else if(circles[i].y==windowHeight*3/4){
        circles[i].x=record[i].x;
      }
      else{
      
        circles[i].x=tremblE[i]+mouseXSpeed/10*circles[i].diam/80;
    
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
  function getMouseSpeed(){
    mouseXSpeed = mouseX - prevMouseX;
    mouseYSpeed = mouseY - prevMouseY;
  
    // 更新前一个鼠标位置
    prevMouseX = mouseX;
    prevMouseY = mouseY;
  
  // 显示速度
  textSize(20);
  text("Xspeed: " + mouseXSpeed, 10, 30);
  text("Yspeed: " + mouseYSpeed, 10, 60);
  text(mouseXSpeed/10*circles[1].diam/10, 10, 90);
 
  // 在鼠标位置绘制一个点
  ellipse(mouseX, mouseY, 20, 20);

  }