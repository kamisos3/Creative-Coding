let m;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);

    m = new Mold();
}

function draw() {
    background(220);
    m.display();
}
