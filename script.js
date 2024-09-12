document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href'); // Get the target section id
            const targetSection = document.querySelector(targetId); // Find the target section element

            window.scrollTo({
                top: targetSection.offsetTop, // Scroll to the top of the target section
                behavior: 'smooth' // Smooth scrolling effect
            });
        });
    });

    // Harry Potter Style Opening Effect
    const body = document.querySelector('body');
    body.style.opacity = 0; // Initial opacity set to 0 for fade-in effect

    window.onload = () => {
        let opacity = 0;
        const fadeIn = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.02; // Increase opacity gradually
                body.style.opacity = opacity;
            } else {
                clearInterval(fadeIn); // Stop the interval when opacity reaches 1
            }
        }, 50); // Fade-in speed (lower number for faster, higher number for slower)
    };

    // Optional: Add a wand effect on hover for navigation items
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textShadow = "0 0 10px #f0c75e, 0 0 20px #f0c75e, 0 0 30px #ffdd33"; // Glow effect
        });
        link.addEventListener('mouseout', () => {
            link.style.textShadow = "none"; // Remove glow effect
        });
    });
});
