/* ============================================================
   Katja Mali — Landscape Architect
   script.js
   ============================================================ */

// --- Footer year ---------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// --- Mobile sidebar toggle -----------------------------------
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  sidebar.classList.toggle('open');
});

// Close sidebar when a link is clicked (mobile)
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    sidebar.classList.remove('open');
  });
});

// --- Scroll reveal -------------------------------------------
const revealEls = document.querySelectorAll(
  '.project-card, .about-grid, .contact-inner'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger cards slightly when multiple enter together
        const delay = entry.target.classList.contains('project-card')
          ? Array.from(revealEls).indexOf(entry.target) % 3 * 80
          : 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => observer.observe(el));
