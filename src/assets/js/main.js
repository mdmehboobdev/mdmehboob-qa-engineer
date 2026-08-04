/* =============================
   NAV — CHANGE 7
   Sticky scroll shadow + active section highlight
   ============================= */
function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  // Add shadow on scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Active nav link via Intersection Observer
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));
  }
}

/* =============================
   SMOOTH NAV SCROLL
   ============================= */
function initNavScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* =============================
   CONTACT FORM — NETLIFY
   ============================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      });
      btn.textContent = 'Message sent ✓';
      btn.style.background = '#22C55E';
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send message →';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    } catch {
      btn.textContent = 'Failed — try WhatsApp';
      btn.disabled = false;
    }
  });
}

/* =============================
   WHATSAPP BUTTON FROM FORM
   ============================= */
function initWhatsAppForm() {
  const waBtn = document.getElementById('wa-form-btn');
  if (!waBtn) return;

  waBtn.addEventListener('click', () => {
    const name    = document.getElementById('f-name')?.value || '';
    const email   = document.getElementById('f-email')?.value || '';
    const company = document.getElementById('f-company')?.value || '';
    const service = document.getElementById('f-service')?.value || '';
    const message = document.getElementById('f-message')?.value || '';

    const text = `Hi Muhammad! I found you on your portfolio.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Company:* ${encodeURIComponent(company)}%0A*Service needed:* ${encodeURIComponent(service)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/923355976655?text=${text}`, '_blank');
  });
}

/* =============================
   SCROLL REVEAL
   ============================= */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.project-card, .service-card, .cv-stat, .how-step, .tech-group').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* =============================
   TERMINAL TYPING ANIMATION
   ============================= */
function initTerminal() {
  const lines = document.querySelectorAll('.term-line');
  lines.forEach((line, i) => {
    line.style.opacity = '0';
    setTimeout(() => {
      line.style.transition = 'opacity 0.3s ease';
      line.style.opacity = '1';
    }, 300 + i * 180);
  });
}

/* =============================
   INIT
   ============================= */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initNavScroll();
  initContactForm();
  initWhatsAppForm();
  initScrollReveal();
  initTerminal();
});
