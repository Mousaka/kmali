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

    // Close all panels first (single-open accordion)
    accordionBtns.forEach(otherBtn => {
      const otherPanel = document.getElementById(otherBtn.getAttribute('aria-controls'));
      otherBtn.setAttribute('aria-expanded', 'false');
      otherPanel.setAttribute('aria-hidden', 'true');
    });

    // Toggle the clicked panel (if it was closed, open it)
    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
    }
  });
});
