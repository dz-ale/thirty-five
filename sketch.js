if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function resetScroll() {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    scrollContainer.scrollTop = 0;

    let attempts = 0;
    function forceReset() {
        scrollContainer.scrollTop = 0;
        attempts++;
        if (attempts < 10) {
            requestAnimationFrame(forceReset);
        }
    }
    requestAnimationFrame(forceReset);
}

resetScroll();
window.addEventListener('load', resetScroll);
window.addEventListener('pageshow', resetScroll);

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


document.getElementById('heart-button').addEventListener('click', (e) => {
    createHearts(e.clientX, e.clientY);
});

function createHearts(x, y) {
    const heartEmojis = ['❤️', '🩵', '🩷', '💜'];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        // zufällige seitliche Drift-Richtung
        const drift = (Math.random() - 0.5) * 200;
        heart.style.setProperty('--drift', drift + 'px');

        // leicht zufällige Größe & Dauer für organischeren Look
        heart.style.fontSize = (16 + Math.random() * 20) + 'px';
        heart.style.animationDuration = (1.5 + Math.random()) + 's';

        document.body.appendChild(heart);

        // Element nach der Animation wieder entfernen (Performance!)
        setTimeout(() => heart.remove(), 2500);
    }
}