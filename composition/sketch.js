//function setup(){
    //creatCanvas(windowWidth, windowWeight);
//}

//function draw() {

	// place your drawing code here
//	background("grey")
//fill(0,233,56);
	//noFill();
//	triangle(40,40,100,100,20,120);
//	fill(120,34,25);
//	stroke("green");
	//line(0,0,width/2,height/2);
	//noFill();
	//strokeWeight(10);
//	ellipse(100,100,40,40);
    //point(200,100);
   // fill(120,34,234);
   // rect(200,200,70,70,20);
   // quad(100,100,150,170,200,270,120,180);
//}

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
    triangle(120,230,445,324,212,389);
    fill("#6495ED")
quad(538, 31, 386, 320, 369, 363, 930, 74);
    triangle(120,230,445,324,212,389);
    noStroke();
    fill("#F08080");
    ellipse(mouseX,mouseY,26,756);
    
    //triangle(pmouseX,pmouseY,130,35,324,212,389);
    triangle(330,130,35,324,212,389);

   if (mouseIsPressed)
   
    ellipse(566, 246, 155, 575);
  else
    rect(30, 20, 95, 55);
   blendMode(LIGHTEST);
  p1 = {x: 457, y: 309}, p2 = {x: 34, y: 23}
p3 = {x: 233, y: 330}, p4 = {x: 40, y: 500}
fill("#E9967A");
stroke("#48D1CC");
curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
stroke("#FAFAD2");
curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
stroke("#FFB6C1");
curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
push();
fill("#7FFF00");
strokeWeight(1)
translate(50, 0);
quad(534, 31, 386, 320, 369, 363, 838, 574);
fill("#6495ED")
pop();
quad(538, 31, 386, 320, 369, 363, 930, 74);
fill("#00BFFF")
line(pmouseX,pmouseY,545,88);

 


}