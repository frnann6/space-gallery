// navbar
window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav-bg");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
