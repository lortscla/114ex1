let osc;
let img;

function preload() {
    img = loadImage("your-image.png");
}

function setup() {
    createCanvas(800, 600);
    osc = new Oscillator(img);
}

function draw() {
    background(0);

    osc.oscillate();
    osc.display();
}