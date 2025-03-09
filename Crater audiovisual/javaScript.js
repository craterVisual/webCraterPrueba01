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
}

);
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const imgOrVideo = item.querySelector("img, video");

    if (imgOrVideo) {
      // Simular "hover" para imágenes y videos
      item.addEventListener("touchstart", () => {
        imgOrVideo.style.transform = "scale(1.5)";
        imgOrVideo.style.filter = "grayscale(0)";
      });

      item.addEventListener("touchend", () => {
        imgOrVideo.style.transform = "";
        imgOrVideo.style.filter = "grayscale(1)";
      });

      // Reproducción de video al tocar
      if (imgOrVideo.tagName === "VIDEO") {
        item.addEventListener("touchstart", (e) => {
          e.preventDefault();
          if (imgOrVideo.paused) {
            imgOrVideo.play();
          } else {
            imgOrVideo.pause();
          }
        });
      }
    }
  });

    const botonMenu = document.getElementById("botonMenu");
    const menuNav = document.getElementById("menuNav");
    const logoMovile = document.getElementById("logoMovile");

    if(botonMenu){
        botonMenu.addEventListener("change", ()=>{
            if(botonMenu.checked){
                logoMovile.style.animation = "rotacion 1s ease-in-out";
                menuNav.style.right = "0";
            }else{
                logoMovile.style.animation = "rotacionInversa 1s ease-in-out";
                menuNav.style.right = "-100%";
            }
        });
    }

});