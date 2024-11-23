document.addEventListener('DOMContentLoaded', () => {
    // Create floating hearts and flowers
    createFloatingElements();

    // Open Love Letter button functionality
    document.getElementById('openButton').addEventListener('click', () => {
        // Redirect to another webpage (can be changed to your desired URL)
        window.location.href = "loveLetter.html"; // Replace with the URL of your love letter page
    });
});

function createFloatingElements() {
    const heartContainer = document.getElementById('heart-container');
    const flowerContainer = document.getElementById('flower-container');

    // Create random hearts
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 4 + 4}s`;
        heartContainer.appendChild(heart);
    }

    // Create random flowers
    for (let i = 0; i < 10; i++) {
        let flower = document.createElement('div');
        flower.classList.add('flower');
        flower.textContent = '🌸';
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.animationDuration = `${Math.random() * 6 + 6}s`;
        flowerContainer.appendChild(flower);
    }
}