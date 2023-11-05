function windowResized() {
    //translate(width/2,height/2);
    resizeCanvas(windowWidth, windowHeight);
    if(windowWidth<=800){
    scaleNum=windowWidth/800+0.6;
   }else{
    scaleNum=1;
   }
    
}