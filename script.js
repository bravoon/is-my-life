document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const popup = document.getElementById('popup');

    function moveButton() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        
        // Ensure the button stays within the viewport
        const x = Math.random() * (viewportWidth - buttonWidth);
        const y = Math.random() * (viewportHeight - buttonHeight);
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    }

    function startMoving() {
        moveButton();
        // Move the button every 500 milliseconds
        noButton.intervalId = setInterval(moveButton, 500);
    }

    noButton.addEventListener('mouseover', () => {
        moveButton();
    });

    noButton.addEventListener('click', () => {
        clearInterval(noButton.intervalId); // Stop moving the button
        popup.classList.remove('hidden');
    });

    yesButton.addEventListener('click', () => {
        window.location.href = 'outra-pagina.html'; // Altere para o caminho da nova página
    });

    // Start moving the button
    startMoving();
});
