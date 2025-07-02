function updateCountdown() {
    // Target date: August 11, 2025 at 00:00:00
    const birthday = new Date(2025, 7, 11, 0, 0, 0); // Month is 0-indexed (7 = August)
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        // Optional: When countdown ends
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Run immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
