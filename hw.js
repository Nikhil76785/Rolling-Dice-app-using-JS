let clickCount = 0;
let intervalId = null;

const button = document.getElementById('toggleButton');
const display = document.getElementById('randomNumber');

button.addEventListener('click', () => {
    clickCount++;

    if (clickCount % 2 === 0) {
        // Even click — start generating
        intervalId = setInterval(() => {
            const randomNum = Math.floor(Math.random() * 100); // Range 0-99
            display.textContent = randomNum;
        }, 300);
    } else {
        // Odd click — stop generating
        clearInterval(intervalId);
    }
});

