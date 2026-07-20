let x;
let r, g, b;
let lastChange = 0;
let interval = 1000;
let w, h;
let feierButton;

function setup() {
    w = min(windowWidth, 480);
    h = windowHeight;
    let cnv = createCanvas(w, h);
    cnv.parent('canvas-container');
    background(233, 95, 35);
    textAlign(CENTER, CENTER);
}


function draw() {
    if (millis() - lastChange > interval) {
        r = random(255);
        g = random(255);
        b = random(255);
        lastChange = millis();
        interval = random(700, 2000);

    }

    x = random(w / 5);
    fill(r, g, b);
    noStroke();
    ellipse(mouseX, mouseY, x, x);

    fill(233, 95, 35);
    stroke(233, 95, 35);
    strokeWeight(30);
    textSize(w - 50);
    text('35', w / 2, h / 2);


}

function doubleClicked() {
    background(233, 95, 35);
}

function windowResized() {
    w = min(windowWidth, 480);
    h = windowHeight;
    resizeCanvas(w, h);
    background(233, 95, 35);
}



document.getElementById('feier-button').addEventListener('click', () => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
});