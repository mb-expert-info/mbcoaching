export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        // Wait for DOM to be ready
        setTimeout(() => {
            // Find the scroll container (the div with snap-y class in default layout)
            const scrollContainer = document.querySelector('.snap-y') || null;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, {
                root: scrollContainer, // Use the scroll container as the viewport
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            // Function to observe new elements
            const observeElements = () => {
                document.querySelectorAll('.reveal').forEach((el) => {
                    observer.observe(el);
                });
            };

            // Observe initially
            observeElements();

            // Re-observe on route changes
            nuxtApp.hook('page:finish', () => {
                setTimeout(observeElements, 100);
            });
        }, 100); // Small delay to ensure layout is rendered
    });
});
