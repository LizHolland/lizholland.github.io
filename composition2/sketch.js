function setup() {
  createCanvas(windowWidth, windowHeight);
frameRate(60);
}

var myPosition=0;

 function draw(){
     
 var mousePercent = (mouseX/width) * 255;
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

}
function windowResized(){
resizeCanvas(windowWidth,windowHeight);


}

