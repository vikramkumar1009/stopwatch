document.addEventListener("DOMContentLoaded", () => {
    let startTime, elapsedTime = 0, timerInterval;
    const timerDisplay = document.querySelector('.timer');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    function formatTime(milliseconds) {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function updateDisplay() {
        timerDisplay.textContent = formatTime(elapsedTime);
    }

    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1000);

        startButton.disabled = true;
        stopButton.disabled = false;
    }

    function stopTimer() {
        clearInterval(timerInterval);
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        updateDisplay();
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

    stopButton.disabled = true;
    updateDisplay();
});
