var splashscreen

// loading assets like images sound videos etc
function preload() {
splashscreen = loadImage("INTROSCREEN.gif")
}


// setting up the game like creating canvas, sprites, button etc
function setup(){
createCanvas(windowWidth, windowHeight);

}


// this function runs on every frame till the codes are running
function draw() {
background(splashscreen)


}