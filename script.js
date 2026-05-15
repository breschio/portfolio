/* ============================================================
   bresch.io — v3 · vanilla js
   theme toggle · mobile drawer · intersection reveals
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ---------- theme ----------
  var THEME_KEY = 'theme';
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return systemDark.matches ? 'dark' : 'light';
  }

  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', theme === 'dark' ? '#14130F' : '#F8F5EC');
    if (persist) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-theme-toggle]'), function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    });
  });

  if (systemDark.addEventListener) {
    systemDark.addEventListener('change', function (e) {
      var stored = null;
      try { stored = localStorage.getItem(THEME_KEY); } catch (err) {}
      if (stored !== 'light' && stored !== 'dark') {
        applyTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  }

  // ---------- mobile drawer ----------
  var drawer = document.getElementById('drawer');
  var drawerToggles = document.querySelectorAll('[data-drawer-toggle]');
  var lastFocus = null;

  function openDrawer() {
    if (!drawer) return;
    lastFocus = document.activeElement;
    body.classList.add('drawer-open');
    Array.prototype.forEach.call(drawerToggles, function (t) { t.setAttribute('aria-expanded', 'true'); });
    var first = drawer.querySelector('a, button');
    if (first) first.focus({ preventScroll: true });
  }

  function closeDrawer() {
    if (!drawer) return;
    body.classList.remove('drawer-open');
    Array.prototype.forEach.call(drawerToggles, function (t) { t.setAttribute('aria-expanded', 'false'); });
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  Array.prototype.forEach.call(drawerToggles, function (t) {
    t.addEventListener('click', function () {
      body.classList.contains('drawer-open') ? closeDrawer() : openDrawer();
    });
  });

  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeDrawer();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('drawer-open')) closeDrawer();
  });

  var mqDesktop = window.matchMedia('(min-width: 961px)');
  if (mqDesktop.addEventListener) {
    mqDesktop.addEventListener('change', function (e) {
      if (e.matches && body.classList.contains('drawer-open')) closeDrawer();
    });
  }

  // ---------- intersection reveals ----------
  var reveals = document.querySelectorAll('.reveal');

  if (prefersReducedMotion.matches) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-in'); });
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-in'); });
  }

  // ---------- media play stub ----------
  // a real video element can hook in later. for now, dismissing the play
  // UI lets the gif speak for itself.
  var mediaPlay = document.querySelector('[data-media-play]');
  if (mediaPlay) {
    mediaPlay.addEventListener('click', function () {
      mediaPlay.style.transition = 'opacity 240ms cubic-bezier(0.22, 0.61, 0.36, 1)';
      mediaPlay.style.opacity = '0';
      mediaPlay.style.pointerEvents = 'none';
      var media = mediaPlay.closest('[data-media]');
      if (media) {
        var progress = media.querySelector('.media-progress');
        if (progress) progress.style.setProperty('--progress', '100%');
      }
    });
  }

  // ---------- scroll-spy (index scroll-through) ----------
  // Watches .project-page sections, updates the sticky topbar's breadcrumb +
  // pager + the active state on rail/drawer children as the user scrolls.
  var projects = Array.prototype.slice.call(document.querySelectorAll('[data-project]'));
  if (projects.length > 1) {
    var crumbCurrent = document.querySelector('[data-current-project]');
    var pagerCount = document.querySelector('[data-pager-count]');
    var pagerPrev = document.querySelector('[data-pager-prev]');
    var pagerNext = document.querySelector('[data-pager-next]');
    var spyTargets = document.querySelectorAll('[data-scrollspy-target]');
    var total = projects.length;
    var pad2 = function (n) { return n < 10 ? '0' + n : String(n); };

    function setActiveProject(project) {
      var idx = parseInt(project.dataset.projectIndex, 10);
      var name = project.dataset.projectName;
      var id = project.id;

      if (crumbCurrent) crumbCurrent.textContent = name;
      if (pagerCount) pagerCount.textContent = pad2(idx) + ' / ' + pad2(total);

      // prev arrow
      if (pagerPrev) {
        if (idx <= 1) {
          pagerPrev.classList.add('is-disabled');
          pagerPrev.setAttribute('aria-disabled', 'true');
          pagerPrev.removeAttribute('href');
        } else {
          var prevProj = projects[idx - 2];
          pagerPrev.classList.remove('is-disabled');
          pagerPrev.removeAttribute('aria-disabled');
          pagerPrev.setAttribute('href', '#' + prevProj.id);
        }
      }
      // next arrow
      if (pagerNext) {
        if (idx >= total) {
          pagerNext.classList.add('is-disabled');
          pagerNext.setAttribute('aria-disabled', 'true');
          pagerNext.removeAttribute('href');
        } else {
          var nextProj = projects[idx];
          pagerNext.classList.remove('is-disabled');
          pagerNext.removeAttribute('aria-disabled');
          pagerNext.setAttribute('href', '#' + nextProj.id);
        }
      }

      // rail/drawer active state
      Array.prototype.forEach.call(spyTargets, function (t) {
        if (t.dataset.scrollspyTarget === id) t.classList.add('is-active');
        else t.classList.remove('is-active');
      });
    }

    // Use rootMargin to fire when project crosses the middle band of viewport.
    var spyObserver = new IntersectionObserver(function (entries) {
      // Pick the entry with the largest intersection ratio in this batch.
      var best = null;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
        }
      });
      if (best) setActiveProject(best.target);
    }, { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });

    projects.forEach(function (p) { spyObserver.observe(p); });

    // arrow-key navigation between projects (skip if user is typing).
    // CSS handles the snap + smooth-scroll natively — we just trigger the anchor jump.
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      var t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      var target = e.key === 'ArrowLeft' ? pagerPrev : pagerNext;
      var href = target && target.getAttribute('href');
      if (!href) return;
      e.preventDefault();
      var el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Set initial state from current hash or first project.
    var initialId = (location.hash || '').replace('#', '');
    var initial = projects[0];
    if (initialId) {
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === initialId) { initial = projects[i]; break; }
      }
    }
    setActiveProject(initial);
  }

  // ---------- copy-link affordance (blog share row) ----------
  Array.prototype.forEach.call(document.querySelectorAll('[data-copy-link]'), function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var original = link.textContent;
      var done = function () {
        link.textContent = 'copied';
        setTimeout(function () { link.textContent = original; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).then(done, done);
      } else {
        // legacy fallback
        var ta = document.createElement('textarea');
        ta.value = window.location.href;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });
})();
