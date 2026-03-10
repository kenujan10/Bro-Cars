/* ── BRO CARS UK — main.js ── */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fa);
  }

  const page = location.pathname.split('/').pop() || 'index.html';

  /* ── Mobile bottom nav ── */
  if (!document.querySelector('.mobile-bottom-nav')) {
    const bottomNav = document.createElement('nav');
    bottomNav.className = 'mobile-bottom-nav';
    bottomNav.setAttribute('aria-label', 'Mobile navigation');
    bottomNav.innerHTML =
      '<a href="index.html"><span class="mbn-icon"><i class="fa-solid fa-house" aria-hidden="true"></i></span><span class="mbn-label">Home</span></a>' +
      '<a href="Our Vehicles.html"><span class="mbn-icon"><i class="fa-solid fa-car-side" aria-hidden="true"></i></span><span class="mbn-label">Vehicles</span></a>' +
      '<a href="about.html"><span class="mbn-icon"><i class="fa-solid fa-circle-info" aria-hidden="true"></i></span><span class="mbn-label">About</span></a>' +
      '<a href="https://wa.me/94741561234"><span class="mbn-icon"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></span><span class="mbn-label">WhatsApp</span></a>' +
      '<a href="contact.html"><span class="mbn-icon"><i class="fa-solid fa-phone" aria-hidden="true"></i></span><span class="mbn-label">Contact</span></a>';
    document.body.appendChild(bottomNav);
  }

  /* ── Mobile hamburger ── */
  const ham = document.getElementById('hamBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  /* ── Active nav link ── */
  document.querySelectorAll('.nav-links a, .mobile-menu a, .mobile-bottom-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Filter tabs (Our Vehicles / home) ── */
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('.filter-tabs');
      group.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      const grid = document.querySelector(tab.dataset.target || '#carGrid');
      if (!grid) return;
      grid.querySelectorAll('[data-cat]').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
      });
    });
  });

  /* ── Navbar scroll shadow ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 24px rgba(0,0,0,0.35)'
        : '0 2px 20px rgba(0,0,0,0.3)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Scroll-reveal (intersection observer) ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));
  }

  /* ── Contact form submit ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sent! ✓';
      btn.style.background = '#16a34a';
      setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
    });
  }

  /* ── Newsletter form ── */
  document.querySelectorAll('.footer-sub-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp = btn.previousElementSibling;
      if (inp && inp.value.includes('@')) {
        btn.textContent = 'Subscribed ✓';
        btn.style.background = '#16a34a';
        btn.style.color = '#fff';
        inp.value = '';
      }
    });
  });

});
// ═══════════════════════════════════════════════════════
//  Bro Cars UK — Car Details Modal + Image Gallery
//  Add this script at the bottom of your HTML (before </body>)
//  Also paste the CSS block into your styles.css
// ═══════════════════════════════════════════════════════

