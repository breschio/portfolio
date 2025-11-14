document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const sections = document.querySelectorAll('.project');
    const navItems = document.querySelectorAll('.sidebar a');

    // Snap to section when nav item is clicked
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            // Add active class to clicked nav item
            item.classList.add('active');
        });
    });

    // Highlight nav item based on scroll position
    const observerOptions = {
        root: content,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navItems.forEach(item => {
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Let CSS scroll-snap handle the snapping behavior naturally

    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.parentElement.querySelector('.prev-btn');
        const nextBtn = carousel.parentElement.querySelector('.next-btn');
        let currentSlide = 0;

        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    });
});
