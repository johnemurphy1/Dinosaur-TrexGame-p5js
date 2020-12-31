class Cactus{
   
   constructor(){
     this.r = 90;
     this.x = width;
     this.y = height - this.r;
   }

move(){
 this.x -= 2; 
}

show(){  
  image(cImg, this.x, this.y, this.r, this.r);
  //ellipseMode(CORNER);
    //ellipse(this.x,this.y,this.r,this.r);
}
   
}   
