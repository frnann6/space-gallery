// gallery
const planets = [
  {
    name: "Merkurius",
    slug: "mercury",
    img: "planet-images/mercury.jpg",
    date: "January 6 2026",
  },
  { name: "Venus", slug: "venus", img: "planet-images/venus.jpg" },
  { name: "Bumi", slug: "earth", img: "planet-images/bumi.jpg" },
  { name: "Mars", slug: "mars", img: "planet-images/mars.jpg" },
  { name: "Jupiter", slug: "jupiter", img: "img/dark-blue.jpg" },
  { name: "Saturnus", slug: "saturn", img: "planet-images/Saturnus.jpg" },
  { name: "Uranus", slug: "uranus", img: "img/dark-blue.jpg" },
  { name: "Neptunus", slug: "neptune", img: "planet-images/neptunus.jpg" },
];

const gallery = document.getElementById("planetGallery");

planets.forEach((planet) => {
  gallery.innerHTML += `
    <div class="col-12 col-md-4">
      <div class="gallery-card p-2 text-center rounded-4 planet-box" data-slug="${planet.slug}">
        <img src="${planet.img}" class="img-fluid rounded-4" alt="${planet.name}">
        <h5 class="text-light fw-bold text-center ps-2 mt-3">${planet.name}</h5>
      </div>
    </div>
  `;
});

// cek
planets.forEach((planet) => {
  console.log(planet);
});
