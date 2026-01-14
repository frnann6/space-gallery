// Popup detail modal
const planetData = {
  Merkurius:
    "Sebagai planet yang paling dekat dengan Matahari, planet Merkurius mempunyai banyak...",
  Venus:
    "Venus merupakan planet kedua dari Matahari. Venus sering disebut sebagai...",
  Bumi: "Tahukah kamu, kalau bumi adalah planet ketiga dari Matahari dan satu-satunya planet yang...",
  Mars: "Mars dikenal sebagai Planet merah, bukan hanya karena warnanya yang mencolok, tetapi juga karena planet ini...",
  Jupiter:
    'Jupiter adalah planet terbesar di Tata Surya dan sering dijuluki sebagai "raja planet". Ukurannya yang masif membuatnya...',
  Saturnus:
    "Saturnus dikenal sebagai planet paling ikonik di Tata Surya berkat cincin indah yang mengelilinginya. Namun keindahan Saturnus...",
  Uranus: "Berputar menyamping.",
  Neptunus: "Planet terjauh & sangat dingin.",
};

// Use event delegation so dynamically-inserted .planet-box elements are handled
document.addEventListener("click", (e) => {
  const box = e.target.closest(".planet-box");
  if (!box) return;

  const title = box.dataset.name;
  const img = box.querySelector("img")?.src || "";
  const slug = box.dataset.slug || "";

  const titleEl = document.getElementById("planetTitle");
  const imageEl = document.getElementById("planetImage");
  const descEl = document.getElementById("planetDesc");
  if (titleEl) titleEl.innerText = title;
  if (imageEl) imageEl.src = img;
  if (descEl) descEl.innerText = planetData[title] || "";

  // update Read more link
  const readMoreLink = document.querySelector(
    "#planetModal .modal-body a.btn.btn-primary"
  );
  if (readMoreLink && slug) {
    readMoreLink.setAttribute(
      "href",
      `planets-detail.html?planet=${encodeURIComponent(slug)}`
    );
  }

  const modal = new bootstrap.Modal(document.getElementById("planetModal"));
  modal.show();
});
