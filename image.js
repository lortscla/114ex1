let osc;
let img;

function preload() {
    img = loadImage("shoe.png");
}

function setup() {
    createCanvas(800, 800);
    osc = new Oscillator(img);
}

function draw() {
    background(0);

    osc.oscillate();
    osc.display();
}