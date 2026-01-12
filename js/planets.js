// planets detail page data and renderer
const planets = [
  {
    slug: "mercury",
    nama: "Merkurius",
    date: "January",
    year: 2026,
    img: "planet-img/mercury.jpg",
    pendahuluan:
      "Merkurius adalah planet paling dekat dengan Matahari dan memiliki permukaan berbatu penuh kawah.",
    facts: [
      {
        title: "Ukuran dan Orbit",
        paragraf: [
          "Merkurius adalah planet terkecil di tata surya dan membutuhkan sekitar 88 hari untuk menyelesaikan satu orbit mengelilingi Matahari.",
        ],
      },
      {
        title: "Suhu Ekstrem",
        paragraf: [
          "Merkurius mengalami suhu siang dan malam yang sangat ekstrem karena hampir tidak memiliki atmosfer penahan panas.",
        ],
      },
    ],
  },
  {
    slug: "venus",
    nama: "Venus",
    date: "january",
    year: 2026,
    img: "planet-img/venus.jpg",
    pendahuluan:
      "Venus adalah saudara dekat Bumi dalam ukuran tetapi memiliki atmosfer yang sangat tebal dan suhu permukaan yang sangat tinggi.",
    facts: [
      {
        title: "Efek Rumah Kaca",
        paragraf: [
          "Atmosfer Venus mengandung CO2 dalam jumlah besar sehingga menyebabkan efek rumah kaca yang ekstrem.",
        ],
      },
      {
        title: "Rotasi Lambat",
        paragraf: [
          "Venus berotasi sangat lambat dan berputar ke arah yang berlawanan dibanding planet kebanyakan.",
        ],
      },
    ],
  },
  {
    slug: "earth",
    nama: "Bumi",
    date: "January 6",
    year: 2026,
    img: "planets-blog/bumi-blog.jpg",
    pendahuluan:
      "Tahukah kamu, kalau bumi adalah planet ketiga dari Matahari dan satu-satunya planet yang diketahui mendukung kehidupan di alam semesta. Bumi menyimpan banyak fakta menarik yang perlu untuk diketahui. Mari simak bersama!",
    facts: [
      {
        title: "Bentuk Bumi Tidak Bulat Sempurna",
        paragraf: [
          "Kalau kamu bayangin Bumi itu kayak bola basket yang mulus dan simetris, sebenarnya itu kurang tepat. Bumi sedikit gepeng di bagian kutub dan malah agak “gendut” di area khatulistiwa. Ini terjadi karena Bumi terus berputar, dan putaran itu bikin massanya terdorong ke tengah. Jadi, bagian tengahnya melebar sedikit dibandingkan ujung-ujungnya.",
          "Meski terlihat sepele, bentuk Bumi yang tidak sepenuhnya bulat ini punya peran penting dalam kehidupan modern. Perhitungan orbit satelit, pemetaan digital, sampai sistem navigasi seperti GPS semuanya bergantung pada bentuk asli Bumi. Kalau bentuk ini diabaikan, hasil perhitungan jarak dan posisi bisa meleset cukup jauh.",
        ],
      },
      {
        title: "Bumi Adalah Planet Air",
        paragraf: [
          "Bumi sering disebut sebagai planet air karena dari luar angkasa permukaannya tampak dominan oleh warna biru air yang tampak mencakup hampir seluruh sisi planet kita. Secara data resmi, sekitar 70% permukaan Bumi tertutup oleh air, baik dalam bentuk lautan, es, maupun awan, sedangkan daratan hanya sebagian kecil dari total luasnya. Ini membuat Bumi unik di Tata Surya kita.",
        ],
      },
      {
        title: "Samudra Bumi Masih Menyimpan Banyak Misteri",
        paragraf: [
          "Walaupun sebagian besar permukaan Bumi tertutup oleh air, pengetahuan manusia tentang dasar samudra masih sangat terbatas. Tekanan air yang ekstrem, suhu dingin, dan kondisi gelap total membuat eksplorasi laut dalam menjadi tantangan besar. Karena itu, banyak wilayah dasar laut yang hingga sekarang belum pernah benar-benar dijelajahi.",
          "Di kedalaman samudra, para ilmuwan menemukan makhluk hidup yang bisa bertahan tanpa cahaya Matahari dan hidup dari energi kimia alami. Temuan ini membuka cara pandang baru tentang kehidupan dan kemungkinan adanya kehidupan di luar Bumi.",
        ],
      },
      {
        title: "Umur Bumi Mencapai Miliaran Tahun",
        paragraf: [
          "Tahu tidak berapa usia bumi saat ini? Ternyata menurut para peneliti, planet bumi telah berusia sekitar 4,54 miliar tahun!",
          "Bagaimana caranya mereka mengetahuinya? jadi para peneliti menghitung usia bumi batuan tertua di planet ini dan meteorit yang telah ditemukan di bumi. Di dalam batuan tertentu, terutama meteorit, terdapat unsur radioaktif seperti uranium. Unsur ini pelan-pelan berubah menjadi unsur lain (misalnya timbal) dalam waktu yang sangat konsisten. Proses perubahan ini disebut peluruhan radioaktif, dan kecepatannya selalu sama, tidak terpengaruh suhu, tekanan, atau waktu.",
        ],
      },
      {
        title: "Atmosfer Bumi adalah Pelindung Kehidupan",
        paragraf: [
          "Atmosfer Bumi berperan sebagai pelindung utama kehidupan di planet ini. Lapisan ozon yang berada di stratosfer menyerap sebagian besar radiasi ultraviolet (UV) berbahaya dari Matahari, yang jika dibiarkan dapat merusak sel makhluk hidup dan mengganggu ekosistem. Selain itu, atmosfer juga membantu menjaga suhu Bumi tetap stabil melalui efek rumah kaca alami, sehingga suhu ekstrem siang dan malam tidak terlalu jauh berbeda.",
          "Tidak hanya itu, atmosfer Bumi juga berfungsi sebagai perisai dari ancaman luar angkasa. Sebagian besar meteoroid yang memasuki atmosfer akan terbakar akibat gesekan udara sebelum mencapai permukaan, sehingga jarang menimbulkan dampak besar. Tanpa atmosfer, permukaan Bumi akan dipenuhi kawah seperti Bulan, dan kehidupan seperti yang kita kenal saat ini hampir mustahil untuk bertahan.",
        ],
      },
    ],
  },
  {
    slug: "mars",
    nama: "Mars",
    date: "January",
    year: 2026,
    img: "planet-img/mars.jpg",
    pendahuluan:
      "Mars dikenal sebagai ‘planet merah’ dan menjadi target penelitian untuk mencari tanda-tanda kehidupan di masa lalu.",
    facts: [
      {
        title: "Lembah dan Gunung",
        paragraf: [
          "Mars memiliki lembah besar dan gunung berapi terbesar di tata surya, Olympus Mons.",
        ],
      },
      {
        title: "Lapisan Es",
        paragraf: [
          "Di kutub Mars terdapat lapisan es yang mengandung air beku dan es kering (CO2).",
        ],
      },
    ],
  },
  {
    slug: "jupiter",
    nama: "Jupiter",
    date: "January",
    year: 2026,
    img: "planet-img/jupiter.jpg",
    pendahuluan:
      "Jupiter adalah planet terbesar dan memiliki atmosfer berlapis serta badai raksasa bernama Great Red Spot.",
    facts: [
      {
        title: "Gas Raksasa",
        paragraf: [
          "Jupiter sebagian besar terdiri dari hidrogen dan helium, tanpa permukaan padat seperti Bumi.",
        ],
      },
      {
        title: "Banyak Satelit",
        paragraf: [
          "Jupiter memiliki puluhan satelit alami, termasuk empat satelit besar yang ditemukan Galileo.",
        ],
      },
    ],
  },
  {
    slug: "saturn",
    nama: "Saturnus",
    date: "January",
    year: 2026,
    img: "planet-img/Saturnus.jpg",
    pendahuluan:
      "Saturnus terkenal karena cincin-cincinnya yang spektakuler, terbuat dari partikel es dan batuan.",
    facts: [
      {
        title: "Cincin Kompleks",
        paragraf: [
          "Cincin Saturnus terdiri dari banyak sub-cincin dan variasi ukuran partikel.",
        ],
      },
      {
        title: "Kepadatan Rendah",
        paragraf: [
          "Saturnus memiliki kepadatan rendah; jika ada lautan yang cukup besar, ia akan mengapung.",
        ],
      },
    ],
  },
  {
    slug: "uranus",
    nama: "Uranus",
    date: "January",
    year: 2026,
    img: "planet-img/uranus.jpg",
    pendahuluan:
      "Uranus unik karena poros rotasinya hampir sejajar dengan bidang orbit, sehingga berotasi miring.",
    facts: [
      {
        title: "Rotasi Mirip Samping",
        paragraf: [
          "Sumbu Uranus miring hampir 98 derajat, membuat musim yang ekstrem berlangsung puluhan tahun.",
        ],
      },
      {
        title: "Atmosfer Dingin",
        paragraf: [
          "Uranus sangat dingin dengan atmosfer yang mengandung metana yang memberi warna kebiruan.",
        ],
      },
    ],
  },
  {
    slug: "neptune",
    nama: "Neptunus",
    date: "January",
    year: 2026,
    img: "planet-img/neptunus.jpg",
    pendahuluan:
      "Neptunus adalah planet terjauh di tata surya yang kita kenal, dengan angin tercepat di antara planet-planet.",
    facts: [
      {
        title: "Angin Kencang",
        paragraf: [
          "Neptunus memiliki angin supersonik yang dapat mencapai ribuan kilometer per jam.",
        ],
      },
      {
        title: "Warna Biru",
        paragraf: ["Warna biru dipengaruhi oleh metana di atmosfernya."],
      },
    ],
  },
];

