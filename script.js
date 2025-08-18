const audio = document.getElementById('audio-player');
const bottomPlayer = document.getElementById('player-controls');
const playPauseBtn = document.getElementById('play-pause');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');

// Play from cards
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-src');
        audio.src = src;
        audio.play();
        bottomPlayer.style.display = 'flex';
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });
});

// Play/Pause in bottom bar
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Rewind 5 seconds
rewindBtn.addEventListener('click', () => {
    audio.currentTime -= 5;
});

// Forward 5 seconds
forwardBtn.addEventListener('click', () => {
    audio.currentTime += 5;
});