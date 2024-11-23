document.getElementById('next-button').addEventListener('click', function () {
    const audio = document.getElementById('audio');
    audio.pause(); // Stop the audio when Next button is clicked
    audio.currentTime = 0; // Reset audio to the start
});