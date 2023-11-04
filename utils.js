
// half filling circle
class HalfCircle {
    constructor(_x, _y, _diam, _sa, _ea, _fm) {
      this.x = _x;
      this.y = _y;
      this.diam = _diam;
      this.sa = _sa;
      this.ea = _ea;
      this.fm = _fm;
    }
    // resize(){
    //   if(this.x>=2/3*windowWidth){
    //     for(let i=0;i<circles.length;i++){
    //       circles[i].x=circles[i].x-1/3*windowWidth;
    //     }
    //    }
    //   if(this.y<3/4*windowHeight){
    //     for(let i=0;i<circles.length;i++){
    //       circles[i].y=circles[i].y-1/4*windowHeight;
    //     }
    //   }
    // }
    // show this circle
    show() {
      // stroke("#d7b764");
      //this.resize();
      this.movement();
      this.waving();
      //this.tremble();
      if (this.fm) {
        fill("#ea3e3e");
        arc(this.x, this.y, this.diam, this.diam, this.sa, this.ea, CHORD);
        fill("#519365");
        arc(this.x, this.y, this.diam, this.diam, this.ea, this.sa, CHORD);
      } else {
        fill("#519365");;
        arc(this.x, this.y, this.diam, this.diam, this.sa, this.ea, CHORD);
        fill("#ea3e3e");
        arc(this.x, this.y, this.diam, this.diam, this.ea, this.sa, CHORD);
      }
    }
   
  }