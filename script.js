/* ============================================================
   Katja Mali — Landscape Architect
   script.js
   ============================================================ */

// --- Footer year ---------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// --- Nav: apply .scrolled class on scroll --------------------
const header = document.getElementById('site-header');

function updateNav() {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav(); // run once on load

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
