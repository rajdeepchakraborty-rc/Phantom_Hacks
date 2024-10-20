window.onload = function() {
    const loadingScreen = document.getElementById('loading-screen');
    const hero = document.querySelector('.hero');

    // Hide loading screen and show main content after 3 seconds
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide the loading screen
        hero.style.display = 'flex'; // Show the hero section
    }, 3000);
};
