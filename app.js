const menu = {
  drinks: [
    { name: 'House White', description: 'Double espresso, palm sugar and silky fresh milk.', price: 'RM 14' },
    { name: 'Gula Melaka Cold Brew', description: 'Slow-steeped coffee with coconut cream and sea salt.', price: 'RM 16' },
    { name: 'Long Black', description: 'Our rotating single-origin espresso, served clean and bright.', price: 'RM 11' },
    { name: 'Pandan Matcha', description: 'Ceremonial matcha, house pandan syrup and oat milk.', price: 'RM 17' },
    { name: 'Teh Bunga', description: 'Jasmine tea, calamansi and wildflower honey over ice.', price: 'RM 13' },
    { name: 'Cocoa Cloud', description: 'Dark cocoa, espresso and a soft salted cream cap.', price: 'RM 16' }
  ],
  mains: [
    { name: 'Nasi Lemak Toast', description: 'Coconut brioche, sambal eggs, cucumber and crispy ikan bilis.', price: 'RM 24' },
    { name: 'Mushroom Kaya Melt', description: 'Roasted mushrooms, cheddar, kaya mustard and sourdough.', price: 'RM 25' },
    { name: 'Sambal Chicken Bowl', description: 'Turmeric rice, grilled chicken, market greens and sambal hijau.', price: 'RM 29' },
    { name: 'Herb Roti Bakar', description: 'Soft eggs, whipped feta, herbs and toasted milk bread.', price: 'RM 22' },
    { name: 'Laksa Pesto Pasta', description: 'Linguine, laksa leaf pesto, cherry tomato and parmesan.', price: 'RM 28' },
    { name: 'Market Greens', description: 'Seasonal vegetables, tempeh, brown rice and sesame dressing.', price: 'RM 24' }
  ],
  desserts: [
    { name: 'Pandan Burnt Cheesecake', description: 'Creamy pandan centre with a deeply caramelised top.', price: 'RM 17' },
    { name: 'Kopi Tiramisu', description: 'Espresso-soaked sponge, mascarpone and cocoa nibs.', price: 'RM 18' },
    { name: 'Banana Gula Melaka Loaf', description: 'Warm banana cake, palm sugar butter and toasted pecans.', price: 'RM 15' },
    { name: 'Black Sesame Choux', description: 'Crisp choux filled with black sesame pastry cream.', price: 'RM 14' },
    { name: 'Coconut Panna Cotta', description: 'Coconut cream, mango, lime and a pinch of sea salt.', price: 'RM 16' },
    { name: 'Butter Kaya Scone', description: 'Baked fresh, served with house kaya and cultured butter.', price: 'RM 13' }
  ]
};

const menuImages = {
  drinks: [
    'assets/menu/coffee.jpg', 'assets/menu/cold-brew.jpg', 'assets/menu/long-black.jpg',
    'assets/menu/matcha.jpg', 'assets/menu/tea.jpg', 'assets/menu/cocoa.jpg'
  ],
  mains: [
    'assets/menu/breakfast.jpg', 'assets/menu/sandwich.jpg', 'assets/menu/nasi.jpg',
    'assets/menu/roti.jpg', 'assets/menu/pasta.jpg', 'assets/menu/greens.jpg'
  ],
  desserts: [
    'assets/menu/cake.jpg', 'assets/menu/tiramisu.jpg', 'assets/menu/banana-loaf.jpg',
    'assets/menu/choux.jpg', 'assets/menu/panna-cotta.jpg', 'assets/menu/pastry.jpg'
  ]
};

