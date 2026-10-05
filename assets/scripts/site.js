const yearTargets = document.querySelectorAll('[data-current-year]');
const currentYear = new Date().getFullYear();

yearTargets.forEach((target) => {
  target.textContent = currentYear;
});

