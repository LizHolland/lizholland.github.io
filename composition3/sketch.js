


var myCanvas;

function setup() {
  //use a variable to store a pointer to the canvas
  myCanvas = createCanvas(100, 100);
  noStroke();
  fill("#FFA500");
  }

function draw() {
  clear();
  //the difference between previous and
  //current x position is the horizontal mouse speed
  var speed = abs(winMouseX-pwinMouseX);
  //change the size of the circle
  //according to the horizontal speed
  ellipse(mouseX, mouseY, 5+speed*5, 5+speed*5);
  //move the canvas to the mouse position
  myCanvas.position( winMouseX+1, winMouseY+1);

}
var y, b, p;

function setup() {
   createCanvas(720, 400);
  
  r = random(200);
  g = random(234);
  b = random(21);
}

function draw() {
  
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}