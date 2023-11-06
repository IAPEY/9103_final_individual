function windowResized() {
    //translate(width/2,height/2);
    resizeCanvas(windowWidth, windowHeight);
    if(windowWidth<=800){
    scaleNum=windowWidth/800;
   }else{
    scaleNum=1;// apple tree scales itself while the screen is smaller than current tree.
   }
    
}