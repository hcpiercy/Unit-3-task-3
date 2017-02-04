// var img;
// function preload() {
// img = loadImage("digitalrichter.jpg");
// }

// function setup() {
//   resizeCanvas (500, 500);
// }
 
var tileCount = 20;
var rectSize = 35;
var actRandomSeed = 0;

function setup(){
  createCanvas(1000, 1000);
}

function draw() {
  fill(0, 0, 0, 5);
  rect(0, 0, width, height);
  image(img, mouseX, mouseY);
}

 var img;
function preload() {{
 img = loadImage("digitalrichter.jpg");
// filter (INVERT);
}
function draw() {
  colorMode(HSB, 360, 100, 100, 100);
  background(360);
  smooth();
  noStroke();
  fill(img);
  
 
  randomSeed("digitalrichter.jpg");
  for (var gridY=0; gridY<tileCount; gridY++) {
    for (var gridX=0; gridX<tileCount; gridX++) {
      var posX = int(width/tileCount * gridX);
      var posY = int(height/tileCount * gridY);
      var shiftX1 = mouseX/20 * random(-1, 1);
      var shiftY1 = mouseY/20 * random(-1, 1);
      var shiftX2 = mouseX/20 * random(-1, 1);
      var shiftY2 = mouseY/20 * random(-1, 1);
      var shiftX3 = mouseX/20 * random(-1, 1);
      var shiftY3 = mouseY/20 * random(-1, 1);
      var shiftX4 = mouseX/20 * random(-1, 1);
      var shiftY4 = mouseY/20 * random(-1, 1);
     
      beginShape(img);
      vertex(posX+shiftX1, posY+shiftY1);
      vertex(posX+img+shiftX2, posY+shiftY2);
      vertex(posX+img+shiftX3, posY+img+shiftY3);
      vertex(posX+shiftX4, posY+img+shiftY4);
      endShape(CLOSE);
    }
  } 
 }
}
function mousePressed() {
  actRandomSeed = int(random(100000));
}

function keyTyped(){
  if (key == 's' || key == 'S') save("P_2_1_2_04.png");
}