const languageCopy = {
  en: {
    title: 'Pociato Coffee & Pizza', description: 'Pociato Coffee & Pizza brings artisan Neapolitan pizza and coffee to locations across Selangor and Cyberjaya.',
    values: {
      '.nav-links a[data-section="home"]': 'Home', '.nav-links a[data-section="menu"], .mobile-bottom-nav a[data-section="menu"]': 'Menu', '.nav-links a[data-section="locations"], .mobile-bottom-nav a[data-section="locations"]': 'Locations', '.nav-links a[data-section="connect"], .mobile-bottom-nav a[data-section="connect"]': 'Connect',
      '.hero-content .eyebrow': 'Coffee · Pizza · Good company', '#hero-title': 'Coffee and pizza,<br><em>made for your table.</em>', '.hero-copy': 'Pociato Coffee & Pizza brings artisan Neapolitan pizza, comforting food and great coffee together across Selangor and Cyberjaya.',
      '.hero-actions .primary': 'Explore the menu', '.hero-actions .ghost': 'Find a location', '.intro > .eyebrow': 'The Pociato Coffee & Pizza table', '#intro-title': 'Pizza with soul.<br>Coffee with character.', '.intro .lead': 'From a quick coffee to a long meal with friends, Pociato Coffee & Pizza is a place to settle in over food made with care.', '.micro-note': 'Now serving multiple locations',
      '#menu .eyebrow': 'Menu preview', '#menu-title': 'A taste of Pociato Coffee & Pizza', '#menu .section-heading > p': 'Sample dishes are shown here while the official Pociato Coffee & Pizza menu is being prepared.', '.tab[data-category="drinks"]': 'Drinks', '.tab[data-category="mains"]': 'Mains', '.tab[data-category="desserts"]': 'Desserts', '.menu-note': 'Sample menu only. Official items and prices will be added soon.',
      '#updates .eyebrow': 'From our socials', '#updates-title': 'What’s happening at Pociato Coffee & Pizza.', '#updates .section-heading > p': 'Fresh pizza moments, new drinks and cafe news, shared straight from Pociato Coffee & Pizza’s social channels.', '#updates .update-card:nth-child(1) h3': 'Fresh from the kitchen', '#updates .update-card:nth-child(2) h3': 'Conversations at Pociato Coffee & Pizza', '#updates .update-card:nth-child(3) h3': 'Behind the scenes', '#updates .update-card:nth-child(1) span': 'See the latest post <b aria-hidden="true">↗</b>', '#updates .update-card:nth-child(2) span': 'See the latest thread <b aria-hidden="true">↗</b>', '#updates .update-card:nth-child(3) span': 'Watch the latest video <b aria-hidden="true">↗</b>',
      '.feature-copy .eyebrow': 'Made for sharing', '.feature-copy h2': 'Good food has a way of bringing people together.', '.feature-copy > p:last-child': 'Come for the coffee, stay for the pizza, and make a little more room at the table.',
      '#locations .eyebrow': 'Come say hello', '#locations-title': 'Find your Pociato Coffee & Pizza', '#locations .section-heading > p': 'Choose the Pociato Coffee & Pizza location closest to you and get directions in a tap.', '.location-link': 'Get directions <span aria-hidden="true">↗</span>', '.location-hours strong': 'Opening hours', '.location-hours span': 'Daily · 10:00am – 12:00am',
      '#connect .eyebrow': 'Google reviews', '#connect-title': 'See what guests are saying.', '.contact-copy > p:last-of-type': 'Choose a location to read current ratings and real guest comments straight on Google Maps.', '#review-copy': 'Guest ratings and comments are updated directly on Google Maps.', '.guest-review blockquote': '“See genuine reviews from guests who have visited this location.”', '.guest-review cite': 'Google Maps', '#review-google-link': 'Read reviews on Google', '.footer-grid > div:first-child > p': 'Coffee, pizza, and good company across Selangor and Cyberjaya.', '.footer-links a[href="#locations"]': 'Locations', '.footer-links a[href="#connect"]': 'Reviews', '.footer-bottom span:last-child': 'Menu and hours coming soon', '.whatsapp span:last-child': 'Contact'
    }
  },
  ms: {
    title: 'Pociato Coffee & Pizza', description: 'Pociato Coffee & Pizza menyajikan piza Neapolitan artisan dan kopi di beberapa lokasi sekitar Selangor dan Cyberjaya.',
    values: {
      '.nav-links a[data-section="home"]': 'Utama', '.nav-links a[data-section="menu"], .mobile-bottom-nav a[data-section="menu"]': 'Menu', '.nav-links a[data-section="locations"], .mobile-bottom-nav a[data-section="locations"]': 'Lokasi', '.nav-links a[data-section="connect"], .mobile-bottom-nav a[data-section="connect"]': 'Hubungi',
      '.hero-content .eyebrow': 'Kopi · Piza · Teman baik', '#hero-title': 'Kopi dan piza,<br><em>untuk dinikmati bersama.</em>', '.hero-copy': 'Pociato Coffee & Pizza menyajikan piza Neapolitan artisan, hidangan yang mengenyangkan dan kopi yang hebat di seluruh Selangor dan Cyberjaya.',
      '.hero-actions .primary': 'Terokai menu', '.hero-actions .ghost': 'Cari lokasi', '.intro > .eyebrow': 'Meja Pociato Coffee & Pizza', '#intro-title': 'Piza penuh jiwa.<br>Kopi penuh karakter.', '.intro .lead': 'Daripada secawan kopi pantas hingga hidangan santai bersama rakan, Pociato Coffee & Pizza ialah tempat untuk menikmati makanan yang disediakan dengan penuh teliti.', '.micro-note': 'Kini di beberapa lokasi',
      '#menu .eyebrow': 'Pratonton menu', '#menu-title': 'Cita rasa Pociato Coffee & Pizza', '#menu .section-heading > p': 'Hidangan contoh dipaparkan sementara menu rasmi Pociato Coffee & Pizza sedang disediakan.', '.tab[data-category="drinks"]': 'Minuman', '.tab[data-category="mains"]': 'Hidangan utama', '.tab[data-category="desserts"]': 'Pencuci mulut', '.menu-note': 'Menu contoh sahaja. Hidangan dan harga rasmi akan ditambah tidak lama lagi.',
      '#updates .eyebrow': 'Daripada media sosial', '#updates-title': 'Apa yang berlaku di Pociato Coffee & Pizza.', '#updates .section-heading > p': 'Momen piza, minuman baharu dan berita kafe dikongsi terus daripada saluran sosial Pociato Coffee & Pizza.', '#updates .update-card:nth-child(1) h3': 'Terus dari dapur', '#updates .update-card:nth-child(2) h3': 'Perbualan di Pociato Coffee & Pizza', '#updates .update-card:nth-child(3) h3': 'Di sebalik tabir', '#updates .update-card:nth-child(1) span': 'Lihat siaran terkini <b aria-hidden="true">↗</b>', '#updates .update-card:nth-child(2) span': 'Lihat Threads terkini <b aria-hidden="true">↗</b>', '#updates .update-card:nth-child(3) span': 'Tonton video terkini <b aria-hidden="true">↗</b>',
      '.feature-copy .eyebrow': 'Dibuat untuk dikongsi', '.feature-copy h2': 'Makanan yang baik sentiasa menyatukan kita.', '.feature-copy > p:last-child': 'Datang untuk kopi, tinggal untuk piza, dan sediakan sedikit ruang lagi di meja.',
      '#locations .eyebrow': 'Mari berkunjung', '#locations-title': 'Cari Pociato Coffee & Pizza anda', '#locations .section-heading > p': 'Pilih lokasi Pociato Coffee & Pizza yang paling dekat dengan anda dan dapatkan arah dengan satu sentuhan.', '.location-link': 'Dapatkan arah <span aria-hidden="true">↗</span>', '.location-hours strong': 'Waktu operasi', '.location-hours span': 'Setiap hari · 10:00 pagi – 12:00 malam',
      '#connect .eyebrow': 'Ulasan Google', '#connect-title': 'Semak pengalaman pelanggan.', '.contact-copy > p:last-of-type': 'Pilih cawangan untuk membaca rating dan komen sebenar terus di Google Maps.', '#review-copy': 'Rating dan komen pelanggan dikemas kini terus di Google Maps.', '.guest-review blockquote': '“Lihat ulasan sebenar daripada pelanggan yang pernah berkunjung ke cawangan ini.”', '.guest-review cite': 'Google Maps', '#review-google-link': 'Lihat ulasan di Google', '.footer-grid > div:first-child > p': 'Kopi, piza dan teman baik di seluruh Selangor dan Cyberjaya.', '.footer-links a[href="#locations"]': 'Lokasi', '.footer-links a[href="#connect"]': 'Ulasan', '.footer-bottom span:last-child': 'Menu dan waktu operasi akan datang', '.whatsapp span:last-child': 'Hubungi'
    }
  }
};

