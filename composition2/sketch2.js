function setup() {
 createCanvas(windowWidth, windowHeight);
frameRate(10);
}

var myPosition=0;

 function draw(){
     //background ("white");
     //var bgColor=random(200,255);
    //background(0,0,bgColor);
     
     var ellipseWidth=random(100);
     var ellipseHeight=random(100);
     var ellipseX= Math.random()*width;
     var ellipseY=Math.random()*height;
     
     ellipse(ellipseX,ellipseY, ellipseWidth,ellipseHeight);
   
     
    
     
     
/* var mousePercent = (mouseX/width) * 255;
  console.log(mousePercent);
 background("white");
  myPosition++;
 if(key == "H"){
  background("red");
    }else {
    background ("purple");
         }
         
    line(pmouseX,pmouseY,mouseX,mouseY);
    console.log(myPosition);
*/
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight);


}



