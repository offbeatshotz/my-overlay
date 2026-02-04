// Stream Data
const streamData = {
    current: 12,
    target: 50,
    url: 'https://twitch.tv/yourchannel'
};

// UI Elements
const progressBar = document.getElementById('bar');
const currentText = document.getElementById('current');
const ctaButton = document.getElementById('generic-cta');
const toastContainer = document.getElementById('toast-container');

// Update Progress
function updateProgress(val) {
    streamData.current = Math.min(streamData.current + val, streamData.target);
    currentText.innerText = streamData.current;
    const percent = (streamData.current / streamData.target) * 100;
    progressBar.style.width = `${percent}%`;
}

// Show Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast glass';
    toast.innerText = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// CTA Click
ctaButton.addEventListener('click', () => {
    window.open(streamData.url, '_blank');
    showToast('Redirecting to Channel...');
});

// Simulate Activity
setInterval(() => {
    if (Math.random() > 0.8) {
        updateProgress(1);
        showToast('New Subscriber joined the squad!');
    }
}, 15000);

// Initial Load
window.addEventListener('load', () => {
    setTimeout(() => showToast('Modular Overlay v2 Active'), 1000);
});
