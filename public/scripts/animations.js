// src/scripts/animations.js
document.addEventListener('DOMContentLoaded', () => {
    const animationOptions = {
        rootMargin: '0px 0px -5% 0px', // New value
        threshold: 0.05 // New value
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target); // Animate only once
            }
        });
    }, animationOptions);

    // Select all elements that should be animated on scroll
    // These elements will need to have their animation classes structured
    // such that the animation only plays when 'is-visible' is added.
    const elementsToAnimate = document.querySelectorAll('.scroll-animate');

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});
