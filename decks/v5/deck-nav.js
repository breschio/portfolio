// decks/v5/deck-nav.js
// One-page-per-chapter slide navigation. Slides are <section class="slide"> inside
// .deck-stage. Exactly one slide carries .is-active at a time.
// Navigation: pager arrows, keyboard ← / →, and URL hash (#04, #05...).
(function () {
  var stage = document.querySelector('.deck-stage');
  if (!stage) return;
  var slides = Array.prototype.slice.call(stage.querySelectorAll('.slide'));
  if (slides.length === 0) return;

  var total = slides.length;
  var counter = document.querySelector('[data-slide-count]');
  var prevBtn = document.querySelector('[data-slide-prev]');
  var nextBtn = document.querySelector('[data-slide-next]');
  var nextChapter = stage.getAttribute('data-next-chapter');   // e.g. "personio-pivot.html"
  var prevChapter = stage.getAttribute('data-prev-chapter');   // e.g. "personio-cover.html"

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function indexOfSlide(target) {
    for (var i = 0; i < slides.length; i++) if (slides[i] === target) return i;
    return -1;
  }

  function show(index) {
    if (index < 0) index = 0;
    if (index >= total) index = total - 1;
    slides.forEach(function (s, i) {
      s.classList.toggle('is-active', i === index);
    });
    if (counter) counter.textContent = pad(index + 1) + ' / ' + pad(total);

    // prev
    if (prevBtn) {
      if (index === 0) {
        prevBtn.setAttribute('href', prevChapter || 'personio-cover.html');
        prevBtn.removeAttribute('aria-disabled');
        prevBtn.setAttribute('aria-label', 'Back to cover');
      } else {
        prevBtn.setAttribute('href', '#' + pad(index));      // previous slide hash
        prevBtn.removeAttribute('aria-disabled');
        prevBtn.setAttribute('aria-label', 'Previous slide');
      }
    }
    // next
    if (nextBtn) {
      if (index >= total - 1) {
        if (nextChapter) {
          nextBtn.classList.remove('is-disabled');
          nextBtn.removeAttribute('aria-disabled');
          nextBtn.setAttribute('href', nextChapter);
          nextBtn.setAttribute('aria-label', 'Next chapter');
        } else {
          nextBtn.classList.add('is-disabled');
          nextBtn.setAttribute('aria-disabled', 'true');
          nextBtn.removeAttribute('href');
        }
      } else {
        nextBtn.classList.remove('is-disabled');
        nextBtn.removeAttribute('aria-disabled');
        nextBtn.setAttribute('href', '#' + pad(index + 2));
      }
    }

    var hash = '#' + pad(index + 1);
    if (location.hash !== hash) history.replaceState(null, '', hash);
  }

  function indexFromHash() {
    var h = (location.hash || '').replace('#', '');
    var n = parseInt(h, 10);
    if (isNaN(n)) return 0;
    return Math.max(0, Math.min(total - 1, n - 1));
  }

  show(indexFromHash());

  window.addEventListener('hashchange', function () { show(indexFromHash()); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    var current = indexFromHash();
    if (e.key === 'ArrowLeft') {
      if (current === 0) {
        location.href = prevChapter || 'personio-cover.html';
      } else {
        e.preventDefault();
        show(current - 1);
      }
    } else {
      if (current < total - 1) {
        e.preventDefault();
        show(current + 1);
      } else if (nextChapter) {
        location.href = nextChapter;
      }
    }
  });
})();