// Render the page using query param `planet=slug` (fallback to first if not found)
function renderPlanetDetail() {
  const params = new URLSearchParams(window.location.search);
  const planetSlug = params.get("planet");
  let planet = planets.find((p) => p.slug === planetSlug);
  if (!planet) planet = planets[0];

  // set title and introduction
  const nameEl = document.getElementById("planetName");
  const postEl = document.getElementById("posted");
  const yearEl = document.getElementById("years");
  const introEl = document.getElementById("pendahuluan");
  if (nameEl) nameEl.innerText = planet.nama;
  if (postEl) postEl.innerText = planet.date;
  if (yearEl) yearEl.innerText = planet.year;
  if (introEl) introEl.innerText = planet.pendahuluan;

  // set main image (first img in .col)
  const mainImg = document.querySelector(".col.text-white img");
  if (mainImg) mainImg.src = planet.img;

  // populate facts
  const factsContainer = document.querySelector(".facts");
  if (factsContainer) {
    factsContainer.innerHTML = "";
    planet.facts.forEach((fact, index) => {
      const factHtml = `
        <div class="fact mb-4">
          <h5 class="text-white fw-bold">${index + 1}. ${fact.title}</h5>
          ${fact.paragraf.map((p) => `<p class="text-white">${p}</p>`).join("")}
        </div>
      `;
      factsContainer.innerHTML += factHtml;
    });
  }
}

// Run when on planets-detail page
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", renderPlanetDetail);
}
