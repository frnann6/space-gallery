// Popup detail modal
const planetData = {
  Merkurius: "Planet paling dekat dengan Matahari.",
  Venus: "Planet terpanas karena efek rumah kaca.",
  Bumi: "Satu-satunya planet yang mendukung kehidupan.",
  Mars: "Disebut planet merah.",
  Jupiter: "Planet terbesar di tata surya.",
  Saturnus: "Dikenal dengan cincinnya.",
  Uranus: "Berputar menyamping.",
  Neptunus: "Planet terjauh & sangat dingin.",
};

// Use event delegation so dynamically-inserted .planet-box elements are handled
document.addEventListener("click", (e) => {
  const box = e.target.closest(".planet-box");
  if (!box) return;

  const title = box.querySelector("h5")?.innerText || "";
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
