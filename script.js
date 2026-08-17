document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Pequeno efeito de brilho seguindo o ponteiro, sem interferir na navegação.
  const orb = document.querySelector(".orb");

  if (orb && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("pointermove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      orb.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive: true });
  }
});
