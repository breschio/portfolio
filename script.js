document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.project');

    // Function to set active link
    function setActiveLink(clickedLink) {
        sidebarLinks.forEach(link => link.classList.remove('active'));
        clickedLink.classList.add('active');
    }

    // Function to handle smooth scrolling
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = 60; // Adjust this value based on any fixed header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Add click event listeners to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            setActiveLink(this);
            smoothScroll(targetId);
        });
    });

    // Update active link on scroll
    function updateActiveOnScroll() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100; // Adjust this value as needed
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveLink(sidebarLinks[index]);
            }
        });
    }

    // Throttle function to limit how often updateActiveOnScroll runs
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Add scroll event listener with throttling
    window.addEventListener('scroll', throttle(updateActiveOnScroll, 100));

    // Set initial active link based on scroll position
    updateActiveOnScroll();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
