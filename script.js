const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const initialScreen = document.getElementById('initial-screen');
const thankYouScreen = document.getElementById('thank-you-screen');
const backButton = document.getElementById('back-button');

noButton.addEventListener('mouseover', function() {
    const windowWidth = window.innerWidth - noButton.clientWidth;
    const windowHeight = window.innerHeight - noButton.clientHeight;

    const randomX = Math.random() * windowWidth;
    const randomY = Math.random() * windowHeight;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', function() {
    initialScreen.style.display = 'none';
    thankYouScreen.style.display = 'block';
});

backButton.addEventListener('click', function() {
    thankYouScreen.style.display = 'none';
    initialScreen.style.display = 'block';
});
