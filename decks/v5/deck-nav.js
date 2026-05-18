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

  // Global deck position. Each chapter file declares its starting offset and
  // the total count across all chapters. The pager shows global current/total
  // — so it reads as a single 1-of-33 deck across all three chapter files.
  var chapterStart = parseInt(stage.getAttribute('data-chapter-start') || '1', 10);
  var globalTotal  = parseInt(stage.getAttribute('data-global-total')  || total, 10);

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  // ---- one-time slide setup ----
  // Move the eyebrow tag out of `.slide-topbar` so it appears above the
  // slide title (matches Paper spec). Target preference:
  //   a) `.text-col` (split layout) — eyebrow goes inside text column;
  //   b) parent of `.slide-title` — eyebrow placed just before title.
  // Inline `.counter` elements stay hidden via CSS — only the topbar pager
  // shows the slide number.
  slides.forEach(function (s) {
    var tag = s.querySelector('.slide-topbar .tag');
    if (tag) {
      var textCol = s.querySelector('.text-col');
      var title = s.querySelector('.slide-title');
      if (textCol) {
        textCol.prepend(tag);
      } else if (title && title.parentElement) {
        title.parentElement.insertBefore(tag, title);
      }
      tag.classList.add('slide-eyebrow');
      tag.classList.remove('tag');
    }
  });

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
    if (counter) {
      var globalIdx = chapterStart + index;     // local 0-based + global 1-based start
      counter.textContent = pad(globalIdx) + ' / ' + pad(globalTotal);
    }

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
