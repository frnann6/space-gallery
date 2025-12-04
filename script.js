window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
