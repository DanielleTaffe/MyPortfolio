/* Danielle Taffe portfolio — interactions
   - Sticky header shadow on scroll
   - Scroll reveal (IntersectionObserver)
   - Copy email button (with "Copied" state)
   - Active nav link based on current page
*/

(function () {
  // -------- Header: add .scrolled when not at top --------
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // -------- Active nav link --------
  const path = window.location.pathname.replace(/\/index\.html?$/, '/').replace(/\.html?$/, '');
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const normalized = href.replace(/\.html?$/, '').replace(/\/index$/, '/');
    if (
      (normalized === '/' && (path === '/' || path === '')) ||
      (normalized !== '/' && normalized !== '' && path.endsWith(normalized))
    ) {
      a.classList.add('is-active');
    }
  });

  // -------- Scroll reveal --------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

  // -------- Copy email button --------
  document.querySelectorAll('[data-copy-email]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = btn.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
      } catch (e) {
        // Fallback: select a hidden textarea
        const ta = document.createElement('textarea');
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        ta.remove();
      }
      btn.classList.add('is-copied');
      clearTimeout(btn._t);
      btn._t = setTimeout(() => btn.classList.remove('is-copied'), 1800);
    });
  });
})();
