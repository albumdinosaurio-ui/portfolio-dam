(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");
  const navigationLinks = [...document.querySelectorAll(".site-nav a")];

  // Menú desplegable para pantallas pequeñas.
  if (menuButton && navigation) {
    const closeMenu = () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      navigation.classList.toggle("is-open", !isOpen);
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    });

    navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = navigation.contains(event.target) || menuButton.contains(event.target);
      if (!clickedInsideMenu) closeMenu();
    });
  }

  // Marca en el menú la sección que se encuentra en pantalla.
  if ("IntersectionObserver" in window && navigationLinks.length > 0) {
    const sections = document.querySelectorAll("main section[id]");
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const currentId = `#${entry.target.id}`;
        navigationLinks.forEach((link) => {
          if (link.getAttribute("href") === currentId) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, {
      rootMargin: "-34% 0px -56% 0px",
      threshold: 0
    });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // El año del footer se mantiene actualizado sin editar el HTML.
  const yearElement = document.querySelector("#current-year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
})();
