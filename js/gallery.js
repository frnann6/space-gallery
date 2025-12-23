// gallery
const planets = [
  { name: "Merkurius", img: "img/dark-blue.jpg" },
  { name: "Venus", img: "img/dark-blue.jpg" },
  { name: "Bumi", img: "planet-img/bumi.jpg" },
  { name: "Mars", img: "planet-img/mars.jpg" },
  { name: "Jupiter", img: "img/dark-blue.jpg" },
  { name: "Saturnus", img: "planet-img/Saturnus.jpg" },
  { name: "Uranus", img: "img/dark-blue.jpg" },
  { name: "Neptunus", img: "planet-img/neptunus.jpg" },
];

const gallery = document.getElementById("planetGallery");

planets.forEach((planet) => {
  gallery.innerHTML += `
    <div class="col-12 col-md-4">
      <div class="bg-dark p-1 text-center rounded-4 planet-box">
        <img src="${planet.img}" class="img-fluid rounded-4" alt="${planet.name}">
        <h5 class="text-light mt-3">${planet.name}</h5>
      </div>
    </div>
  `;
});

// cek
planets.forEach((planet) => {
  console.log(planet);
});
