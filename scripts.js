function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

const menu = document.getElementById("menu");
const links = menu.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
