// planets detail page data and renderer
const planets = [
  {
    slug: "mercury",
    nama: "Merkurius",
    date: "January 13",
    year: 2026,
    img: "planet-images/mercury.jpg",
    pendahuluan:
      "Sebagai planet yang paling dekat dengan Matahari, planet Merkurius mempunyai banyak keunikan di dalamnya. Bentuk serta ukurannya mirip sekali dengan Bulan. Selain itu, ketika revolusi atau mengitari Matahari dan juga rotasinya (berputar pada porosnya) sangat jauh dan lama, berbeda dengan Bumi.",
    facts: [
      {
        title: "Merkurius adalah Planet Terdekat dari Matahari",
        paragraf: [
          "Merkurius merupakan planet yang paling dekat dengan Matahari, dengan jarak rata-rata sekitar 58 juta kilometer. Karena jaraknya yang sangat dekat ini, Merkurius mengelilingi Matahari jauh lebih cepat dibanding planet lain. Satu tahun di Merkurius hanya berlangsung sekitar 88 hari Bumi, jadi kalau kamu tinggal di sana, ulang tahunmu bakal datang lebih sering.",
          "Namun, jarak yang dekat dengan Matahari tidak berarti Merkurius selalu panas sepanjang waktu. Kedekatan ini memang membuat siang hari di Merkurius sangat ekstrem, tapi kondisi planet ini ternyata jauh lebih rumit dan penuh kejutan dibanding yang banyak orang bayangkan.",
        ],
      },
      {
        title: "Perbedaan Suhu Paling Ekstrem",
        paragraf: [
          "Merkurius memegang rekor sebagai planet dengan perbedaan suhu paling ekstrem di Tata Surya. Saat siang hari, suhu permukaannya bisa mencapai sekitar 430°C, cukup panas untuk melelehkan timah. Tapi saat malam tiba, suhu bisa turun drastis hingga sekitar -180°C, jauh lebih dingin dari Antarktika.",
          "Hal ini terjadi karena Merkurius hampir tidak memiliki atmosfer. Tanpa atmosfer yang cukup tebal, panas dari Matahari tidak bisa disimpan. Akibatnya, panas langsung hilang saat malam, membuat Merkurius seperti “dipanggang” dan “dibekukan” secara bergantian.",
        ],
      },
      {
        title: "Merkurius Hampir Tidak Memiliki Atmosfer",
        paragraf: [
          "Berbeda dengan Bumi, Merkurius tidak punya atmosfer tebal yang bisa melindungi permukaannya. Yang dimilikinya hanyalah lapisan gas yang sangat tipis, disebut eksosfer. Lapisan ini terbentuk dari partikel-partikel yang terlepas dari permukaan akibat hantaman meteorit dan radiasi Matahari.",
          "Karena atmosfernya sangat tipis, Merkurius tidak mampu melindungi diri dari benda luar angkasa. Itulah sebabnya permukaan Merkurius dipenuhi kawah, mirip seperti Bulan. Hampir tidak ada proses alam seperti angin atau hujan yang bisa menghapus bekas tumbukan tersebut.",
        ],
      },
      {
        title: "Satu Hari di Merkurius Lebih Lama dari Satu Tahunnya",
        paragraf: [
          "Di Merkurius, satu hari terasa sangat lama. Planet ini berputar sangat lambat pada porosnya. Satu hari Matahari di Merkurius—dari satu matahari terbit ke matahari terbit berikutnya—berlangsung sekitar 176 hari Bumi.",
          "Yang menarik, satu tahun Merkurius hanya 88 hari Bumi. Artinya, satu hari di Merkurius lebih panjang dari satu tahunnya sendiri. Fenomena unik ini terjadi karena kombinasi rotasi yang lambat dan orbit yang cepat mengelilingi Matahari.",
        ],
      },
      {
        title: "Merkurius Punya Medan Magnet ",
        paragraf: [
          "Meskipun ukurannya kecil dan tampak “mati”, Merkurius ternyata memiliki medan magnet sendiri. Ini cukup mengejutkan karena medan magnet biasanya dihasilkan oleh inti planet yang aktif, seperti yang dimiliki Bumi. Penemuan ini menunjukkan bahwa bagian dalam Merkurius masih memiliki inti besi cair.",
          "Medan magnet Merkurius memang jauh lebih lemah dibanding Bumi, tetapi keberadaannya membantu ilmuwan memahami struktur internal planet ini. Fakta ini juga menunjukkan bahwa Merkurius bukan sekadar batu mati, melainkan planet dengan sejarah dan dinamika internal yang kompleks.",
        ],
      },
    ],
  },
  {
    slug: "venus",
    nama: "Venus",
    date: "january 13",
    year: 2026,
    img: "planet-images/venus.jpg",
    pendahuluan:
      "Venus merupakan planet kedua dari Matahari. Venus sering disebut sebagai planet kembaran Bumi karena ukurannya hampir sama. Namun jangan tertipu oleh kemiripannya itu. Di balik tampilannya yang indah dan terang di langit malam, Venus justru merupakan salah satu planet paling ekstrem dan tidak ramah di Tata Surya. Banyak hal di Venus berjalan “terbalik” dibanding Bumi, dan itulah yang membuat planet ini sangat menarik untuk dipelajari.",
    facts: [
      {
        title: "Venus adalah Planet Terpanas di Tata Surya",
        paragraf: [
          "Meskipun bukan planet yang paling dekat dengan Matahari, Venus justru menjadi planet terpanas di Tata Surya. Suhu permukaannya bisa mencapai sekitar 465°C, cukup panas untuk melelehkan logam seperti timah. Yang mengejutkan, suhu ini hampir sama di seluruh permukaan Venus, baik siang maupun malam.",
          "Penyebabnya adalah atmosfer Venus yang sangat tebal dan kaya karbon dioksida. Atmosfer ini menciptakan efek rumah kaca ekstrem, yang menjebak panas Matahari dan tidak membiarkannya keluar. Jadi, sekali panas masuk, panas itu terperangkap selamanya.",
        ],
      },
      {
        title: "Atmosfer Venus Sangat Tebal dan Beracun",
        paragraf: [
          "Atmosfer Venus terdiri hampir seluruhnya karbon dioksida, dengan awan tebal asam sulfat yang menyelimuti planet ini. Awan tersebut memantulkan cahaya Matahari dengan sangat baik, sehingga Venus tampak terang jika dilihat dari Bumi. Namun di balik keindahannya, atmosfer ini sangat berbahaya",
          "Tekanan udara di permukaan Venus sekitar 90 kali lebih besar daripada Bumi, setara dengan tekanan di kedalaman hampir 1 km di bawah laut Bumi. Jika manusia berada di sana, tubuhnya akan hancur bahkan sebelum panasnya terasa",
        ],
      },
      {
        title: "Venus Berputar Terbalik Dibanding Planet Lain",
        paragraf: [
          "Venus memiliki arah rotasi yang sangat aneh. Jika kebanyakan planet berputar dari barat ke timur, Venus justru berputar dari timur ke barat. Artinya, jika kamu berdiri di Venus, Matahari akan terbit dari barat dan terbenam di timur.",
          "Para ilmuwan menduga rotasi terbalik ini mungkin disebabkan oleh tabrakan besar di masa lalu atau efek atmosfer tebal yang memengaruhi rotasi planet. Hingga kini, penyebab pastinya masih menjadi misteri yang terus diteliti.",
        ],
      },
      {
        title: "Satu Hari di Venus Lebih Panjang dari Satu Tahunnya",
        paragraf: [
          "Venus berputar sangat lambat pada porosnya. Satu hari di Venus (satu kali rotasi penuh) berlangsung sekitar 243 hari Bumi. Sementara itu, Venus hanya membutuhkan 225 hari Bumi untuk mengelilingi Matahari satu kali.",
          "Artinya, satu hari di Venus lebih lama daripada satu tahunnya sendiri. Ini membuat siklus siang dan malam di Venus sangat ekstrem, dengan periode siang yang sangat panjang dan panas.",
        ],
      },
      {
        title: "Venus Dipenuhi Aktivitas Vulkanik",
        paragraf: [
          "Permukaan Venus dipenuhi oleh ribuan gunung berapi, lebih banyak dibanding planet mana pun di Tata Surya. Banyak bukti menunjukkan bahwa Venus masih aktif secara geologis hingga relatif baru, dan mungkin masih memiliki letusan gunung berapi hingga sekarang.",
          "Lava dari aktivitas vulkanik ini dipercaya ikut membentuk atmosfer Venus yang kaya karbon dioksida. Tanpa adanya proses seperti lempeng tektonik di Bumi untuk “membuang” gas tersebut, panas dan gas terus menumpuk, membuat Venus menjadi planet ekstrem seperti sekarang.",
        ],
      },
    ],
  },
  {
    slug: "earth",
    nama: "Bumi",
    date: "January 6",
    year: 2026,
    img: "planet-images/bumi.jpg",
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
    date: "January 14",
    year: 2026,
    img: "planet-images/mars.jpg",
    pendahuluan:
      "Mars dikenal sebagai Planet merah, bukan hanya karena warnanya yang mencolok, tetapi juga karena planet ini menyimpan banyak petunjuk tentang masa lalu Tata Surya, bahkan kemungkinan kehidupan",
    facts: [
      {
        title: 'Warna merah Mars Berasal dari "Karat"',
        paragraf: [
          "Warna merah khas Mars berasal dari oksida besi di permukaannya—secara sederhana, Mars dipenuhi debu yang mirip karat. Ketika besi bereaksi dengan oksigen selama jutaan tahun, terbentuklah lapisan debu merah yang menyelimuti hampir seluruh planet.",
          "Debu ini sangat halus dan mudah terangkat oleh angin. Akibatnya, badai debu di Mars bisa berlangsung berminggu-minggu bahkan menutupi seluruh planet, membuat Mars terlihat semakin merah jika diamati dari luar angkasa.",
        ],
      },
      {
        title: "Mars Pernah Memiliki Air Mengalir di Permukaannya",
        paragraf: [
          "Bukti ilmiah menunjukkan bahwa Mars di masa lalu pernah memiliki sungai, danau, bahkau lautan. Jejak saluran air kuno, delta sungai, dan mineral yang hanya terbentuk di lingkungan basah telah ditemukan oleh berbagai wahana antariksa",
          "Hal ini menandakan bahwa Mars dulu jauh lebih hangat dan memiliki atmosfer lebih tebal. Meski sekarang air cair hampir tidak mungkin bertahan lama di permukaan, sebagian besar air Mars diyakini masih tersimpan dalam bentuk es di bawah tanah dan kutub planet",
        ],
      },
      {
        title: "Mars Memiliki Gunung Tertinggi di Tata Surya",
        paragraf: [
          "Mars adalah rumah bagi Olympus Mons, gunung berapi terbesar dan tertinggi di Tata Surya. Tingginya sekitar 22km, hampir tiga kali lipat Gunung Everest. Lebarnya pun luar biasa, dengan diameter mencapai ratusan kilometer.",
          "Gunung ini bisa tumbuh sebesar itu karena gravitasi Mars lebih lemah dan tidak adanya lempeng tektonik seperti di Bumi. Akibatnya, lava terus menumpuk di satu titik selama jutaan tahun tanpa “tergeser” ke tempat lain.",
        ],
      },
      {
        title: "Atmosfer Mars Sangat Tipis dan Tidak Stabil",
        paragraf: [
          "Atmosfer Mars sangat tipis, hanya sekitar 1% dari ketebalan atmosfer Bumi. Komposisinya didominasi karbon dioksida, dengan tekanan udara yang terlalu rendah untuk mempertahankan air cair dalam waktu lama.",
          "Karena atmosfernya tipis, Mars tidak memiliki perlindungan yang cukup dari radiasi Matahari dan kosmik. Inilah salah satu alasan mengapa air dan panas Mars perlahan menghilang ke luar angkasa selama miliaran tahun.",
        ],
      },
      {
        title: "Mars adalah Target Utama Kolonisasi Manusia",
        paragraf: [
          "Dibanding planet lain, Mars dianggap sebagai planet paling realistis untuk dihuni manusia di masa depan. Panjang harinya mirip Bumi (sekitar 24,6 jam), dan terdapat air dalam bentuk es yang bisa dimanfaatkan.",
          "Meski begitu, hidup di Mars tidak akan mudah. Tantangan seperti radiasi tinggi, suhu ekstrem, dan atmosfer tipis harus diatasi dengan teknologi canggih. Namun bagi ilmuwan, Mars adalah langkah pertama manusia untuk menjadi spesies antarplanet.",
        ],
      },
    ],
  },
  {
    slug: "jupiter",
    nama: "Jupiter",
    date: "January 14",
    year: 2026,
    img: "planet-images/jupiter.jpg",
    pendahuluan:
      'Jupiter adalah planet terbesar di Tata Surya dan sering dijuluki sebagai "raja planet". Ukurannya yang masif membuatnya berperan besar dalam menjaga keseimbangan Tata Surya. Meski terlihat indah dengan pola awannya yang berwarna-warni, Jupiter adalah dunia gas yang penuh badai dahsyat dan tekanan ekstrem yang tak terbayangkan',
    facts: [
      {
        title: "Bintik Merah Besar adalah Badai Raksasa yang Tak Pernah Padam",
        paragraf: [
          "Salah satu ciri paling terkenal Jupiter adalah Great Red Spot, badai raksasa yang sudah berlangsung lebih dari 300 tahun. Ukurannya sangat besar—bahkan cukup luas untuk “menelan” Bumi sekaligus. Angin di dalam badai ini bisa mencapai kecepatan ratusan kilometer per jam.",
          "Yang membuatnya luar biasa, badai ini tidak menunjukkan tanda-tanda akan hilang dalam waktu dekat. Meski ukurannya perlahan menyusut, energi di atmosfer Jupiter terus menjaga badai ini tetap hidup selama berabad-abad.",
        ],
      },
      {
        title: "Jupiter Memiliki Medan Magnet Terkuat di Tata Surya",
        paragraf: [
          "Medan magnet Jupiter adalah yang paling kuat di antara semua planet. Kekuatan magnetnya begitu besar hingga membentuk wilayah pelindung raksasa bernama magnetosfer, yang bahkan jauh lebih besar daripada Matahari jika bisa dilihat secara kasat mata.",
          "Medan magnet ini memerangkap partikel berenergi tinggi yang berbahaya. Jika manusia berada terlalu dekat tanpa perlindungan, radiasinya bisa sangat mematikan. Namun, di sisi lain, medan ini juga menciptakan aurora yang jauh lebih kuat dibanding aurora di Bumi",
        ],
      },
      {
        title: "Jupiter Bisa Menampung Puluhan Planet Seukuran Bumi",
        paragraf: [
          "Ukuran Jupiter benar-benar luar biasa. Volume Jupiter cukup besar untuk menampung lebih dari 1.300 Bumi di dalamnya. Jika dibandingkan dengan planet lain, Jupiter sendiri sudah memiliki massa lebih besar daripada gabungan semua planet lain di Tata Surya.",
          "Meski sangat besar, Jupiter masih belum cukup masif untuk menjadi bintang. Ia kekurangan massa sekitar 80 kali lipat untuk memicu reaksi fusi nuklir seperti Matahari.",
        ],
      },
      {
        title: "Sistem Bulan Jupiter seperti Tata Surya Mini",
        paragraf: [
          "Jupiter memiliki lebih dari 90 bulan, dengan empat bulan utamanya—Io, Europa, Ganymede, dan Callisto—dikenal sebagai Bulan Galilea. Keempatnya sangat berbeda satu sama lain dan memiliki karakter unik.",
          "Europa, misalnya, diyakini memiliki lautan air asin di bawah lapisan esnya, sementara Io adalah benda paling aktif secara vulkanik di Tata Surya. Sistem bulan ini sering dianggap sebagai “laboratorium alami” untuk mempelajari pembentukan planet dan potensi kehidupan.",
        ],
      },
      {
        title: "Jupiter Berperan sebagai Pelindung Tata Surya Dalam",
        paragraf: [
          "Karena massanya yang sangat besar, Jupiter berfungsi seperti tameng gravitasi. Planet ini mampu menarik atau membelokkan asteroid dan komet yang berpotensi mengancam planet bagian dalam, termasuk Bumi.",
          "Namun perannya tidak selalu sepenuhnya melindungi. Dalam beberapa kondisi, gravitasi Jupiter justru bisa mengarahkan objek luar angkasa ke jalur yang lebih berbahaya. Meski begitu, tanpa Jupiter, sejarah tabrakan di Tata Surya—termasuk di Bumi—kemungkinan akan jauh lebih brutal.",
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
          <h5 class="text-white title">${index + 1}. ${fact.title}</h5>
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