const carData = [
  {
    id: "bmw-m4",
    name: " Peugeot",
    price: "£65,000",
    year: "2023",
    mileage: "1,200 mi",
    transmission: "Automatic",
    fuel: "Petrol",
    bhp: "510 BHP",
    badge: "New",
   
    
     
    features: [
      "M xDrive AWD System",
      "Carbon Ceramic Brakes",
      "Harman Kardon Sound",
      "Heated M Sport Seats",
      "Head-Up Display",
      "Adaptive M Suspension",
      "Apple CarPlay & Android Auto",
      "M Driver's Package",
    ],
    images: [
      "images/Ava-1.jpeg",
      "images/Ava-2.jpeg",
      "images/Ava-3.jpeg",
      "images/Ava-4.jpeg",
      "images/Ava-5.jpeg",
      "images/Ava-6.jpeg",
      "images/Ava-7.jpeg",
      
      
    ],
  },
  {
    id: "tesla-m3",
    make: "Tesla",
    name: "Model 3 Long Range",
    price: "£32,500",
    year: "2021",
    mileage: "15,000 mi",
    transmission: "Automatic",
    fuel: "Electric",
    bhp: "N/A",
    badge: null,
    color: "Pearl White Multi-Coat",
    engine: "Dual Motor Electric",
    seats: 5,
    doors: 4,
    description:
      "The Tesla Model 3 Long Range redefines electric driving. With up to 358 miles of real-world range, Autopilot, and over-the-air updates, this is the EV that makes every journey feel effortless. Minimalist interior meets cutting-edge technology.",
    features: [
      "358 Mile Range",
      "Tesla Autopilot",
      "15\" Touchscreen",
      "Over-the-Air Updates",
      "Sentry Mode",
      "Premium Audio System",
      "Heated Front & Rear Seats",
      "Glass Roof",
    ],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1600&q=80",
      "https://images.unsplash.com/photo-1536700503543-87d21e737f7e?w=1600&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80",
    ],
  },
  {
    id: "merc-c",
    make: "Mercedes-Benz",
    name: "C-Class AMG Line",
    price: "£28,900",
    year: "2020",
    mileage: "32,000 mi",
    transmission: "Automatic",
    fuel: "Diesel",
    bhp: "194 BHP",
    badge: "Sale",
    color: "Obsidian Black Metallic",
    engine: "2.0L Diesel Turbo",
    seats: 5,
    doors: 4,
    description:
      "A beautifully refined Mercedes-Benz C-Class with AMG Line styling. This example offers the perfect blend of luxury, performance styling and everyday usability — finished in stunning Obsidian Black with a full leather interior.",
    features: [
      "AMG Body Styling",
      "9-Speed Auto Gearbox",
      "MBUX Infotainment",
      "Widescreen Cockpit",
      "Burmester Sound System",
      "Ambient Lighting",
      "Wireless Charging",
      "Keyless Entry & Start",
    ],
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1600&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80",
    ],
  },
  {
    id: "audi-rs6",
    make: "Audi",
    name: "RS6 Avant",
    price: "£98,000",
    year: "2023",
    mileage: "500 mi",
    transmission: "Automatic",
    fuel: "Petrol",
    bhp: "600 BHP",
    badge: "New",
    color: "Nardo Grey",
    engine: "4.0L Twin-Turbo V8",
    seats: 5,
    doors: 5,
    description:
      "The Audi RS6 Avant is the ultimate super-estate. With a 4.0L twin-turbo V8 producing 600bhp, it demolishes the 0-62 mph sprint in 3.6 seconds — yet comfortably fits five passengers and a full load of luggage. A true everyday supercar.",
    features: [
      "4.0L Twin-Turbo V8",
      "Quattro AWD",
      "Carbon Ceramic Brakes",
      "RS Sport Exhaust",
      "Bang & Olufsen 3D Sound",
      "Night Vision Assist",
      "Panoramic Sunroof",
      "RS Sport Suspension Plus",
    ],
    images: [
      "https://autonxt.net/wp-content/uploads/2025/08/2025-Audi-RS6-Avant22.jpg",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1600&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1600&q=80",
    ],
  },
  {
    id: "rr-sport",
    make: "Range Rover",
    name: "Sport HSE",
    price: "£45,000",
    year: "2019",
    mileage: "45,000 mi",
    transmission: "Automatic",
    fuel: "Diesel",
    bhp: "306 BHP",
    badge: null,
    color: "Fuji White",
    engine: "3.0L SDV6 Diesel",
    seats: 5,
    doors: 5,
    description:
      "The Range Rover Sport HSE — commanding, capable, and utterly desirable. This example features the potent SDV6 diesel engine paired with eight-speed automatic and full-time four-wheel drive. The definition of a luxury SUV.",
    features: [
      "Terrain Response 2",
      "Air Suspension",
      "Meridian Sound System",
      "InControl Touch Pro",
      "Panoramic Sunroof",
      "Heated & Cooled Seats",
      "Wade Sensing",
      "Full Service History",
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600&q=80",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1600&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1600&q=80",
    ],
  },
  {
    id: "porsche-911",
    make: "Porsche",
    name: "911 Carrera S",
    price: "£110,000",
    year: "2023",
    mileage: "200 mi",
    transmission: "Manual",
    fuel: "Petrol",
    bhp: "450 BHP",
    badge: "New",
    color: "Night Blue Metallic",
    engine: "3.0L Twin-Turbo Flat-6",
    seats: 4,
    doors: 2,
    description:
      "The Porsche 911 Carrera S needs no introduction. An icon of performance, design and engineering excellence — this virtually new example is finished in breathtaking Night Blue Metallic with a 7-speed manual gearbox. A purist's dream.",
    features: [
      "7-Speed Manual PDK",
      "Sport Chrono Package",
      "PASM Active Suspension",
      "Bose Surround Sound",
      "14-Way Power Seats",
      "Porsche Connect",
      "LED Headlights with PDLS+",
      "Track-Prep Rear Wiper",
    ],
    images: [
      "images/Ava-1.jpeg",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1600&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1600&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=80",
    ],
  },
  {
    id: "sold-sprinter",
    make: "Mercedes-Benz",
    name: "Sprinter",
    price: "Â£52,000",
    badge: null,
    description: "Previously sold vehicle. Browse available gallery photos.",
    features: ["Sold Vehicle", "Gallery Available"],
    images: ["images/s-2.jpeg", "images/s-3.jpeg", "images/s-4.jpeg", "images/s-5.jpeg", "images/s-6.jpeg"],
  },
  {
    id: "sold-sprinter-314",
    make: "Mercedes-Benz",
    name: "Sprinter 314 CDI",
    price: "Â£36,500",
    badge: null,
    description: "Previously sold vehicle. Browse available gallery photos.",
    features: ["Sold Vehicle", "Gallery Available"],
    images: ["images/ss-6.jpeg", "images/ss-2.jpeg", "images/ss-3.jpeg", "images/ss-4.jpeg", "images/ss-5.jpeg"],
  },
  {
    id: "sold-sandero",
    make: "Dacia",
    name: "Sandero Stepway",
    price: "Â£34,900",
    badge: null,
    description: "Previously sold vehicle. Browse available gallery photos.",
    features: ["Sold Vehicle", "Gallery Available"],
    images: ["images/sss-2.jpeg", "images/sss-1.jpeg", "images/sss-3.jpeg"],
  },
  {
    id: "sold-evoque",
    make: "Range Rover",
    name: "Evoque R-Dynamic",
    price: "Â£29,500",
    badge: null,
    description: "Previously sold vehicle. Browse available gallery photos.",
    features: ["Sold Vehicle", "Gallery Available"],
    images: ["images/ssss-2.jpeg", "images/ssss-1.jpeg", "images/ssss-3.jpeg", "images/ssss-4.jpeg", "images/ssss-5.jpeg", "images/ssss-6.jpeg"],
  },
];

