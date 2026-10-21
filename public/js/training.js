/**
 * Comportamento da plataforma de training (paulaallemand.com/training).
 * Sprint 1: só o acordeão de níveis. Login real (Google Identity Services)
 * e progresso entram no Sprint 2/3 — ver Plataforma-paulaallemand-training-Plano.md.
 */
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("[data-level-toggle]");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const accordion = toggle.closest(".level-accordion");
      if (!accordion) return;
      accordion.classList.toggle("is-open");
    });
  });
});
