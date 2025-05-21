// src/scripts/animations.js
document.addEventListener('DOMContentLoaded', () => {
    const animationOptions = {
        rootMargin: '0px 0px -10% 0px', // Trigger when element is 10% from bottom of viewport
        threshold: 0.1 // Trigger when 10% of the element is visible
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
