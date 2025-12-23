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

document.querySelectorAll(".planet-box").forEach((box) => {
  box.addEventListener("click", () => {
    const title = box.querySelector("h5").innerText;
    const img = box.querySelector("img").src;

    document.getElementById("planetTitle").innerText = title;
    document.getElementById("planetImage").src = img;
    document.getElementById("planetDesc").innerText = planetData[title];

    const modal = new bootstrap.Modal(document.getElementById("planetModal"));
    modal.show();
  });
});
