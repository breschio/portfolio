/**
 * Slide Deck Navigation & Interactions
 * Handles: navigation, animations, count-up effects, theme toggle
 */

(function() {
    'use strict';

    const deck = document.getElementById('deck');
    const slides = document.querySelectorAll('.slide');
    const progress = document.getElementById('progress');
    const counter = document.getElementById('counter');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // ===========================================
    // COUNT-UP ANIMATION FOR METRICS
    // ===========================================
    const COUNT_DURATION = 1500; // ms
    const COUNT_EASING = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

    function parseStatValue(text) {
        // Handle formats like "47%", "19%→22%", "$1.2M", "3.5x", etc.
        const parts = [];
        const regex = /([+-]?\d*\.?\d+)([%xX$€£MKBkmb]*)/g;
        let match;
        let lastIndex = 0;

        while ((match = regex.exec(text)) !== null) {
            // Add any text before this number
            if (match.index > lastIndex) {
                parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
            }
            // Add the number
            parts.push({
                type: 'number',
                value: parseFloat(match[1]),
                suffix: match[2] || '',
                decimals: (match[1].includes('.')) ? match[1].split('.')[1].length : 0
            });
            lastIndex = regex.lastIndex;
        }

        // Add any remaining text
        if (lastIndex < text.length) {
            parts.push({ type: 'text', value: text.slice(lastIndex) });
        }

        return parts;
    }

    function animateCountUp(element) {
        const originalText = element.dataset.originalStat || element.textContent;
        element.dataset.originalStat = originalText;

        const parts = parseStatValue(originalText);
        if (parts.every(p => p.type === 'text')) return; // No numbers to animate

        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progressVal = Math.min(elapsed / COUNT_DURATION, 1);
            const easedProgress = COUNT_EASING(progressVal);

            let result = '';
            for (const part of parts) {
                if (part.type === 'text') {
                    result += part.value;
                } else {
                    const currentValue = part.value * easedProgress;
                    if (part.decimals > 0) {
                        result += currentValue.toFixed(part.decimals) + part.suffix;
                    } else {
                        result += Math.round(currentValue) + part.suffix;
                    }
                }
            }

            element.textContent = result;

            if (progressVal < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = originalText; // Ensure exact final value
            }
        }

        requestAnimationFrame(update);
    }

    function resetCountUp(element) {
        if (element.dataset.originalStat) {
            const parts = parseStatValue(element.dataset.originalStat);
            let result = '';
            for (const part of parts) {
                if (part.type === 'text') {
                    result += part.value;
                } else {
                    result += '0' + part.suffix;
                }
            }
            element.textContent = result;
        }
    }

    function triggerCountUpForSlide(slide) {
        if (slide.classList.contains('big-metric')) {
            const stat = slide.querySelector('.stat');
            if (stat) {
                // Small delay to sync with fade-in
                setTimeout(() => animateCountUp(stat), 150);
            }
        }
    }

    // ===========================================
    // PROGRESS DOTS
    // ===========================================
    if (progress) {
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'progress-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            progress.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll('.progress-dot');

    // ===========================================
    // SLIDE NAVIGATION
    // ===========================================
    function updateSlide() {
        deck.style.transform = `translateX(-${currentSlide * 100}vw)`;

        slides.forEach((slide, i) => {
            const wasActive = slide.classList.contains('active');
            const isNowActive = i === currentSlide;
            slide.classList.toggle('active', isNowActive);

            // Trigger count-up when slide becomes active
            if (!wasActive && isNowActive) {
                triggerCountUpForSlide(slide);
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });

        if (counter) {
            counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }
    }

    // ===========================================
    // URL PARAMETER HANDLING
    // ===========================================
    function getInitialSlide() {
        const params = new URLSearchParams(window.location.search);
        const slideParam = params.get('slide');
        if (slideParam !== null) {
            const index = parseInt(slideParam, 10);
            if (!isNaN(index) && index >= 0 && index < totalSlides) {
                return index;
            }
        }
        return 0;
    }

    // Initialize slide from URL or default to first
    document.addEventListener('DOMContentLoaded', () => {
        const initialSlide = getInitialSlide();
        currentSlide = initialSlide;

        // Add active class after brief delay to trigger animation
        setTimeout(() => {
            if (slides[currentSlide]) {
                updateSlide();
                triggerCountUpForSlide(slides[currentSlide]);
            }
        }, 100);
    });

    function goToSlide(index) {
        currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
        updateSlide();
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        } else {
            // At last slide - check for next deck
            const nextDeck = document.body.dataset.nextDeck || deck?.dataset.nextDeck;
            if (nextDeck) {
                window.location.href = nextDeck;
            }
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }

    // ===========================================
    // KEYBOARD NAVIGATION (arrows only)
    // ===========================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
    });

    // ===========================================
    // TOUCH/SWIPE SUPPORT
    // ===========================================
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });

    // ===========================================
    // CLICK NAVIGATION (disabled)
    // ===========================================
    // document.addEventListener('click', (e) => {
    //     // Ignore clicks on interactive elements
    //     if (e.target.closest('a, button, video, iframe, .progress-dot')) return;
    //
    //     const x = e.clientX;
    //     const width = window.innerWidth;
    //
    //     if (x > width * 0.7) {
    //         nextSlide();
    //     } else if (x < width * 0.3) {
    //         prevSlide();
    //     }
    // });

    // ===========================================
    // THEME TOGGLE
    // ===========================================
    const themeToggle = document.getElementById('theme-toggle');

    function toggleTheme() {
        const isDark = document.body.classList.contains('dark-theme') ||
            (!document.body.classList.contains('light-theme') &&
             window.matchMedia('(prefers-color-scheme: dark)').matches);

        document.body.classList.remove('light-theme', 'dark-theme');

        if (isDark) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Sync theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    // ===========================================
    // EXPOSE API FOR EXTERNAL USE
    // ===========================================
    window.slideDeck = {
        goToSlide,
        nextSlide,
        prevSlide,
        getCurrentSlide: () => currentSlide,
        getTotalSlides: () => totalSlides
    };
})();
