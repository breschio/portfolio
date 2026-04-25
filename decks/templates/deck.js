/**
 * Slide Deck Navigation & Interactions
 * Handles: navigation, animations, count-up effects, theme toggle
 */

(function() {
    'use strict';

    const deck = document.getElementById('deck');
    const slides = deck ? deck.querySelectorAll('.slide') : [];
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

    function animateCountFrom(element) {
        const originalText = element.dataset.originalStat || element.textContent;
        element.dataset.originalStat = originalText;

        const fromValue = parseFloat(element.dataset.countFrom);
        const parts = parseStatValue(originalText);
        if (parts.every(p => p.type === 'text') || isNaN(fromValue)) return;

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
                    const currentValue = fromValue + (part.value - fromValue) * easedProgress;
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
                element.textContent = originalText;
            }
        }

        requestAnimationFrame(update);
    }

    function triggerCountUpForSlide(slide) {
        if (slide.classList.contains('big-metric')) {
            const stat = slide.querySelector('.stat');
            if (stat) {
                setTimeout(() => animateCountUp(stat), 150);
            }
        }

        slide.querySelectorAll('[data-count-from]').forEach(el => {
            setTimeout(() => animateCountFrom(el), 150);
        });
    }

    // ===========================================
    // PROGRESS DOTS
    // ===========================================
    if (progress && deck) {
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'progress-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            progress.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll('.progress-dot');

    // ===========================================
    // DYNAMIC BREADCRUMB FROM TITLE SLIDES
    // ===========================================
    const breadcrumbEl = document.querySelector('.breadcrumb');
    const sections = [];

    if (deck) {
        slides.forEach((slide, i) => {
            const type = slide.dataset.slide;
            if (type === 'title') {
                const heading = slide.querySelector('h1') || slide.querySelector('h2');
                if (heading) {
                    sections.push({ index: i, label: heading.textContent.trim() });
                }
            }
        });
    }

    function getSectionForSlide(slideIndex) {
        let current = sections[0] || null;
        for (const section of sections) {
            if (section.index <= slideIndex) {
                current = section;
            } else {
                break;
            }
        }
        return current;
    }

    function updateBreadcrumb() {
        if (!breadcrumbEl || sections.length < 1) return;

        const root = sections[0];
        const current = getSectionForSlide(currentSlide);

        let html = `<span class="breadcrumb-root" data-slide-index="${root.index}">${root.label}</span>`;

        if (current && current.index !== root.index) {
            html += `<span class="breadcrumb-separator">/</span>`;
            html += `<span class="breadcrumb-current" data-slide-index="${current.index}">${current.label}</span>`;
        }

        breadcrumbEl.innerHTML = html;

        breadcrumbEl.querySelectorAll('[data-slide-index]').forEach(span => {
            span.style.cursor = 'pointer';
            span.addEventListener('click', () => {
                goToSlide(parseInt(span.dataset.slideIndex, 10));
            });
        });
    }

    // ===========================================
    // SLIDE NAVIGATION
    // ===========================================
    function updateSlide() {
        if (!deck) return;
        deck.style.transform = `translateX(-${currentSlide * 100}vw)`;

        slides.forEach((slide, i) => {
            const wasActive = slide.classList.contains('active');
            const isNowActive = i === currentSlide;
            slide.classList.toggle('active', isNowActive);

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

        updateBreadcrumb();
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

        const targetId = window.location.hash.slice(1);
        if (targetId) {
            const targetSlide = document.getElementById(targetId);
            const targetIndex = Array.from(slides).indexOf(targetSlide);
            if (targetIndex >= 0) {
                return targetIndex;
            }
        }

        return 0;
    }

    function initializeDeck() {
        if (!deck) return;
        const initialSlide = getInitialSlide();
        currentSlide = initialSlide;
        updateSlide();
    }

    // Initialize slide from URL or default to first (skip when no deck, e.g. preview page)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeDeck);
    } else {
        initializeDeck();
    }

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
    // INTERNAL SLIDE LINKS
    // ===========================================
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-slide-target]');
        if (!link || !deck) return;

        const targetSlide = document.getElementById(link.dataset.slideTarget);
        const targetIndex = Array.from(slides).indexOf(targetSlide);
        if (targetIndex < 0) return;

        e.preventDefault();
        goToSlide(targetIndex);
        history.pushState(null, '', `?slide=${targetIndex}#${link.dataset.slideTarget}`);
    });

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
        } else if ((e.key === 'r' || e.key === 'R') && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            goToSlide(0);
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
