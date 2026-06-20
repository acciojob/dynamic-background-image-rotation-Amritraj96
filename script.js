//your JS code here. If required.
function updateBackgroundOrientation() {
    const body = document.body;
    
    // Links provided in the prompt
    const landscapeImg = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')";
    const portraitImg = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')";

    // Using BOM to check internal window dimensions
    if (window.innerWidth >= window.innerHeight) {
        // Landscape Mode
        body.style.backgroundImage = landscapeImg;
    } else {
        // Portrait Mode
        body.style.backgroundImage = portraitImg;
    }
}

// Run the function on initial load
updateBackgroundOrientation();

// Listen for resize events to handle screen rotation dynamically
window.addEventListener('resize', updateBackgroundOrientation);