  function toggleMobileMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  }

  const menu = document.getElementById("menu");
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden"); // hide menu after click
    });
  });
