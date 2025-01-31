function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
