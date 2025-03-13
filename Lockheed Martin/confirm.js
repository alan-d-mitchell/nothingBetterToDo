// Button clicks trigger over-the-top reactions
document.querySelector('.yes-button').addEventListener('click', () => {
    alert('DEPLOYMENT CONFIRMED! F-22 RAPTORS LAUNCHED! FREEDOM IS YOURS!');
    document.querySelector('.background-gif').style.filter = 'brightness(300%)';
    document.querySelector('h2').innerText = 'VICTORY IS IMMINENT!';
});

document.querySelector('.no-button').addEventListener('click', () => {
    alert('RETREAT DETECTED! YOU HAVE DISHONORED THE RAPTORS!');
    document.querySelector('.background-gif').style.filter = 'grayscale(100%)';
    document.querySelector('h2').innerText = 'SHAME ON YOU!';
});