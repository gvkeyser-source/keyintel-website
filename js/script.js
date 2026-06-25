/**
 * KeyIntel V2 - Premium Core Client Scripts
 * Pure Vanilla JavaScript - Framework Free & Performance Optimised
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigationEffects();
    initScrollAnimations();
    initSmoothScroll();
    initFooterCopyright();
});

/**
 * Manages the premium scroll behaviours and active states 
 * for the floating glass navigation bar
 */
function initNavigationEffects() {
    const header = document.querySelector('.header');
    if (!header) return;

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    // Highlight the active navigation link based on the current URL path
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if ((currentPath === '/' || currentPath.endsWith('index.html')) && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPath.includes(href) && href !== 'index.html') {
            link.classList.add('active');
        }
    });

    // Subtly updates the navigation background blur and shadow when scrolling down
    window.addEventListener('scroll', () => {
        const navContainer = header.querySelector('.nav-container');
        if (!navContainer) return;

        if (window.scrollY > 40) {
            navContainer.style.background = 'rgba(1, 1, 63, 0.85)';
            navContainer.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
            navContainer.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        } else {
            navContainer.style.background = 'rgba(1, 1, 63, 0.6)';
            navContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            navContainer.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        }
    }, { passive: true });
}

/**
 * Handles high-performance reveal-on-scroll logic using IntersectionObserver.
 * This replaces continuous window bounding calculations to keep Lighthouse scores high.
 */
function initScrollAnimations() {
    // Target all semantic blocks, dashboard embeds, and structural cards
    const animatedElements = document.querySelectorAll(
        '.card, .metric-item, .section-title, .cta-box, .dashboard-placeholder, .hero-graphic'
    );
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Smoothly fade in and slide the element up to its native layout position
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply the clean initial hidden states before observing
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        elementObserver.observe(el);
    });
}

/**
 * Smooth internal navigation scrolling for local fragment anchors
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Automatically maintains the current legal year across the application footer
 */
function initFooterCopyright() {
    const copyrightElement = document.querySelector('.copyright .container');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `&copy; ${currentYear} KeyIntel. All rights reserved.`;
    }
}