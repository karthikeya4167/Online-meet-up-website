document.addEventListener
  ("DOMContentLoaded", function () {
    const eventDate = new Date("January 26, 2024 10:00:00").getTime();
    const countdownElement = document.createElement('p');
    countdownElement.style.color = "#4CAF50";
    document.querySelector('#event-info').appendChild(countdownElement);

    function updateCountdown() {
        const now = new Date().getTime();
        const timeleft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `<strong>Time Until Event:</strong> ${days}d ${hours}h ${minutes}m ${seconds}s`;
        if (timeLeft < 0) {
            countdownElement.innerHTML = "The Event has Started!";
        }
    }

    setInterval(updateCountdown, 1000);
});