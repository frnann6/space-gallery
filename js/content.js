// Content
const contents = [
  {
    judul: "01",
    konten:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusantium possimus quasi voluptatibus.",
  },
  {
    judul: "02",
    konten:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusantium possimus quasi voluptatibus.",
  },
  {
    judul: "03",
    konten:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusantium possimus quasi voluptatibus.",
  },
];

const paragraf = document.getElementById("content");

contents.forEach((content) => {
  paragraf.innerHTML += `
  <div class="col">
    <div class="bg-card p-5 pb-5 rounded-4">
      <h4 class="text-white fw-bold">${content.judul}</h4>
      <p class="text-white">${content.konten}</p>
    </div>
  </div>`;
});

contents.forEach((content) => {
  console.log(content);
});
