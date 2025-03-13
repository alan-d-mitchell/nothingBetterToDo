// Button click triggers a Pete Hegseth takeover
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('PETE HEGSETH WELCOMES YOU TO THE ULTIMATE FREEDOM CRUSADE! LOCKHEED MARTIN DOMINATES ALL!');
    document.body.style.background = "url('pete-hegseth.webp') no-repeat center center fixed";
    document.body.style.backgroundSize = "400%"; // Massive Pete zoom
    const h1 = document.querySelector('h1');
    h1.style.color = "#ff00ff";
    h1.style.textShadow = "0 0 120px #00ff00";
    h1.innerText = "PETE’S REIGN BEGINS!";
    document.querySelector('.pete-overlay').style.opacity = "0.8"; // Pete overlay intensifies
});