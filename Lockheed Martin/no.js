// Add raining sad Trump faces
window.onload = () => {
    setInterval(() => {
        const sadTrump = document.createElement('img');
        sadTrump.src = 'trump.webp';
        sadTrump.className = 'sad-trump';
        sadTrump.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(sadTrump);
        setTimeout(() => sadTrump.remove(), 5000);
    }, 200);
};