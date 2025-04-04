// ======= Mobile Menu Toggle =======
function toggleMobileMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("menu-enter");
}

// ======= Hide Menu on Link Click (Mobile Only) =======
const menu = document.getElementById("menu");
const links = menu.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      menu.classList.add("hidden");
    }
  });
});

// ======= Dark Mode Toggle =======
const themeToggle = document.getElementById("themeToggle");
const iconSun = document.getElementById("iconSun");
const iconMoon = document.getElementById("iconMoon");

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains("dark");
  iconSun.style.display = isDark ? "block" : "none";
  iconMoon.style.display = isDark ? "none" : "block";
}

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  updateThemeIcon();
});

updateThemeIcon(); // initial icon setup

// ======= Active Link on Scroll =======
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    const offsetTop = section.offsetTop - 80;
    const offsetBottom = offsetTop + section.offsetHeight;

    if (scrollY >= offsetTop && scrollY < offsetBottom) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
});
