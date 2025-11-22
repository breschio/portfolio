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

    // Bouncy ball avatar
    const avatar = document.querySelector('.avatar');
    const sidebar = document.querySelector('.sidebar');
    const menuList = document.querySelector('.sidebar ul');
    const aboutText = document.querySelector('.about-me p');

    if (avatar && sidebar && menuList && aboutText) {
        let isDragging = false;
        let isPhysicsActive = false;
        let avatarX, avatarY;
        let velocityX = 0, velocityY = 0;
        let rotation = 0;
        let offsetX, offsetY;
        let animationFrame;

        const gravity = 0.5;
        const bounce = 0.7;
        const friction = 0.98;
        const minVelocity = 0.1;
        const avatarSize = 40;

        // Calculate boundaries
        const updateBoundaries = () => {
            const sidebarRect = sidebar.getBoundingClientRect();
            const menuRect = menuList.getBoundingClientRect();
            const textRect = aboutText.getBoundingClientRect();

            // Top boundary is bottom of menu list
            const minY = menuRect.bottom - sidebarRect.top;
            
            // Bottom boundary is top of text (minus avatar size)
            // Add 8px padding above the text
            let maxY = textRect.top - sidebarRect.top - avatarSize - 8;

            // Safety check for small screens
            if (maxY < minY) maxY = minY;

            // Left/Right boundaries
            const minX = 40; // Sidebar padding left
            const maxX = sidebarRect.width - 40 - avatarSize; // Sidebar width - padding right - avatar width

            return { minX, maxX, minY, maxY };
        };

        let bounds = updateBoundaries();

        // Move avatar to sidebar direct child to simplify positioning relative to sidebar
        if (avatar.parentElement !== sidebar) {
            sidebar.appendChild(avatar);
        }

        // Make avatar absolute positioned
        avatar.style.position = 'absolute';
        avatar.style.zIndex = '1000'; // Ensure it's on top

        function updateAvatarPosition() {
            avatar.style.left = `${avatarX}px`;
            avatar.style.top = `${avatarY}px`;
            
            // Update rotation based on X position (rolling effect)
            // Circumference = PI * diameter (40) ≈ 125.6
            // Rotation = (distance / circumference) * 360
            if (!isDragging) {
                // Calculate rotation relative to the starting position (minX)
                // This ensures that when it's at the default left position, rotation is 0
                rotation = ((avatarX - bounds.minX) / 125.6) * 360;
                avatar.style.transform = `rotate(${rotation}deg)`;
            } else {
                avatar.style.transform = 'rotate(0deg)';
            }
        }

        function startDragging(e) {
            e.preventDefault();
            isDragging = true;
            isPhysicsActive = false;
            if (animationFrame) cancelAnimationFrame(animationFrame);

            avatar.style.cursor = 'grabbing';

            // Calculate offset from the mouse click to the top-left corner of the avatar
            const rect = avatar.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            velocityX = 0;
            velocityY = 0;
        }

        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();
            
            const sidebarRect = sidebar.getBoundingClientRect();
            
            // Calculate new position relative to sidebar
            const newX = e.clientX - sidebarRect.left - offsetX;
            const newY = e.clientY - sidebarRect.top - offsetY;

            // Calculate velocity for throwing
            velocityX = (newX - avatarX) * 0.5;
            velocityY = (newY - avatarY) * 0.5;

            avatarX = newX;
            avatarY = newY;
            
            // Constrain to bounds while dragging? 
            // Let's allow dragging outside but snap/bounce back on release or keep visual constrained
            // For better feel, let's constrain visually during drag but allow elastic feel? 
            // Simplest is just update position. Collision will happen on release/physics loop.
            // Or we can clamp it now. Let's clamp it now to keep it "in the box".
            
            // Update bounds in case of resize
            bounds = updateBoundaries();
            
            if (avatarX < bounds.minX) avatarX = bounds.minX;
            if (avatarX > bounds.maxX) avatarX = bounds.maxX;
            if (avatarY < bounds.minY) avatarY = bounds.minY;
            if (avatarY > bounds.maxY) avatarY = bounds.maxY;

            updateAvatarPosition();
        }

        function stopDragging() {
            if (!isDragging) return;
            isDragging = false;
            avatar.style.cursor = 'grab';

            isPhysicsActive = true;
            animatePhysics();
        }

        function animatePhysics() {
            if (!isPhysicsActive && !isDragging) return; // Stop if not active

            // Update bounds
            bounds = updateBoundaries();

            // Apply gravity
            velocityY += gravity;

            // Apply friction
            velocityX *= friction;
            velocityY *= friction;

            // Update position
            avatarX += velocityX;
            avatarY += velocityY;

            // Wall Collision (Left/Right)
            if (avatarX <= bounds.minX) {
                avatarX = bounds.minX;
                // Dampen the bounce on the left wall more to help it settle in the default position
                velocityX = Math.abs(velocityX) * 0.3;
            } else if (avatarX >= bounds.maxX) {
                avatarX = bounds.maxX;
                velocityX = -Math.abs(velocityX) * bounce;
            }

            // Floor/Ceiling Collision
            if (avatarY <= bounds.minY) {
                avatarY = bounds.minY;
                velocityY = Math.abs(velocityY) * bounce;
            } else if (avatarY >= bounds.maxY) {
                avatarY = bounds.maxY;
                velocityY = -Math.abs(velocityY) * bounce;
                
                // Apply ground friction when rolling on the floor
                velocityX *= 0.95; 
            }

            updateAvatarPosition();

            // Stop animation if velocity is negligible AND it's on the floor (or close to rest)
            const isStopped = Math.abs(velocityX) < minVelocity && Math.abs(velocityY) < minVelocity;
            const isOnFloor = Math.abs(avatarY - bounds.maxY) < 1;
            
            if (isStopped && isOnFloor) {
                isPhysicsActive = false;
                velocityX = 0;
                velocityY = 0;
                avatarY = bounds.maxY; // Snap to floor
                
                // If we stopped near the default position (left wall), snap exactly to it
                // This ensures the rotation becomes exactly 0 due to our relative calculation
                if (avatarX < bounds.minX + 5) {
                    avatarX = bounds.minX;
                }
                
                updateAvatarPosition();
            } else if (isStopped && !isOnFloor) {
                 // If stopped in mid-air (unlikely with gravity), let gravity continue
                 animationFrame = requestAnimationFrame(animatePhysics);
            } else {
                animationFrame = requestAnimationFrame(animatePhysics);
            }
        }

        // Event listeners
        avatar.addEventListener('mousedown', startDragging);
        window.addEventListener('mousemove', drag); // Use window to catch drags outside element
        window.addEventListener('mouseup', stopDragging);
        
        // Handle window resize to update boundaries
        window.addEventListener('resize', () => {
            bounds = updateBoundaries();
            // Ensure avatar stays within new bounds
            if (avatarX < bounds.minX) avatarX = bounds.minX;
            if (avatarX > bounds.maxX) avatarX = bounds.maxX;
            if (avatarY < bounds.minY) avatarY = bounds.minY;
            if (avatarY > bounds.maxY) avatarY = bounds.maxY;
            updateAvatarPosition();
        });

        // Initial Animation: Roll in from RIGHT
        // Start off-screen right (sidebar width)
        // Y position should be on the "floor" (bounds.maxY)
        
        // We need to set initial bounds first
        // Using setTimeout to ensure layout is complete
        setTimeout(() => {
            bounds = updateBoundaries();
            
            avatarX = bounds.maxX + 100; // Start off-screen right
            avatarY = bounds.maxY; // Start on the floor
            
            velocityX = -15; // Strong leftward velocity
            velocityY = 0;  // Rolling, not falling initially

            updateAvatarPosition();
            
            isPhysicsActive = true;
            animatePhysics();
        }, 100);
    }
});
