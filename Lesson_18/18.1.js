let time = 64;

const timerDisplay = document.getElementById('timer');

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent =
        `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

updateTimerDisplay(time);

const interval = setInterval(() => {
    time--;
    updateTimerDisplay(time);

    if (time <= 0) {
        clearInterval(interval);
        timerDisplay.textContent = "00:00";
    }
}, 1000);