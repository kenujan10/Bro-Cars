/* ── BRO CARS UK — main.js ── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile hamburger ── */
  const ham = document.getElementById('hamBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  /* ── Active nav link ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Filter tabs (inventory / home) ── */
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('.filter-tabs');
      group.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      const grid = document.querySelector(tab.dataset.target || '#carGrid');
      if (!grid) return;
      grid.querySelectorAll('[data-cat]').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
      });
    });
  });

  /* ── Navbar scroll shadow ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 24px rgba(0,0,0,0.35)'
        : '0 2px 20px rgba(0,0,0,0.3)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Scroll-reveal (intersection observer) ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));
  }

  /* ── Contact form submit ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sent! ✓';
      btn.style.background = '#16a34a';
      setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
    });
  }

  /* ── Newsletter form ── */
  document.querySelectorAll('.footer-sub-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp = btn.previousElementSibling;
      if (inp && inp.value.includes('@')) {
        btn.textContent = 'Subscribed ✓';
        btn.style.background = '#16a34a';
        btn.style.color = '#fff';
        inp.value = '';
      }
    });
  });

});
