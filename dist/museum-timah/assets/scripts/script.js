// JavaScript functionality for the Museum Timah Indonesia project

// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetPage = link.getAttribute('data-page');

        // Kalau ada targetPage (misalnya SPA section di halaman yang sama)
        if (targetPage && document.getElementById(targetPage)) {
            e.preventDefault();

            // Remove active class from all nav links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            // Show selected page
            document.getElementById(targetPage).classList.add('active');
        }
        // kalau tidak ada targetPage -> biarkan link jalan normal (redirect ke file .html)
    });
});

// Carousel functionality
function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 330; // width of item + gap
    carousel.scrollLeft += direction * scrollAmount;
}

// Add hover animations to exhibition cards
const exhibitionCards = document.querySelectorAll('.exhibition-card');
exhibitionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add hover animations to collection items
const collectionItems = document.querySelectorAll('.collection-item');
collectionItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.animation = 'shake 0.5s ease-in-out';
    });

    item.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: scale(1.05) translateY(-5px) rotate(0deg); }
        25% { transform: scale(1.05) translateY(-5px) rotate(1deg); }
        75% { transform: scale(1.05) translateY(-5px) rotate(-1deg); }
    }
`;
document.head.appendChild(style);

// Smooth scroll for CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#exhibitions').scrollIntoView({
        behavior: 'smooth'
    });
});

// Mobile Navbar Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            if (menuOverlay) {
                menuOverlay.classList.toggle('active');
            }
            menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
        });
        if (menuOverlay) {
            menuOverlay.addEventListener('click', function() {
                navMenu.classList.remove('open');
                menuOverlay.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        }
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                if (menuOverlay) {
                    menuOverlay.classList.remove('active');
                }
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
