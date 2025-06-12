document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const body = document.querySelector('body');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        body.classList.toggle('nav-open');
        
        // Update ARIA attributes
        const isExpanded = body.classList.contains('nav-open');
        hamburger.setAttribute('aria-expanded', isExpanded);
        navLinks.setAttribute('aria-hidden', !isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (body.classList.contains('nav-open') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.hamburger')) {
            body.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
            navLinks.setAttribute('aria-hidden', 'true');
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && body.classList.contains('nav-open')) {
            body.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
            navLinks.setAttribute('aria-hidden', 'true');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
            navLinks.setAttribute('aria-hidden', 'true');
        });
    });

    // Set initial ARIA states
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.setAttribute('aria-hidden', 'true');
});
