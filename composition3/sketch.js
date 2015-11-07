function setup() {
  
  
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  
    
   
  noCursor()
  

  if(key == "G"){
    background("#FF1493");
  }else {
  background ("#E9967A");
         }
  
    fill("#00BFFF");
    strokeWeight(10);
    strokeWeight(5);
    stroke("#F08080");
    ellipse(45, 536, 826, 226);
    
    
    var y, b, p;
  r = random(255);
  g = random(255);
  b = random(255);
  
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  
  //push()
    triangle(120,230,445,324,212,389);
    fill("#6495ED")
    quad(538, 31, 386, 320, 369, 363, 930, 74);
    fill("#F08080")
    triangle(120,230,445,324,212,389);
    noStroke();
    
  
    triangle(pmouseX,pmouseY,130,35,324,212,389);
    
    triangle(330,130,35,324,212,389);

   if (mouseIsPressed)
  
    ellipse(566, 246, 155, 575);
  
  else
    rect(30, 20, 95, 55);
    
   blendMode(LIGHTEST);
   
   var noiseScale=0.02;


  
  for (var x=0; x < height; x++) {
    var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(x, mouseY+noiseVal*23, x, width);
  
}
  
    
   
  p1 = {x: 457, y: 309}, p2 = {x: 34, y: 23}
p3 = {x: 233, y: 330}, p4 = {x: 40, y: 500}
fill("#E9967A");
stroke("#48D1CC");
curve(pmouseX,pmouseY, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
stroke("#FAFAD2");
curve(pmouseX,pmouseY, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
stroke("#FFB6C1");
curve(pmouseX,pmouseY, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
push();
fill("#7FFF00");
strokeWeight(1);
translate(50, 0);
quad(534, 31, 386, 320, 369, 363, 838, 574);
fill("#6495ED");
//pop();
quad(538, 31, 386, 320, 369, 363, 930, 74);
fill("#00BFFF");


var xoff = 0.0;

  xoff = xoff + .01;
  var n = noise(xoff) * width;
  line(n, 0, n, height);
  
  //pop()
  
  

p7 = {x: 869, y: 434}, p8 = {x: 874, y: 263}
p5 = {x: 1084, y: 625}, p6 = {x: 817, y: 648}
fill("#00FFFF");
stroke("#0000FF");
curve(p5.x, p5.x);
curve(pmouseX,pmouseY, p5.x, p5.y, p6.x, p6.y, p7.x, p7.y);
stroke("#FAFAD2");
curve(pmouseX,pmouseY, p6.x, p6.y, p7.x, p7.y, p8.x, p8.y)
stroke("#5F9EA0")
curve(pmouseX,pmouseY, p7.x, p7.y, p8.x, p8.y, p8.x, p8.y)

//var y, b, p;
 // y = random(255);
  //b = random(255);
  //p = random(255);
  
  strokeWeight(2);
  stroke(y, b, p);
  fill(y, b, p, 127);
   
    ellipse(mouseX,mouseY,45,256); 
    
    

p11 = {x: 1069, y: 534}, p10 = {x: 1074, y: 283}
p9 = {x: 1284, y: 645}, p12 = {x: 1017, y: 668}
fill("#8A2BE2");
stroke("#8A2BE2");
curve(p11.x, p11.x);
curve(pmouseX,pmouseY, p11.x, p11.y, p10.x, p10.y, p7.x, p7.y);
stroke("#FAFAD2");
curve(pmouseX,pmouseY, p10.x, p10.y, p12.x, p12.y, p9.x, p9.y)
stroke("#5F9EA0")
curve(pmouseX,pmouseY, p12.x, p12.y, p9.x, p9.y, p9.x, p9.y)

p11 = {x: 69, y: 54}, p10 = {x: 274, y: 83}
p9 = {x: 84, y: 64}, p12 = {x: 217, y: 58}
fill("#BA55D3");
stroke("#BA55D3");
curve(p11.x, p11.x);
curve(pmouseX,pmouseY, p11.x, p11.y, p10.x, p10.y, p7.x, p7.y);
stroke("#BA55D3");
curve(pmouseX,pmouseY, p10.x, p10.y, p12.x, p12.y, p9.x, p9.y)
stroke("#BA55D3")
curve(pmouseX,pmouseY, p12.x, p12.y, p9.x, p9.y, p9.x, p9.y)


p13 = {x: 96, y: 812}, p14 = {x: 724, y: 173}
p15 = {x: 724, y: 814}, p16 = {x: 927, y: 918}
fill("#C71585");
stroke("#ADFF2F");
curve(p13.x, p13.x);
curve(pmouseX,pmouseY, p13.x, p13.y, p14.x, p14.y, p7.x, p7.y);
stroke("#ADFF2F");
curve(pmouseX,pmouseY, p14.x, p14.y, p15.x, p15.y, p16.x, p16.y)
stroke("#66CDAA")
curve(pmouseX,pmouseY, p15.x, p15.y, p16.x, p16.y, p16.x, p16.y)

pop()



var noiseScale=0.01;
  
  for (var x=0; x < width; x++) {
    
    var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(x, mouseY+noiseVal*23, x, height);
    
    
    
  }
 
   

}