const menuDescriptions = {
  ms: {
    drinks: ['Espresso berganda, gula Melaka dan susu segar yang lembut.', 'Kopi yang diperam perlahan dengan krim kelapa dan garam laut.', 'Espresso asal tunggal pilihan kami, disajikan segar dan bersih.', 'Matcha istimewa, sirap pandan buatan rumah dan susu oat.', 'Teh melati, limau kasturi dan madu bunga liar bersama ais.', 'Koko gelap, espresso dan lapisan krim masin yang lembut.'],
    mains: ['Brioche kelapa, telur sambal, timun dan ikan bilis rangup.', 'Cendawan panggang, cheddar, kaya mustard dan sourdough.', 'Nasi kunyit, ayam panggang, sayur pasar dan sambal hijau.', 'Telur lembut, feta putar, herba dan roti susu bakar.', 'Linguine, pesto daun laksa, tomato ceri dan parmesan.', 'Sayur bermusim, tempeh, beras perang dan sos bijan.'],
    desserts: ['Bahagian tengah pandan berkrim dengan bahagian atas karamel.', 'Kek span berendam espresso, mascarpone dan nib koko.', 'Kek pisang hangat, mentega gula Melaka dan pecan panggang.', 'Choux rangup berinti krim pastri bijan hitam.', 'Krim kelapa, mangga, limau dan sedikit garam laut.', 'Dibakar segar, dihidang bersama kaya dan mentega kultur.']
  }
};

