img=""

function preload() {
  img= loadImage("yea.jpeg");
}

function setup() {
  canvas= createCanvas(640,420);
  canvas.center();

}

function draw() {
    image(img,0,0,640,420);
    fill("#ff2600");
    noFill();
    stroke("#ff2600")
    text("Computer",45,75);
    text("Human",500,75);
 
    rect(30,60,190,350)
    rect(400,60,190,340)
}

