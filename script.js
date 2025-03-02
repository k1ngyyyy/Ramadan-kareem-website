// Function to play music
function playMusic() {
    var audio = document.getElementById('background-music');
    audio.play().then(() => {
        // Music started playing
        console.log('Music started playing');
    }).catch((error) => {
        // If autoplay fails, log the error
        console.error('Music failed to play:', error);
    });
}

// Automatically try to play the music after 1 second (attempt autoplay)
window.onload = function() {
    // Try to autoplay after 1 second
    setTimeout(function() {
        var audio = document.getElementById('background-music');
        audio.play().then(() => {
            // Music started playing automatically after 1 second
            console.log('Autoplay triggered after 1 second.');
        }).catch((error) => {
            // If autoplay fails, log the error and wait for user interaction
            console.error('Autoplay failed after 1 second:', error);
        });
    }, 1000); // Delay by 1 second to allow for browser to try autoplay
    
    // Set up an event listener to trigger playMusic when user clicks anywhere
    window.addEventListener('click', playMusic, { once: true });  // The { once: true } ensures it only runs once
};