let currentLanguage = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ms';

const grid = document.querySelector('#menu-grid');
const tabs = [...document.querySelectorAll('.tab')];

function renderMenu(category) {
  grid.innerHTML = menu[category].map((item, index) => `
    <article class="menu-card">
      <img src="${menuImages[category][index]}" alt="${item.name}" loading="lazy">
      <div><h3>${item.name}</h3><p>${menuDescriptions[currentLanguage]?.[category]?.[index] ?? item.description}</p></div>
      <span class="price">${item.price}</span>
    </article>
  `).join('');
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const offset = event.key === 'ArrowRight' ? 1 : -1;
    const next = tabs[(index + offset + tabs.length) % tabs.length];
    next.focus();
    activateTab(next);
  });
});

function activateTab(selected) {
  tabs.forEach(tab => {
    const active = tab === selected;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  renderMenu(selected.dataset.category);
}

function applyLanguage(language, updateUrl = true) {
  currentLanguage = language;
  const copy = languageCopy[language];
  document.documentElement.lang = language === 'ms' ? 'ms' : 'en';
  document.title = copy.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy.description);

  Object.entries(copy.values).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach(element => { element.innerHTML = value; });
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });

  if (updateUrl) {
    const url = new URL(location.href);
    if (language === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    history.replaceState({}, '', url);
  }
  const activeTab = tabs.find(tab => tab.classList.contains('active'));
  renderMenu(activeTab?.dataset.category ?? 'drinks');
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

const topButton = document.querySelector('.back-to-top');
const header = document.querySelector('.site-header');
const navigationLinks = [...document.querySelectorAll('[data-section]')];
const sections = [...document.querySelectorAll('#home, #menu, #locations')];

function updateScrollControls() {
  topButton.classList.toggle('visible', window.scrollY > 520);
}

topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', updateScrollControls, { passive: true });
updateScrollControls();

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navigationLinks.forEach(link => link.setAttribute('aria-current', String(link.dataset.section === visible.target.id)));
}, { rootMargin: `-${header.offsetHeight}px 0px -55% 0px`, threshold: [0.2, 0.45, 0.7] });

sections.forEach(section => observer.observe(section));

const branchLocations = {
  kajang: { name: 'Taman Kajang Utama', map: 'Pociato Coffee & Pizza Taman Kajang Utama', directions: 'https://share.google/MMiGOV0y9rWr7Wgvv' },
  cyberjaya: { name: 'CBD 3 Cyberjaya', map: 'Pociato Coffee & Pizza CBD 3 Cyberjaya', directions: 'https://share.google/eIHHMFY4WVukVf7o6' },
  cheras: { name: 'Bandar Tun Hussein Onn', map: 'Pociato Coffee & Pizza Bandar Tun Hussein Onn', directions: 'https://share.google/5oV1oLbyCv1xDQGDD' },
  semenyih: { name: 'Eco Majestic', map: 'Pociato Coffee & Pizza Eco Majestic Semenyih', directions: 'https://www.google.com/search?client=safari&hl=en-my&q=Pociato%20Coffee%20%26%20Pizza%20Eco%20Majestic%2C%20Semenyih' },
};

const locationMap = document.querySelector('#location-map');
const mapDirections = document.querySelector('#map-directions');
document.querySelectorAll('[data-branch]').forEach(button => {
  button.addEventListener('click', () => {
    const branch = branchLocations[button.dataset.branch];
    if (!branch || !locationMap || !mapDirections) return;
    locationMap.src = `https://www.google.com/maps?q=${encodeURIComponent(branch.map)}&output=embed`;
    locationMap.title = `Peta Pociato Coffee and Pizza di ${branch.name}`;
    mapDirections.href = branch.directions;
    mapDirections.innerHTML = `Dapatkan arah ke ${branch.name} <span aria-hidden="true">↗</span>`;
    document.querySelectorAll('[data-branch]').forEach(tab => tab.setAttribute('aria-selected', String(tab === button)));
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
applyLanguage(currentLanguage, false);
