/* ============================================================
   Katja Mali — Landscape Architect
   script.js
   ============================================================ */

// --- Footer year ---------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// --- Accordion navigation ------------------------------------
const accordionBtns = document.querySelectorAll('.accordion-btn');

// Initialise all panels as hidden
document.querySelectorAll('.accordion-panel').forEach(panel => {
  panel.setAttribute('aria-hidden', 'true');
});

accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(btn.getAttribute('aria-controls'));

    // Toggle the clicked panel independently
    btn.setAttribute('aria-expanded', String(!isExpanded));
    panel.setAttribute('aria-hidden', String(isExpanded));
  });
});