// ── Modal HTML injection ──────────────────────────────────────────────────────
function injectModal() {
  const html = `
  <div id="carModal" class="bcm-overlay" role="dialog" aria-modal="true" aria-label="Car details">
    <div class="bcm-drawer">
      <button class="bcm-close" id="bcmClose" aria-label="Close">&times;</button>

      <!-- Gallery -->
      <div class="bcm-gallery">
        <div class="bcm-main-img-wrap">
          <img id="bcmMainImg" src="" alt="Car image" class="bcm-main-img"/>
          <button class="bcm-nav bcm-prev" id="bcmPrev">&#8592;</button>
          <button class="bcm-nav bcm-next" id="bcmNext">&#8594;</button>
          <span class="bcm-img-counter" id="bcmCounter">1 / 4</span>
        </div>
        <div class="bcm-thumbs" id="bcmThumbs"></div>
      </div>

      <!-- Details -->
      <div class="bcm-details">
        <div class="bcm-header">
          <div>
            <div class="bcm-make" id="bcmMake"></div>
            <div class="bcm-name" id="bcmName"></div>
          </div>
          <div class="bcm-price-wrap">
            <span class="bcm-badge-tag" id="bcmBadge"></span>
            <div class="bcm-price" id="bcmPrice"></div>
          </div>
        </div>

        <div class="bcm-quick-specs" id="bcmQuickSpecs"></div>

        <div class="bcm-section-title">About This Car</div>
        <p class="bcm-desc" id="bcmDesc"></p>

        <div class="bcm-section-title">Key Features</div>
        <ul class="bcm-features" id="bcmFeatures"></ul>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", html);
}

// ── Gallery logic ─────────────────────────────────────────────────────────────
let currentImages = [];
let currentIndex = 0;

function setGalleryImage(idx) {
  currentIndex = idx;
  const img = document.getElementById("bcmMainImg");
  const counter = document.getElementById("bcmCounter");
  img.style.opacity = "0";
  setTimeout(() => {
    img.src = currentImages[idx];
    img.style.opacity = "1";
  }, 120);
  counter.textContent = `${idx + 1} / ${currentImages.length}`;
  document.querySelectorAll(".bcm-thumb").forEach((t, i) => {
    t.classList.toggle("active", i === idx);
  });
}

function buildThumbs() {
  const wrap = document.getElementById("bcmThumbs");
  wrap.innerHTML = currentImages
    .map(
      (src, i) =>
        `<img src="${src}" class="bcm-thumb${i === 0 ? " active" : ""}" data-idx="${i}" alt="Thumbnail ${i + 1}"/>`
    )
    .join("");
  wrap.querySelectorAll(".bcm-thumb").forEach((t) =>
    t.addEventListener("click", () => setGalleryImage(+t.dataset.idx))
  );
}

// ── Open / close ──────────────────────────────────────────────────────────────
function openModal(carId) {
  const car = carData.find((c) => c.id === carId);
  if (!car) return;

  currentImages = car.images;
  currentIndex = 0;

  document.getElementById("bcmMake").textContent = car.make;
  document.getElementById("bcmName").textContent = car.name;
  document.getElementById("bcmPrice").textContent = car.price;
  document.getElementById("bcmDesc").textContent = car.description;

  const badge = document.getElementById("bcmBadge");
  if (car.badge) {
    badge.textContent = car.badge;
    badge.style.display = "inline-block";
    badge.className = `bcm-badge-tag badge-${car.badge.toLowerCase()}`;
  } else {
    badge.style.display = "none";
  }

  document.getElementById("bcmQuickSpecs").innerHTML = [
    
  ]
    .map(
      (s) =>
        `<div class="bcm-spec-item"><span class="bcm-spec-icon">${s.icon}</span><div class="bcm-spec-text"><span class="bcm-spec-label">${s.label}</span><span class="bcm-spec-val">${s.val}</span></div></div>`
    )
    .join("");

  document.getElementById("bcmFeatures").innerHTML = car.features
    .map((f) => `<li class="bcm-feature-item"><span class="bcm-check">✓</span>${f}</li>`)
    .join("");

  document.getElementById("bcmMainImg").src = car.images[0];
  document.getElementById("bcmCounter").textContent = `1 / ${car.images.length}`;
  buildThumbs();

  const modal = document.getElementById("carModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("carModal").classList.remove("open");
  document.body.style.overflow = "";
}

// ── Wire up "View Details" buttons ────────────────────────────────────────────
function wireButtons() {
  const cards = document.querySelectorAll(".car-card:not(.sold)");
  const ids = ["bmw-m4", "tesla-m3", "merc-c", "audi-rs6", "rr-sport", "porsche-911"];
  cards.forEach((card, i) => {
    const btn = card.querySelector(".car-btn");
    if (!btn || !ids[i]) return;
    const open = (e) => {
      e.preventDefault();
      openModal(ids[i]);
    };
    btn.addEventListener("click", open);
    card.addEventListener("click", (e) => {
      // Avoid double-handling if the button was clicked
      if (e.target && e.target.closest(".car-btn")) return;
      open(e);
    });
  });
}

function wireSoldButtons() {
  const soldCards = document.querySelectorAll(".car-card.sold");
  const soldIds = ["sold-sprinter", "sold-sprinter-314", "sold-sandero", "sold-evoque"];
  soldCards.forEach((card, i) => {
    const btn = card.querySelector(".sold-view-btn");
    const img = card.querySelector(".car-card-img");
    const wrap = card.querySelector(".car-card-img-wrap");
    const soldCar = carData.find((c) => c.id === soldIds[i]);
    if (!img || !wrap || !soldCar || !Array.isArray(soldCar.images) || soldCar.images.length === 0) return;

    let photoIndex = 0;
    if (btn) btn.style.display = "none";

    const prev = document.createElement("button");
    prev.className = "sold-img-arrow sold-img-prev";
    prev.setAttribute("type", "button");
    prev.setAttribute("aria-label", "Previous photo");
    prev.textContent = "‹";

    const next = document.createElement("button");
    next.className = "sold-img-arrow sold-img-next";
    next.setAttribute("type", "button");
    next.setAttribute("aria-label", "Next photo");
    next.textContent = "›";

    wrap.appendChild(prev);
    wrap.appendChild(next);

    const setImg = (idx) => {
      photoIndex = (idx + soldCar.images.length) % soldCar.images.length;
      img.src = soldCar.images[photoIndex];
    };

    prev.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      setImg(photoIndex - 1);
    });

    next.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      setImg(photoIndex + 1);
    });

    // Auto-rotate sold images every 2s
    setInterval(() => {
      setImg(photoIndex + 1);
    }, 2000);
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  injectModal();
  wireButtons();
  wireSoldButtons();

  document.getElementById("bcmClose").addEventListener("click", closeModal);
  document.getElementById("carModal").addEventListener("click", (e) => {
    if (e.target.id === "carModal") closeModal();
  });
  document.getElementById("bcmPrev").addEventListener("click", () => {
    setGalleryImage((currentIndex - 1 + currentImages.length) % currentImages.length);
  });
  document.getElementById("bcmNext").addEventListener("click", () => {
    setGalleryImage((currentIndex + 1) % currentImages.length);
  });
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("carModal");
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") setGalleryImage((currentIndex - 1 + currentImages.length) % currentImages.length);
    if (e.key === "ArrowRight") setGalleryImage((currentIndex + 1) % currentImages.length);
  });
});
