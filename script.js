// Function to generate hearts
function generateHearts() {
    const numHearts = 20; // Number of hearts to fall
    const heartContainer = document.body;

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Randomize initial position
        const left = Math.random() * 100;
        heart.style.left = `${left}vw`;

        // Randomize animation speed
        const delay = Math.random() * 2;
        const duration = Math.random() * (6 - 4) + 4; // Random duration between 4s and 6s
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;

        heartContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000); // Remove after full animation cycle
    }
}

// Start generating hearts once the page loads
window.onload = generateHearts;
