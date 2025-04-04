<script>
  function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("hidden");
  }

  const menu = document.getElementById("menu");
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        menu.classList.add("hidden");
      }
    });
  });
</script>
