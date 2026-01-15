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
  { name: "Jupiter", slug: "jupiter", img: "planet-images/jupiter.jpg" },
  { name: "Saturnus", slug: "saturn", img: "planet-images/Saturnus.jpg" },
  { name: "Uranus", slug: "uranus", img: "planet-images/uranus.jpg" },
  { name: "Neptunus", slug: "neptune", img: "planet-images/neptunus.jpg" },
];

const Blogs = document.getElementById("planetBlogs");

planets.forEach((planet) => {
  Blogs.innerHTML += `
    <div class="col-12 col-md-4">
      <div class="blogs-card p-2 text-center rounded-4 planet-box" data-slug="${planet.slug}" data-name="${planet.name}">
        <img src="${planet.img}" class="img-fluid rounded-4" alt="${planet.name}">
        <h5 class="text-light fw-bold text-center ps-2 mt-3">${planet.name} <span class="arrow">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0"
            viewBox="0 0 448 512" class="ms-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
          </svg>
</span>
</h5>
      </div>
    </div>
  `;
});

// cek
planets.forEach((planet) => {
  console.log(planet);
});
