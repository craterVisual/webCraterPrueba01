document.addEventListener("DOMContentLoaded", () => {
  const carrusels = document.querySelectorAll(".carrusel");

  for (let i = 0; i < carrusels.length; i++) {
    const carrusel = carrusels[i];

    if (carrusel) {
      console.log(carrusel);

      let isDragging = false;
      let startX, scrollLeft;

      carrusel.addEventListener("mousedown", (e) => {
        if (e.target.tagName === "LABEL") return;

        isDragging = true;
        carrusel.classList.add("dragging");
        startX = e.pageX - carrusel.offsetLeft;
        scrollLeft = carrusel.scrollLeft;
      });

      carrusel.addEventListener("mouseleave", () => {
        isDragging = false;
        carrusel.classList.remove("dragging");
      });

      carrusel.addEventListener("mouseup", () => {
        isDragging = false;
        carrusel.classList.remove("dragging");
      });

      carrusel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carrusel.offsetLeft;
        const walk = (x - startX) * 1; // Velocidad de arrastre
        carrusel.scrollLeft = scrollLeft - walk;
      });
    } else {
      console.error("No se encontró el elemento con la clase .carrusel");
    }
  }
});
