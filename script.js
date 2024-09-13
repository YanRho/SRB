// JavaScript to enhance smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scroll to the start of the target element
        });
    });
});

// JavaScript to toggle the dropdown on click and close on outside click
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle dropdown on click
    navToggle.addEventListener('click', function(event) {
        navLinks.classList.toggle('show'); // Toggle the 'show' class
        event.stopPropagation(); // Prevent the click from bubbling up to the document
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
            navLinks.classList.remove('show'); // Remove 'show' class to hide dropdown
        }
    });
});

// JavaScript to add 'show' class on page load
window.addEventListener('load', function() {
    const heroSection = document.querySelector('.hero');
    heroSection.classList.add('show'); // Add 'show' class to trigger CSS animation
});

// JavaScript for service cards to be flipped
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.service-card-inner').classList.toggle('flipped');
    });
});
