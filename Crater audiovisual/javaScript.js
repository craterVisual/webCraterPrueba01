document.addEventListener("DOMContentLoaded", () => {
  const carrusels = document.querySelectorAll(".carrusel");

  for (let i = 0; i < carrusels.length; i++) {
    const carrusel = carrusels[i];

    if (carrusel) {
      console.log(carrusel);

      let isDragging = false;
      let startX, scrollLeft;

      // Eventos para ratón (web)
      const startDrag = (e) => {
        if (e.target.tagName === "LABEL") return;

        isDragging = true;
        carrusel.classList.add("dragging");
        startX = (e.type === "mousedown" ? e.pageX : e.touches[0].pageX) - carrusel.offsetLeft;
        scrollLeft = carrusel.scrollLeft;
      };

      const endDrag = () => {
        isDragging = false;
        carrusel.classList.remove("dragging");
      };

      const moveDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = ((e.type === "mousemove") ? e.pageX : e.touches[0].pageX) - carrusel.offsetLeft;
        const walk = (x - startX) * 1; // Velocidad de arrastre
        carrusel.scrollLeft = scrollLeft - walk;
      };

      carrusel.addEventListener("mousedown", startDrag);
      carrusel.addEventListener("touchstart", startDrag);

      carrusel.addEventListener("mouseleave", endDrag);
      carrusel.addEventListener("mouseup", endDrag);
      carrusel.addEventListener("touchend", endDrag);

      carrusel.addEventListener("mousemove", moveDrag);
      carrusel.addEventListener("touchmove", moveDrag);

    } else {
      console.error("No se encontró el elemento con la clase .carrusel");
    }
  }
});