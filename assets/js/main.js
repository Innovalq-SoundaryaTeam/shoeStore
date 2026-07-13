/* ===== SoleHaus main.js ===== */
/* Each product has an img/alt for the card + listing grid, and a "colors" array
   used to build the color swatches + thumbnail gallery on the product-details page.
   IMPORTANT: every image referenced for a product belongs to that product's own
   category (formal/sports/casual/kids) — never mixed across categories. */
const DEFAULT_PRODUCTS = [
  {
    "id": 1, "name": "Classic Leather Oxford", "brand": "Nike", "cat": "formal", "price": 129,
    "sizes": [7, 8, 9, 10],
    "img": "../assets/images/products/formal-oxford-black.webp",
    "alt": "Black leather oxford formal shoe",
    "colors": [
      { "name": "Black", "swatch": "#1a1a1a", "image": "../assets/images/products/formal-oxford-black.webp", "alt": "Black leather oxford formal shoe" },
      { "name": "Maroon", "swatch": "#5c1a1a", "image": "../assets/images/products/formal-loafer-maroon.webp", "alt": "Maroon crocodile-embossed formal loafer" }
    ]
  },
  {
    "id": 2, "name": "Air Runner Pro", "brand": "Nike", "cat": "sports", "price": 159,
    "sizes": [7, 8, 9, 10, 11],
    "img": "../assets/images/products/sports-runner-red.webp",
    "alt": "Red running sneaker",
    "colors": [
      { "name": "Red", "swatch": "#e8442c", "image": "../assets/images/products/sports-runner-red.webp", "alt": "Red running sneaker" },
      { "name": "Black", "swatch": "#1a1a1a", "image": "../assets/images/products/sports-sneaker-black.webp", "alt": "Black running sneaker with pink trim" }
    ]
  },
  {
    "id": 3, "name": "Urban Street Sneaker", "brand": "Adidas", "cat": "casual", "price": 99,
    "sizes": [6, 7, 8, 9, 10],
    "img": "../assets/images/products/casual-sneaker-grey.webp",
    "alt": "Grey Adidas urban street casual sneaker",
    "colors": [
      { "name": "Grey", "swatch": "#8a8a8a", "image": "../assets/images/products/casual-sneaker-grey.webp", "alt": "Grey Adidas urban street casual sneaker" },
      { "name": "Grey", "swatch": "#050505", "image": "../assets/images/products/casual-sneaker-black.webp", "alt": "Black Adidas urban street casual sneaker" }
    ]
  },
  {
    "id": 4, "name": "Cloud Glide Trainer", "brand": "Reebok", "cat": "sports", "price": 139,
    "sizes": [8, 9, 10, 11],
    "img": "../assets/images/products/sports-sneaker-black.webp",
    "alt": "Black Reebok Cloud Glide sports trainer with pink trim",
    "colors": [
      { "name": "Black", "swatch": "#000000", "image": "../assets/images/products/sports-sneaker1-black.webp", "alt": "Black Reebok Cloud Glide sports trainer with pink trim" },
       { "name": "Black", "swatch": "#4e4b4b", "image": "../assets/images/products/sports-sneaker-grey.webp", "alt": "Grey Reebok Cloud Glide sports trainer with pink trim" }
    ]
  },
  {
    "id": 5, "name": "Premium Chelsea Boot", "brand": "Clarks", "cat": "formal", "price": 189,
    "sizes": [7, 8, 9, 10],
    "img": "../assets/images/products/formal-chelsea-black.webp",
    "alt": "Black leather chelsea boot",
    "colors": [
      { "name": "Black", "swatch": "#1a1a1a", "image": "../assets/images/products/formal-chelsea-black.webp", "alt": "Black leather chelsea boot" },
      { "name": "Black Buckle", "swatch": "#2b2b2b", "image": "../assets/images/products/formal-loafer-Grey.webp", "alt": "Grey leather buckle loafer" }
    ]
  },
  {
    "id": 6, "name": "Canvas Lowtop", "brand": "Converse", "cat": "casual", "price": 69,
    "sizes": [6, 7, 8, 9, 10, 11],
    "img": "../assets/images/products/casual-skate-black.webp",
    "alt": "Black and white canvas skate shoe",
    "colors": [
      { "name": "Black/White", "swatch": "#1a1a1a", "image": "../assets/images/products/casual-skate-black.webp", "alt": "Black and white canvas skate shoe" },
       { "name": "Black/White", "swatch": "#6d6767", "image": "../assets/images/products/casual-skate-grey.webp", "alt": "Grey and white canvas skate shoe" }
    ]
  },
  {
    "id": 7, "name": "Kids Rainbow Runner", "brand": "Puma", "cat": "kids", "price": 59,
    "sizes": [1, 2, 3, 4, 5],
    "img": "../assets/images/products/kids-sneaker-red.webp",
    "alt": "Red kids canvas sneaker",
    "colors": [
      { "name": "Red", "swatch": "#c0392b", "image": "../assets/images/products/kids-sneaker-red.webp", "alt": "Red kids canvas sneaker" },
      { "name": "Navy", "swatch": "#1b1f3b", "image": "../assets/images/products/kids-loafer-navy.webp", "alt": "Navy patent kids loafer" }
    ]
  },
  {
    "id": 8, "name": "Marathon Elite", "brand": "Asics", "cat": "sports", "price": 179,
    "sizes": [8, 9, 10, 11],
    "img": "../assets/images/products/sports-nmd-red.webp",
    "alt": "All-red sports running shoe",
    "colors": [
      { "name": "Red", "swatch": "#e8442c", "image": "../assets/images/products/sports-nmd-red.webp", "alt": "All-red sports running shoe" },
      { "name": "Red/Orange", "swatch": "#f2653b", "image": "../assets/images/products/sports-runner1-red.webp", "alt": "Red running sneaker" }
    ]
  },
  {
    "id": 9, "name": "Slip-on Loafer", "brand": "Clarks", "cat": "casual", "price": 89,
    "sizes": [7, 8, 9, 10],
    "img": "../assets/images/products/formal-loafer-maroon.webp",
    "alt": "Maroon formal loafer",

    "colors": [
      { "name": "Maroon", "swatch": "#5c1a1a", "image": "../assets/images/products/formal-loafer-maroon.webp", "alt": "Maroon crocodile-embossed formal loafer" },
     
             { "name": "Black Buckle", "swatch": "#000000", "image": "../assets/images/products/formal-loafer-black.webp", "alt": "Black leather buckle loafer" }
     
    ]
  }
];

/* ----- Product catalog (localStorage-backed so admin add/edit/delete
   persists and is reflected everywhere the site reads PRODUCTS) ----- */
const ProductStore = {
  key: 'solehaus_products',
  get() {
    try {
      const stored = JSON.parse(localStorage.getItem(this.key));
      if (Array.isArray(stored)) return stored;
    } catch (e) { /* fall through to defaults */ }
    return DEFAULT_PRODUCTS.slice();
  },
  save(list) { localStorage.setItem(this.key, JSON.stringify(list)); },
  nextId(list) { return list.reduce((max, p) => Math.max(max, +p.id || 0), 0) + 1; },
  reset() { localStorage.removeItem(this.key); }
};
let PRODUCTS = ProductStore.get();

/* ----- Cart (localStorage) ----- */
const Cart = {
  key: 'solehaus_cart',
  get() { try { return JSON.parse(localStorage.getItem(this.key)) || [] } catch (e) { return [] } },
  save(c) {
    localStorage.setItem(this.key, JSON.stringify(c));
    this.updateBadge();
    if (document.getElementById('cartList')) renderCart();
  },
  add(id, size = null, qty = 1) {
    qty = Math.max(1, qty | 0 || 1);
    const cart = this.get();
    const found = cart.find(i => i.id === id && i.size === size);
    if (found) found.qty += qty; else cart.push({ id, size, qty });
    this.save(cart); toast(qty > 1 ? `Added ${qty} to cart` : 'Added to cart');
  },
  remove(id, size) { this.save(this.get().filter(i => !(i.id === id && i.size === size))); render(); },
  setQty(id, size, qty) {
    const cart = this.get();
    if (qty < 1) { this.save(cart.filter(i => !(i.id === id && i.size === size))); render(); return; }
    const found = cart.find(i => i.id === id && i.size === size);
    if (found) { found.qty = qty; this.save(cart); }
  },
  count() { return this.get().reduce((s, i) => s + i.qty, 0); },
  updateBadge() {
    document.querySelectorAll('#cartBadge').forEach(b => { b.textContent = this.count(); });
  }
};

/* ----- Toast ----- */
function toast(msg) {
  let t = document.querySelector('.toast-mini');
  if (!t) { t = document.createElement('div'); t.className = 'toast-mini'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2000);
}

/* ----- Theme ----- */
const themeBtns = document.querySelectorAll('#themeToggle,[data-theme-toggle]');
function applyTheme(t) {
  document.body.classList.toggle('dark', t === 'dark');
  themeBtns.forEach(themeBtn => {
    const icon = t === 'dark' ? 'fa-sun' : 'fa-moon';
    themeBtn.innerHTML = themeBtn.hasAttribute('data-theme-toggle')
      ? `<i class="fa-solid ${icon} me-2"></i>Toggle Theme`
      : `<i class="fa-solid ${icon}"></i>`;
  });
}
applyTheme(localStorage.getItem('dashboardTheme') || localStorage.getItem('theme') || 'light');
themeBtns.forEach(themeBtn => themeBtn.addEventListener('click', () => {
  const t = document.body.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('theme', t);
  localStorage.setItem('dashboardTheme', t);
  applyTheme(t);
}));
function toggleTheme() {
  const t = document.body.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('theme', t);
  localStorage.setItem('dashboardTheme', t);
  applyTheme(t);
}
window.toggleTheme = toggleTheme;

/* ----- RTL / LTR direction ----- */
const rtlBtns = document.querySelectorAll('#rtlToggle,[data-rtl-toggle]');
function applyDir(d) {
  document.documentElement.setAttribute('dir', d);
  rtlBtns.forEach(rtlBtn => {
    rtlBtn.innerHTML = d === 'rtl'
      ? '<i class="fa-solid fa-align-right"></i>'
      : '<i class="fa-solid fa-align-left"></i>';
    rtlBtn.setAttribute('aria-label', d === 'rtl' ? 'Switch to left-to-right' : 'Switch to right-to-left');
  });
}
applyDir(localStorage.getItem('siteDir') || 'ltr');
rtlBtns.forEach(rtlBtn => rtlBtn.addEventListener('click', () => {
  const d = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
  localStorage.setItem('siteDir', d);
  applyDir(d);
}));
function toggleDir() {
  const d = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
  localStorage.setItem('siteDir', d);
  applyDir(d);
}
window.toggleDir = toggleDir;

/* ----- Search ----- */
document.getElementById('navSearch')?.addEventListener('submit', e => {
  e.preventDefault();
  const q = document.getElementById('searchInput').value.trim();
  location.href = 'products.html?q=' + encodeURIComponent(q);
});

/* ----- Checkout (guest checkout — no login required) ----- */
const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn?.addEventListener('click', e => {
  e.preventDefault();
  window.location.href = 'checkout.html';
});

/* ----- Newsletter validation ----- */
document.getElementById('newsletterForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const msg = document.getElementById('newsletterMsg');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    msg.textContent = 'Please enter a valid email';
    msg.classList.remove('success');
    msg.classList.add('error');
    return;
  }
  msg.textContent = 'Subscribed! Check your inbox.';
  msg.classList.remove('error');
  msg.classList.add('success');
  input.value = '';
});

/* ----- Product card builder ----- */
function productCard(product) {
  return `<div class="card-shoe">
    <a href="product-details.html?id=${product.id}" class="img-wrap d-block"><img src="${product.img}" alt="${product.alt}"></a>
    <div class="body">
      <div class="brand">${product.brand}</div>
      <div class="name"><a href="product-details.html?id=${product.id}">${product.name}</a></div>
      <div class="price">$${product.price}</div>
      <button class="btn btn-primary-orange add" data-add="${product.id}">Add to Cart</button>
      <div class="enquire-wrap">${EnquiryButton(product.id)}</div>
    </div>
  </div>`;
}
function attachAddHandlers() {
  document.querySelectorAll('[data-add]').forEach(b => {
    if (b.dataset.cartBound) return;
    b.dataset.cartBound = 'true';
    b.addEventListener('click', () => Cart.add(+b.dataset.add));
  });
  attachEnquireHandlers();
}

/* =====================================================
   ENQUIRE NOW FEATURE
   Reusable components: EnquiryButton, EnquiryModal, EnquiryForm
   ===================================================== */

/* ----- EnquiryButton: markup for the trigger button ----- */
function EnquiryButton(productId) {
  return `<button type="button" class="btn-enquire" data-enquire="${productId}" aria-haspopup="dialog">
    <i class="fa-solid fa-envelope" aria-hidden="true"></i> Enquire Now
  </button>`;
}

function attachEnquireHandlers() {
  document.querySelectorAll('[data-enquire]').forEach(b => {
    if (b.dataset.enquireBound) return;
    b.dataset.enquireBound = 'true';
    b.addEventListener('click', e => {
      spawnRipple(b, e);
      const product = PRODUCTS.find(p => p.id === +b.dataset.enquire);
      if (product) EnquiryModal.open(product, b);
    });
  });
}

/* Simple ripple effect for the Enquire button */
function spawnRipple(btn, e) {
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

/* ----- EnquiryModal: builds, opens, closes the dialog ----- */
const EnquiryModal = {
  overlay: null,
  lastFocused: null,
  product: null,

  ensureBuilt() {
    if (this.overlay) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = `
    <div class="enquiry-overlay" id="enquiryOverlay" role="presentation">
      <div class="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiryTitle" tabindex="-1">
        <div class="enquiry-modal-head">
          <h5 id="enquiryTitle"><i class="fa-solid fa-envelope-open-text me-2" aria-hidden="true"></i>Enquire Now</h5>
          <button type="button" class="enquiry-close" id="enquiryCloseBtn" aria-label="Close enquiry form"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="enquiry-modal-body" id="enquiryModalBody">
          <!-- populated on open -->
        </div>
      </div>
    </div>`;
    document.body.appendChild(wrap.firstElementChild);
    this.overlay = document.getElementById('enquiryOverlay');

    this.overlay.addEventListener('click', e => {
      if (e.target === this.overlay) this.close();
    });
    document.getElementById('enquiryCloseBtn').addEventListener('click', () => this.close());
    document.addEventListener('keydown', e => {
      if (!this.overlay.classList.contains('open')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'Tab') this.trapFocus(e);
    });
  },

  trapFocus(e) {
    const focusables = this.overlay.querySelectorAll('button, input, textarea, select, a[href]');
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  },

  open(product, triggerEl) {
    this.ensureBuilt();
    this.product = product;
    this.lastFocused = triggerEl || document.activeElement;
    document.getElementById('enquiryModalBody').innerHTML = EnquiryForm(product);
    EnquiryFormLogic.init(product);
    this.overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    const modal = this.overlay.querySelector('.enquiry-modal');
    setTimeout(() => {
      const firstField = modal.querySelector('#enqName');
      (firstField || modal).focus();
    }, 50);
  },

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (this.lastFocused && document.body.contains(this.lastFocused)) this.lastFocused.focus();
  }
};

/* ----- EnquiryForm: markup for product summary + form fields ----- */
function EnquiryForm(p) {
  const selectedSize = p.selectedSize || null;
  const selectedColor = p.selectedColor || null;
  const metaBits = [
    `<span><i class="fa-solid fa-tag me-1"></i>${p.brand}</span>`,
    selectedSize ? `<span><i class="fa-solid fa-ruler me-1"></i>Size: ${selectedSize}</span>` : '',
    selectedColor ? `<span><i class="fa-solid fa-palette me-1"></i>Color: ${selectedColor}</span>` : ''
  ].filter(Boolean).join('');

  return `
  <div class="enquiry-product">
    <img src="${p.img}" alt="${p.alt || p.name}">
    <div class="enquiry-product-info">
      <div class="name">${p.name}</div>
      <div class="price">$${p.price}</div>
      <div class="enquiry-product-meta">${metaBits}</div>
    </div>
  </div>

  <form class="enquiry-form" id="enquiryForm" novalidate>
    <div class="form-group">
      <label for="enqName">Full Name <span class="req">*</span></label>
      <input type="text" class="form-control" id="enqName" name="name" required autocomplete="name">
      <div class="enquiry-field-error">Please enter your full name.</div>
    </div>
    <div class="form-group">
      <label for="enqPhone">Phone Number <span class="req">*</span></label>
      <input type="tel" class="form-control" id="enqPhone" name="phone" required autocomplete="tel" inputmode="tel">
      <div class="enquiry-field-error">Please enter a valid phone number.</div>
    </div>
    <div class="form-group">
      <label for="enqEmail">Email Address</label>
      <input type="email" class="form-control" id="enqEmail" name="email" autocomplete="email">
      <div class="enquiry-field-error">Please enter a valid email address.</div>
    </div>
    <div class="form-group">
      <label for="enqCity">City</label>
      <input type="text" class="form-control" id="enqCity" name="city" autocomplete="address-level2">
    </div>
    <div class="form-group">
      <label for="enqMessage">Message</label>
      <textarea class="form-control" id="enqMessage" name="message">I am interested in this product. Please share more details.</textarea>
    </div>

    <div class="enquiry-actions">
      <button type="button" class="btn btn-enquiry-cancel" id="enquiryCancelBtn">Cancel</button>
      <button type="submit" class="btn btn-enquiry-send" id="enquirySendBtn">
        <span class="btn-label"><i class="fa-solid fa-paper-plane me-1"></i>Send Enquiry</span>
      </button>
    </div>

    <button type="button" class="btn-whatsapp-enquiry" id="enquiryWhatsappBtn">
      <i class="fa-brands fa-whatsapp fa-lg" aria-hidden="true"></i> Enquire via WhatsApp
    </button>
  </form>`;
}

/* ----- EnquiryForm logic: validation + submit + WhatsApp ----- */
const EnquiryFormLogic = {
  init(product) {
    const form = document.getElementById('enquiryForm');
    if (!form) return;

    document.getElementById('enquiryCancelBtn').addEventListener('click', () => EnquiryModal.close());
    document.getElementById('enquiryWhatsappBtn').addEventListener('click', () => this.sendWhatsapp(product, form));
    form.addEventListener('submit', e => {
      e.preventDefault();
      this.submit(product, form);
    });

    // clear inline errors as the user types
    form.querySelectorAll('.form-control').forEach(el => {
      el.addEventListener('input', () => {
        el.classList.remove('invalid');
        el.closest('.form-group')?.classList.remove('invalid');
      });
    });
  },

  validate(form) {
    let valid = true;
    const name = form.querySelector('#enqName');
    const phone = form.querySelector('#enqPhone');
    const email = form.querySelector('#enqEmail');

    if (!name.value.trim()) { this.markInvalid(name); valid = false; }
    const phoneDigits = phone.value.replace(/[^0-9]/g, '');
    if (!phone.value.trim() || phoneDigits.length < 7) { this.markInvalid(phone); valid = false; }
    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { this.markInvalid(email); valid = false; }

    return valid;
  },

  markInvalid(el) {
    el.classList.add('invalid');
    el.closest('.form-group')?.classList.add('invalid');
  },

  submit(product, form) {
    if (!this.validate(form)) {
      form.querySelector('.invalid')?.focus();
      return;
    }
    const sendBtn = document.getElementById('enquirySendBtn');
    sendBtn.disabled = true;
    sendBtn.innerHTML = '<span class="enquiry-spinner" aria-hidden="true"></span> Sending...';

    // Simulate a network request (demo)
    setTimeout(() => {
      const body = document.getElementById('enquiryModalBody');
      body.innerHTML = `
        <div class="enquiry-success" role="status">
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
          <p>Thank you! Your enquiry has been sent successfully.</p>
        </div>`;
      setTimeout(() => EnquiryModal.close(), 2000);
    }, 1100);
  },

  sendWhatsapp(product, form) {
    const selectedSize = product.selectedSize || 'N/A';
    const selectedColor = product.selectedColor || 'N/A';
    const message = `Hello,\nI am interested in this product.\nProduct: ${product.name}\nPrice: $${product.price}\nSelected Size: ${selectedSize}\nSelected Color: ${selectedColor}\nPlease provide more details.`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  }
};

/* ----- Render lists on relevant pages ----- */
function render() {
  // Featured (home)
  const feat = document.getElementById('featuredGrid');
  if (feat) { feat.innerHTML = PRODUCTS.slice(0, 4).map(p => `<div class="col-sm-6 col-lg-3">${productCard(p)}</div>`).join(''); }
  const arrivals = document.getElementById('arrivalsScroll');
  if (arrivals) { arrivals.innerHTML = PRODUCTS.slice().reverse().map(productCard).join(''); }
  // Products page
  const grid = document.getElementById('productsGrid');
  if (grid) { renderProducts(); }
  // Related
  const rel = document.getElementById('relatedGrid');
  if (rel) { rel.innerHTML = PRODUCTS.slice(0, 4).map(p => `<div class="col-sm-6 col-lg-3">${productCard(p)}</div>`).join(''); }
  // Cart panel
  const cartList = document.getElementById('cartList');
  if (cartList) renderCart();
  attachAddHandlers();
  Cart.updateBadge();
}

/* ----- Products page filtering ----- */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const q = (new URLSearchParams(location.search).get('q') || '').toLowerCase();
  const cats = [...document.querySelectorAll('.f-cat:checked')].map(c => c.value);
  const brands = [...document.querySelectorAll('.f-brand:checked')].map(c => c.value);
  const sizes = [...document.querySelectorAll('.f-size:checked')].map(c => +c.value);
  const maxP = +document.getElementById('fPrice')?.value || 9999;
  const sort = document.getElementById('fSort')?.value || '';
  let list = PRODUCTS.filter(p => {
    if (q && !(p.name + ' ' + p.brand + ' ' + p.cat).toLowerCase().includes(q)) return false;
    if (cats.length && !cats.includes(p.cat)) return false;
    if (brands.length && !brands.includes(p.brand)) return false;
    if (sizes.length && !p.sizes.some(s => sizes.includes(s))) return false;
    if (p.price > maxP) return false;
    return true;
  });
  if (sort === 'low') list.sort((a, b) => a.price - b.price);
  else if (sort === 'high') list.sort((a, b) => b.price - a.price);
  grid.innerHTML = list.length ? list.map(p => `<div class="col-sm-6 col-lg-4">${productCard(p)}</div>`).join('')
    : '<div class="col-12 text-center py-5"><h5>No products match your filters.</h5></div>';
  document.getElementById('resultCount').textContent = list.length + ' products';
  attachAddHandlers();
}
document.querySelectorAll('.f-cat,.f-brand,.f-size,#fSort').forEach(el => el.addEventListener('change', renderProducts));
document.getElementById('fPrice')?.addEventListener('input', e => { document.getElementById('fPriceVal').textContent = '$' + e.target.value; renderProducts(); });
// preselect category from URL
(function () {
  const cat = new URLSearchParams(location.search).get('cat');
  if (cat) { const cb = document.querySelector(`.f-cat[value="${cat}"]`); if (cb) cb.checked = true; }
  const q = new URLSearchParams(location.search).get('q');
  if (q) { const si = document.getElementById('searchInput'); if (si) si.value = q; }
})();

/* ----- Blog page filtering ----- */
function initBlogFilters() {
  const filters = document.getElementById('blogCategoryFilters');
  if (!filters) return;

  const buttons = [...filters.querySelectorAll('[data-blog-category]')];
  const cards = [...document.querySelectorAll('[data-category]')];
  const form = document.getElementById('blogSearchForm');
  const input = document.getElementById('blogSearchInput');
  const grid = cards[0]?.parentElement;
  const noResults = document.createElement('div');
  noResults.className = 'col-12 text-center py-5 d-none';
  noResults.innerHTML = '<h5>No blog posts found.</h5><p class="text-muted mb-0"></p>';
  grid?.appendChild(noResults);
  let activeCategory = 'all';

  function applyBlogFilters() {
    const q = (input?.value || '').trim().toLowerCase();
    let visibleCount = 0;
    cards.forEach(card => {
      const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
      const matchesSearch = !q || card.textContent.toLowerCase().includes(q);
      const isVisible = matchesCategory && matchesSearch;
      card.classList.toggle('d-none', !isVisible);
      if (isVisible) visibleCount++;
    });
    noResults.classList.toggle('d-none', visibleCount > 0);
    noResults.querySelector('p').textContent = q
      ? `No blog posts found for '${input.value.trim()}'. Try another keyword.`
      : 'No blog posts found. Try another category.';
  }

  buttons.forEach(button => {
    button.setAttribute('aria-pressed', button.dataset.blogCategory === 'all' ? 'true' : 'false');
    button.addEventListener('click', () => {
      activeCategory = button.dataset.blogCategory;
      buttons.forEach(btn => {
        const isActive = btn === button;
        btn.classList.toggle('btn-primary-orange', isActive);
        btn.classList.toggle('btn-outline-orange', !isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      applyBlogFilters();
    });
  });

  form?.addEventListener('submit', e => {
    e.preventDefault();
    applyBlogFilters();
  });
  input?.addEventListener('input', applyBlogFilters);
  applyBlogFilters();
}
initBlogFilters();

/* ----- Blog detail posts ----- */
function initBlogDetail() {
  const title = document.getElementById('blogDetailTitle');
  const category = document.getElementById('blogDetailCategory');
  const meta = title?.nextElementSibling;
  const image = document.getElementById('blogDetailImage');
  const content = document.getElementById('blogDetailContent');
  if (!title || !category || !meta || !image || !content) return;

  const posts = {
    'clean-white-sneakers': {
      title: 'How to Clean White Sneakers Like a Pro',
      category: 'Care',
      meta: 'By Alex Chen - Jan 15, 2025 - 5 min read',
      image: '../assets/images/blog/clean-white-sneakers.webp',
      alt: 'White sneakers',
      description: 'Pro tips for cleaning and maintaining white sneakers without damaging the upper or sole.',
      body: `<p>White sneakers are timeless but notoriously hard to keep clean. In this guide we walk through the gentle, brand-safe methods used by professionals to restore that out-of-box look.</p>
      <h3>1. Start with a dry brush</h3><p>Remove loose dirt before any liquid touches the upper. A soft toothbrush works wonders.</p>
      <h3>2. Use a mild soap solution</h3><p>One drop of dish soap in warm water. Avoid bleach on leather and knit uppers.</p>
      <h3>3. Air dry only</h3><p>Direct sun and dryers will yellow the foam and warp glue lines.</p>`
    },
    'top-running-shoes': {
      title: 'Top 5 Running Shoes of 2025',
      category: 'Sports',
      meta: 'By Alex Chen - Jan 12, 2025 - 5 min read',
      image: '../assets/images/blog/top-running-shoes.webp',
      alt: 'Running shoes',
      description: 'A quick guide to the running shoes that balance cushioning, support, and daily training comfort.',
      body: `<p>The best running shoes of 2025 combine lighter foams, stable platforms, and breathable uppers that stay comfortable through long weeks of training.</p>
      <h3>1. Prioritize your stride</h3><p>Choose neutral or stability support based on how your foot lands, not only on brand preference.</p>
      <h3>2. Match cushion to distance</h3><p>Daily trainers need dependable comfort, while race-day pairs can feel lighter and more responsive.</p>
      <h3>3. Check the fit late in the day</h3><p>Feet expand after activity, so test running shoes when your feet are closer to their largest size.</p>`
    },
    'casual-vs-formal': {
      title: 'Casual vs Formal: A Guide',
      category: 'Style',
      meta: 'By Alex Chen - Jan 10, 2025 - 5 min read',
      image: '../assets/images/blog/casual-vs-formal.webp',
      alt: 'Casual and formal shoes',
      description: 'How to choose the right shoe style for work, weekends, events, and everyday outfits.',
      body: `<p>The right pair depends on the setting, the outfit, and how much walking your day demands. Casual and formal shoes both have a place in a smart rotation.</p>
      <h3>1. Read the occasion</h3><p>Leather oxfords and chelsea boots suit polished settings, while sneakers and loafers handle relaxed plans.</p>
      <h3>2. Balance color and texture</h3><p>Smooth dark leather leans formal. Canvas, suede, and lighter colors usually feel more casual.</p>
      <h3>3. Keep comfort in the decision</h3><p>A good fit matters more than the label. Supportive insoles and flexible soles can make either style easier to wear.</p>`
    },
    'best-boots-winter': {
      title: 'Best Boots for Winter',
      category: 'Trends',
      meta: 'By Alex Chen - Jan 8, 2025 - 5 min read',
      image: '../assets/images/blog/best-boots-winter.webp',
      alt: 'Winter boots',
      description: 'A guide to winter boots with warmth, traction, and durable materials for cold weather.',
      body: `<p>Winter boots should keep your feet warm, stable, and dry without feeling bulky during everyday wear.</p>
      <h3>1. Look for reliable traction</h3><p>Rubber outsoles with deeper tread help on wet pavement and colder surfaces.</p>
      <h3>2. Choose weather-ready materials</h3><p>Treated leather, insulated linings, and sealed seams make a big difference in rough weather.</p>
      <h3>3. Leave room for socks</h3><p>A slightly roomier fit helps with thicker socks while keeping circulation comfortable.</p>`
    },
    'kids-sizing-tips': {
      title: 'Kids Shoe Sizing Tips',
      category: 'Care',
      meta: 'By Alex Chen - Jan 6, 2025 - 5 min read',
      image: '../assets/images/blog/kids-sizing-tips.webp',
      alt: 'Kids shoes',
      description: 'Simple tips for choosing kids shoe sizes with comfort, room to grow, and support in mind.',
      body: `<p>Kids outgrow shoes quickly, but sizing up too far can make walking uncomfortable and unstable.</p>
      <h3>1. Measure both feet</h3><p>Use the larger foot as your guide because small differences between feet are common.</p>
      <h3>2. Check toe room</h3><p>A thumb-width of space gives room to move without making the shoe feel loose.</p>
      <h3>3. Recheck often</h3><p>Growing feet can change quickly, so revisit fit every few months.</p>`
    },
    'sustainable-footwear': {
      title: 'Sustainable Footwear',
      category: 'Trends',
      meta: 'By Alex Chen - Jan 4, 2025 - 5 min read',
      image: '../assets/images/blog/sustainable-footwear.webp',
      alt: 'Sustainable footwear',
      description: 'What to look for in sustainable footwear, from recycled materials to repairable construction.',
      body: `<p>Sustainable footwear is about materials, durability, repairability, and responsible production choices.</p>
      <h3>1. Check the materials</h3><p>Recycled textiles, responsibly sourced leather, and natural rubber can reduce impact.</p>
      <h3>2. Buy for longevity</h3><p>A shoe that lasts longer is often the more sustainable choice.</p>
      <h3>3. Care extends life</h3><p>Cleaning, rotating, and storing shoes properly helps reduce waste over time.</p>`
    }
  };

  const slug = new URLSearchParams(location.search).get('post') || 'clean-white-sneakers';
  const post = posts[slug] || posts['clean-white-sneakers'];
  title.textContent = post.title;
  category.textContent = post.category;
  meta.textContent = post.meta;
  image.src = post.image;
  image.alt = post.alt;
  content.innerHTML = post.body;
  document.title = post.title + ' - SoleHaus Blog';
  document.querySelector('meta[name="description"]')?.setAttribute('content', post.description);
}
initBlogDetail();

/* =====================================================
   SERVICES (Services + Service Details + Pricing pages)
   ===================================================== */
const MEMBERSHIP_PLANS = [
  {
    name: 'Silver', price: 0, period: 'forever',
    desc: 'For casual shoppers who want to earn as they go.',
    cta: 'Join Free', featured: false,
    features: [
      { text: 'Earn 1 point per $1 spent', available: true },
      { text: 'Birthday reward', available: true },
      { text: 'Free standard shipping over $75', available: true },
      { text: '48-hour early access to drops', available: false },
      { text: 'Dedicated personal stylist', available: false }
    ]
  },
  {
    name: 'Gold', price: 49, period: '/year',
    desc: 'For regulars who shop every season.',
    cta: 'Go Gold', featured: true,
    features: [
      { text: 'Everything in Silver', available: true },
      { text: '10% off every order', available: true },
      { text: 'Free shipping, no minimum', available: true },
      { text: '48-hour early access to drops', available: true },
      { text: 'Dedicated personal stylist', available: false }
    ]
  },
  {
    name: 'Platinum', price: 99, period: '/year',
    desc: 'For sneakerheads and power shoppers.',
    cta: 'Go Platinum', featured: false,
    features: [
      { text: 'Everything in Gold', available: true },
      { text: '15% off every order', available: true },
      { text: 'Free express shipping', available: true },
      { text: 'Priority early access to drops', available: true },
      { text: 'Dedicated personal stylist', available: true }
    ]
  }
];

const SERVICES = {
  'custom-fitting': {
    title: 'Custom Shoe Fitting & Consultation',
    icon: 'fa-ruler-combined',
    tagline: 'Get fitted right, the first time.',
    description: `<p>Nearly two-thirds of people wear the wrong shoe size without realizing it. Our fitting specialists measure length, width and arch shape, then match you to styles that actually fit — not just the number on the box.</p>
      <p>Book a 30-minute session in-store or over video call. Bring a pair you already own and love (or hate) and we'll use it as a reference point.</p>`,
    included: [
      'Foot length, width & arch assessment',
      'Pronation and gait notes for sports shoes',
      'Personalized style shortlist across brands',
      '30-minute in-store or video session'
    ],
    pricing: [
      { name: 'Quick Fit', price: 0, period: 'walk-in', desc: 'A fast in-store size check, no appointment needed.', cta: 'Visit a Store', featured: false, features: [
        { text: 'In-store only', available: true },
        { text: 'Length & width measurement', available: true },
        { text: 'Style recommendations', available: false },
        { text: 'Video call option', available: false }
      ] },
      { name: 'Style Session', price: 25, period: 'one-time', desc: 'A full fitting plus a curated style shortlist.', cta: 'Book Session', featured: true, features: [
        { text: 'In-store or video call', available: true },
        { text: 'Full foot assessment', available: true },
        { text: 'Personalized style shortlist', available: true },
        { text: 'Fee credited toward purchase', available: true }
      ] },
      { name: 'Team Fitting Day', price: null, period: 'custom quote', desc: 'On-site fitting for offices, teams or events.', cta: 'Request a Quote', featured: false, features: [
        { text: 'On-site specialist visit', available: true },
        { text: 'Group scheduling', available: true },
        { text: 'Bulk order follow-up', available: true },
        { text: 'Custom pricing', available: true }
      ] }
    ],
    faqs: [
      { q: 'Do I need an appointment?', a: "Quick Fit is walk-in only. Style Session and Team Fitting Day are booked in advance so we can reserve a specialist for you." },
      { q: 'Is the video call fitting as accurate as in-store?', a: "It gets very close — we'll walk you through measuring at home with a printable guide, and refine recommendations from there." },
      { q: 'Is the $25 fee refundable?', a: "It's automatically credited toward any purchase made within 14 days of your session." }
    ]
  },

  'bulk-orders': {
    title: 'Bulk & Corporate Orders',
    icon: 'fa-boxes-stacked',
    tagline: 'Outfit your whole team, effortlessly.',
    description: `<p>Whether it's matching work shoes for a retail team, sneakers for a company event, or a client footwear gifting program, our bulk order desk handles sizing, invoicing and delivery so you don't have to.</p>
      <p>Every bulk order gets one point of contact from quote to delivery, with pricing that scales as your order grows.</p>`,
    included: [
      'Dedicated account manager',
      'Volume-based discount pricing',
      'Custom invoicing & purchase orders',
      'Mixed sizes, styles and brands in one order',
      'Optional branded packaging'
    ],
    pricing: [
      { name: 'Starter', price: null, period: '20-49 pairs', desc: 'Great for small teams and one-off events.', cta: 'Get a Quote', featured: false, features: [
        { text: '10% volume discount', available: true },
        { text: 'Single invoice', available: true },
        { text: 'Dedicated account manager', available: false },
        { text: 'Branded packaging', available: false }
      ] },
      { name: 'Business', price: null, period: '50-149 pairs', desc: 'For growing teams and recurring orders.', cta: 'Get a Quote', featured: true, features: [
        { text: '15% volume discount', available: true },
        { text: 'Dedicated account manager', available: true },
        { text: 'Flexible payment terms', available: true },
        { text: 'Branded packaging (add-on)', available: true }
      ] },
      { name: 'Enterprise', price: null, period: '150+ pairs', desc: 'Custom program for large organizations.', cta: 'Talk to Sales', featured: false, features: [
        { text: 'Custom pricing', available: true },
        { text: 'Dedicated account manager', available: true },
        { text: 'Free branded packaging', available: true },
        { text: 'Scheduled recurring delivery', available: true }
      ] }
    ],
    faqs: [
      { q: "What's the minimum order size?", a: "20 pairs. Below that, our standard store pricing already offers great value." },
      { q: 'Can we mix sizes and styles in one order?', a: "Yes — send us a sizing sheet or have your team complete our online size form and we'll consolidate it into one order." },
      { q: 'How long does a bulk order take?', a: "Typically 2-3 weeks depending on stock and customization, with rush options available for an added fee." }
    ]
  },

  'shoe-care': {
    title: 'Shoe Cleaning & Restoration',
    icon: 'fa-soap',
    tagline: 'Bring your favorite pair back to life.',
    description: `<p>From weekly sneakers to once-a-year formal shoes, our care team handles deep cleaning, sole restoration and leather conditioning using brand-safe products for every material.</p>
      <p>Drop off in-store or schedule a pickup — most pairs are ready within 3-5 business days.</p>`,
    included: [
      'Deep clean for uppers, midsoles & laces',
      'Leather conditioning & suede protection',
      'Odor treatment',
      'Sole & heel restoration',
      'Pickup & drop-off scheduling'
    ],
    pricing: [
      { name: 'Basic Clean', price: 15, period: 'per pair', desc: 'A thorough surface clean for everyday shoes.', cta: 'Book Cleaning', featured: false, features: [
        { text: 'Upper & sole cleaning', available: true },
        { text: 'Lace cleaning', available: true },
        { text: 'Conditioning treatment', available: false },
        { text: 'Restoration', available: false }
      ] },
      { name: 'Deep Clean + Condition', price: 29, period: 'per pair', desc: 'Everything in Basic, plus material conditioning.', cta: 'Book Cleaning', featured: true, features: [
        { text: 'Everything in Basic Clean', available: true },
        { text: 'Leather / suede conditioning', available: true },
        { text: 'Odor treatment', available: true },
        { text: 'Sole restoration', available: false }
      ] },
      { name: 'Full Restoration', price: 59, period: 'per pair', desc: 'For well-loved pairs that need real repair.', cta: 'Book Restoration', featured: false, features: [
        { text: 'Everything in Deep Clean', available: true },
        { text: 'Sole & heel restoration', available: true },
        { text: 'Stitching repair', available: true },
        { text: 'Color touch-up', available: true }
      ] }
    ],
    faqs: [
      { q: 'How long does cleaning take?', a: "Basic and Deep Clean are usually ready in 3-5 business days. Full Restoration can take up to 10 days depending on the repair." },
      { q: 'Do you offer pickup?', a: "Yes, pickup and drop-off are available in select delivery areas — add it at checkout when booking." },
      { q: 'Is this safe for suede and delicate leather?', a: "Yes — every pair is assessed first and we use material-specific products for suede, nubuck, canvas and leather." }
    ]
  },

  'home-delivery': {
    title: 'Home Delivery & Try-at-Home',
    icon: 'fa-truck-fast',
    tagline: 'Try before you commit — from your couch.',
    description: `<p>Not sure between two sizes, or want to see how a color looks in your own light? Order up to three sizes or colorways, try them on at home, and only pay for the pair you keep.</p>
      <p>Free pickup is arranged automatically for anything you're returning — no box hunting required.</p>`,
    included: [
      'Order up to 3 sizes or colors per style',
      '7-day try-at-home window',
      'Free scheduled return pickup',
      'Pay only for what you keep'
    ],
    pricing: [
      { name: 'Standard Delivery', price: 0, period: 'orders over $75', desc: 'Free standard shipping, no membership needed.', cta: 'Shop Now', featured: false, features: [
        { text: '3-5 business day delivery', available: true },
        { text: 'Order tracking', available: true },
        { text: 'Try-at-home window', available: false },
        { text: 'Express delivery', available: false }
      ] },
      { name: 'Try-at-Home', price: 5, period: 'refundable hold', desc: 'Order multiple sizes, keep only one.', cta: 'Try at Home', featured: true, features: [
        { text: '7-day try-at-home window', available: true },
        { text: 'Free return pickup', available: true },
        { text: 'Hold refunded once settled', available: true },
        { text: 'Express delivery', available: false }
      ] },
      { name: 'Express Next-Day', price: 12, period: 'per order', desc: 'For when you need it tomorrow.', cta: 'Choose Express', featured: false, features: [
        { text: 'Next-day delivery', available: true },
        { text: 'Priority handling', available: true },
        { text: 'Order tracking', available: true },
        { text: 'Try-at-home window', available: false }
      ] }
    ],
    faqs: [
      { q: 'How many pairs can I try at once?', a: "Up to three sizes or colorways of the same style per Try-at-Home order." },
      { q: "How do I return what I don't keep?", a: "Book your free pickup from the confirmation email, or drop off at any partner location — no box or label printing needed." },
      { q: 'Is Try-at-Home available everywhere?', a: "It's currently available in most metro delivery areas; availability shows automatically at checkout based on your address." }
    ]
  },

  'gift-wrapping': {
    title: 'Gift Wrapping & Corporate Gifting',
    icon: 'fa-gift',
    tagline: 'Make it feel like a gift, not just a box.',
    description: `<p>Add a premium wrap and handwritten note to any order in seconds, or set up a recurring corporate gifting program for clients, new hires or milestone anniversaries.</p>
      <p>Corporate gifting orders include branded boxes and a single consolidated invoice, however many recipients you're sending to.</p>`,
    included: [
      'Premium gift wrap & ribbon',
      'Handwritten gift note',
      'Price-free gift receipt',
      'Branded boxes for corporate orders',
      'Recipient list upload for group gifting'
    ],
    pricing: [
      { name: 'Standard Wrap', price: 4, period: 'per item', desc: 'A clean, giftable wrap for any order.', cta: 'Add to Order', featured: false, features: [
        { text: 'Gift wrap & ribbon', available: true },
        { text: 'Gift receipt (no prices)', available: true },
        { text: 'Handwritten note', available: false },
        { text: 'Branded packaging', available: false }
      ] },
      { name: 'Premium + Note', price: 8, period: 'per item', desc: 'Wrap plus a personalized handwritten note.', cta: 'Add to Order', featured: true, features: [
        { text: 'Everything in Standard Wrap', available: true },
        { text: 'Handwritten note', available: true },
        { text: 'Scheduled delivery date', available: true },
        { text: 'Branded packaging', available: false }
      ] },
      { name: 'Corporate Gifting', price: null, period: 'min. 10 units', desc: 'A managed gifting program for teams and clients.', cta: 'Talk to Sales', featured: false, features: [
        { text: 'Branded boxes', available: true },
        { text: 'Recipient list upload', available: true },
        { text: 'One consolidated invoice', available: true },
        { text: 'Dedicated account manager', available: true }
      ] }
    ],
    faqs: [
      { q: 'Can I schedule a specific delivery date?', a: "Yes, Premium + Note and Corporate Gifting both support scheduled delivery for birthdays, holidays or events." },
      { q: 'Do gift recipients see the price?', a: "No — every gift order includes a gift receipt with no pricing shown." },
      { q: 'How does group corporate gifting work?', a: "Upload a recipient list (name, address, size if relevant) and we handle individual packing and shipping under one invoice." }
    ]
  },

  'vip-membership': {
    title: 'VIP Membership Program',
    icon: 'fa-crown',
    tagline: 'Shop smarter with every purchase.',
    description: `<p>SoleHaus VIP rewards the way you actually shop — points on every order, early access to limited drops, and perks that scale up the more you love your sneakers.</p>
      <p>Join for free, or upgrade to Gold or Platinum for bigger discounts and priority everything.</p>`,
    included: [
      'Points on every purchase',
      'Early access to new drops',
      'Member-only discounts',
      'Birthday reward',
      'Priority customer support'
    ],
    pricing: 'membership',
    faqs: [
      { q: 'Can I cancel anytime?', a: "Yes, Gold and Platinum are billed annually with no long-term contract — cancel anytime from your account." },
      { q: 'How do I redeem points?', a: "Points apply automatically as store credit at checkout once you've earned enough for your next reward tier." },
      { q: 'Is it worth it if I shop occasionally?', a: "Silver is free and still earns points and a birthday reward, so there's no downside to joining even as a casual shopper." }
    ]
  }
};

/* Renders a set of pricing tier cards into any container id — used by both
   the standalone Pricing page and the VIP Membership service detail page. */
function renderPricingCards(containerId, plans) {
  const el = document.getElementById(containerId);
  if (!el || !plans) return;
  el.innerHTML = plans.map(plan => {
    const amount = plan.price === null ? 'Custom' : (plan.price === 0 ? 'Free' : '$' + plan.price);
    return `
    <div class="pricing-card${plan.featured ? ' featured' : ''}">
      ${plan.featured ? '<span class="pricing-badge">Most Popular</span>' : ''}
      <div class="pricing-plan-name">${escapeHtml(plan.name)}</div>
      <p class="pricing-plan-desc">${escapeHtml(plan.desc)}</p>
      <div class="pricing-amount">${amount}<span> ${escapeHtml(plan.period)}</span></div>
      <ul class="pricing-features">
        ${plan.features.map(f => `<li class="${f.available ? '' : 'unavailable'}"><i class="fa-solid ${f.available ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>${escapeHtml(f.text)}</li>`).join('')}
      </ul>
      <a href="contact.html?product=${encodeURIComponent(plan.name + ' Plan')}" class="btn ${plan.featured ? 'btn-primary-orange' : 'btn-outline-orange'} w-100">${escapeHtml(plan.cta)}</a>
    </div>`;
  }).join('');
}

/* ----- Standalone Pricing page ----- */
function initPricingPage() {
  if (!document.getElementById('pricingGrid')) return;
  renderPricingCards('pricingGrid', MEMBERSHIP_PLANS);
}
initPricingPage();

/* ----- Service Details page ----- */
function initServiceDetail() {
  const wrap = document.getElementById('serviceDetailWrap');
  if (!wrap) return;
  const slug = new URLSearchParams(location.search).get('service') || 'custom-fitting';
  const service = SERVICES[slug] || SERVICES['custom-fitting'];

  document.title = service.title + ' — SoleHaus Services';
  document.querySelector('meta[name="description"]')?.setAttribute('content', service.tagline);

  const iconEl = document.getElementById('serviceIcon');
  if (iconEl) iconEl.className = 'fa-solid ' + service.icon;
  const titleEl = document.getElementById('serviceTitle');
  if (titleEl) titleEl.textContent = service.title;
  const crumbEl = document.getElementById('serviceTitleCrumb');
  if (crumbEl) crumbEl.textContent = service.title;
  const taglineEl = document.getElementById('serviceTagline');
  if (taglineEl) taglineEl.textContent = service.tagline;
  const descEl = document.getElementById('serviceDescription');
  if (descEl) descEl.innerHTML = service.description;

  const includedEl = document.getElementById('serviceIncluded');
  if (includedEl) {
    includedEl.innerHTML = service.included
      .map(item => `<li><i class="fa-solid fa-circle-check"></i>${escapeHtml(item)}</li>`).join('');
  }

  renderPricingCards('servicePricingGrid', service.pricing === 'membership' ? MEMBERSHIP_PLANS : service.pricing);

  const faqWrap = document.getElementById('serviceFaqs');
  if (faqWrap) {
    faqWrap.innerHTML = service.faqs.map((item, i) => `
      <div class="accordion-item">
        <h2 class="accordion-header"><button class="accordion-button ${i === 0 ? '' : 'collapsed'}" data-bs-target="#faq${i}" data-bs-toggle="collapse" type="button">${escapeHtml(item.q)}</button></h2>
        <div class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="#serviceFaqs" id="faq${i}"><div class="accordion-body">${escapeHtml(item.a)}</div></div>
      </div>`).join('');
  }

  const relatedEl = document.getElementById('otherServices');
  if (relatedEl) {
    relatedEl.innerHTML = Object.entries(SERVICES).filter(([key]) => key !== slug).slice(0, 3).map(([key, s]) => `
      <div class="col-md-4">
        <a href="service-details.html?service=${key}" class="d-block text-reset text-decoration-none">
          <div class="service-card">
            <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
            <h5>${escapeHtml(s.title)}</h5>
            <p>${escapeHtml(s.tagline)}</p>
            <span class="service-link">Learn More <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </a>
      </div>`).join('');
  }
}
initServiceDetail();

/* ----- Brands page showcase ----- */
function initBrandShowcase() {
  const chips = [...document.querySelectorAll('[data-brand]')];
  const image = document.getElementById('featuredBrandImage');
  const title = document.getElementById('featuredBrandTitle');
  const description = document.getElementById('featuredBrandDescription');
  const link = document.getElementById('featuredBrandLink');

  if (!chips.length || !image || !title || !description || !link) return;

  const brandData = {
    nike: {
      title: "Nike: Just Do It",
      description: "Innovation meets design. Explore Nike sportswear, running shoes and lifestyle classics.",
      image: "../assets/images/brands/nike.webp",
      link: "products.html?q=Nike",
      cta: "Shop Nike",
      alt: "Nike featured shoe"
    },
    adidas: {
      title: "Adidas: Impossible Is Nothing",
      description: "Explore Adidas sneakers, performance shoes and streetwear essentials.",
      image: "../assets/images/brands/adidas.webp",
      link: "products.html?q=Adidas",
      cta: "Shop Adidas",
      alt: "Adidas featured shoe"
    },
    puma: {
      title: "Puma: Forever Faster",
      description: "Puma delivers speed, comfort and stylish everyday footwear.",
      image: "../assets/images/brands/puma.webp",
      link: "products.html?q=Puma",
      cta: "Shop Puma",
      alt: "Puma featured shoe"
    },
    asics: {
      title: "Asics: Sound Mind Sound Body",
      description: "Asics running and sports shoes built for comfort and endurance.",
      image: "../assets/images/brands/asics.webp",
      link: "products.html?q=Asics",
      cta: "Shop Asics",
      alt: "Asics featured shoe"
    },
    converse: {
      title: "Converse: Classic Street Style",
      description: "Timeless Converse sneakers for casual and street fashion.",
      image: "../assets/images/brands/converse.webp",
      link: "products.html?q=Converse",
      cta: "Shop Converse",
      alt: "Converse featured shoe"
    },
    clarks: {
      title: "Clarks: Premium Comfort",
      description: "Clarks formal and casual footwear designed for all-day comfort.",
      image: "../assets/images/brands/clarks.webp",
      link: "products.html?q=Clarks",
      cta: "Shop Clarks",
      alt: "Clarks featured shoe"
    },
    newbalance: {
      title: "New Balance: Comfort in Motion",
      description: "New Balance shoes built for performance and daily wear.",
      image: "../assets/images/brands/newbalance.webp",
      link: "coming-soon.html",
      cta: "Shop New Balance",
      alt: "New Balance featured shoe"
    },
    reebok: {
      title: "Reebok: Sport Meets Style",
      description: "Reebok trainers and lifestyle shoes made for active living.",
      image: "../assets/images/brands/reebok.webp",
      link: "products.html?q=Reebok",
      cta: "Shop Reebok",
      alt: "Reebok featured shoe"
    }
  };

  function showBrand(key) {
    const brand = brandData[key];
    if (!brand) return;

    image.src = brand.image;
    image.alt = brand.alt;
    title.textContent = brand.title;
    description.textContent = brand.description;
    link.href = brand.link;
    link.textContent = brand.cta;

    chips.forEach(chip => {
      chip.setAttribute(
        'aria-pressed',
        chip.dataset.brand === key ? 'true' : 'false'
      );
    });
  }

  function handleBrandSelect(target) {
    const chip = target.closest('[data-brand]');
    if (!chip) return;
    showBrand(chip.dataset.brand);
  }

  chips.forEach(chip => {
    chip.setAttribute(
      'aria-pressed',
      chip.dataset.brand === 'nike' ? 'true' : 'false'
    );

    chip.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleBrandSelect(chip);
      }
    });
  });

  document.addEventListener('click', e => handleBrandSelect(e.target));

  showBrand('nike');
}

initBrandShowcase();

/* ----- Product detail ----- */
function loadDetail() {
  const wrap = document.getElementById('detailWrap'); if (!wrap) return;
  const id = +new URLSearchParams(location.search).get('id') || 1;
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  const colors = (p.colors && p.colors.length) ? p.colors : [{ name: '', swatch: '#333', image: p.img, alt: p.alt }];

  document.title = p.name + ' — SoleHaus';
  document.getElementById('dName').textContent = p.name;
  document.getElementById('dBrand').textContent = p.brand;
  document.getElementById('dPrice').textContent = '$' + p.price;

  const detailImage = document.getElementById('dImg');
  const switchDetailImage = (src, alt) => {
    if (!src || detailImage.getAttribute('src') === src) return;
    const nextImage = new Image();
    nextImage.onload = () => {
      detailImage.classList.add('fade-out');
      setTimeout(() => {
        detailImage.src = src;
        detailImage.alt = alt;
        detailImage.classList.remove('fade-out');
      }, 120);
    };
    nextImage.src = src;
  };

  // Initial main image = this product's own (category-correct) default image
  detailImage.src = colors[0].image;
  detailImage.alt = colors[0].alt;

  // Build thumbnail gallery dynamically from this product's own color images only
  const thumbsWrap = document.querySelector('.thumbs');
  if (thumbsWrap) {
    thumbsWrap.innerHTML = colors.map((c, i) =>
      `<img src="${c.image}" alt="${c.alt}" data-image="${c.image}" data-alt="${c.alt}" class="${i === 0 ? 'active' : ''}">`
    ).join('');
    thumbsWrap.querySelectorAll('img').forEach(t => t.addEventListener('click', () => {
      thumbsWrap.querySelectorAll('img').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      switchDetailImage(t.dataset.image, t.dataset.alt);
      // keep matching swatch in sync
      const swatchesWrap = document.querySelector('.color-swatches');
      if (swatchesWrap) {
        swatchesWrap.querySelectorAll('.swatch').forEach(s => {
          s.classList.toggle('active', s.dataset.image === t.dataset.image);
        });
      }
    }));
  }

  // Build color swatches dynamically from this product's own colors only
  const swatchesWrap = document.querySelector('.color-swatches');
  if (swatchesWrap) {
    swatchesWrap.innerHTML = colors.map((c, i) =>
      `<button type="button" class="swatch ${i === 0 ? 'active' : ''}" style="background:${c.swatch}" data-image="${c.image}" data-color="${c.name}" data-alt="${c.alt}" title="${c.name}" aria-label="${c.name}"></button>`
    ).join('');
    swatchesWrap.querySelectorAll('.swatch').forEach(s => s.addEventListener('click', () => {
      swatchesWrap.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
      s.classList.add('active');
      switchDetailImage(s.dataset.image, s.dataset.alt);
      // keep matching thumbnail in sync
      if (thumbsWrap) {
        thumbsWrap.querySelectorAll('img').forEach(t => {
          t.classList.toggle('active', t.dataset.image === s.dataset.image);
        });
      }
    }));
  }

  const sizes = document.getElementById('dSizes');
  // Kids sizes (UK 1-5) are a different range from adult sizes (UK 6-11) —
  // pick the range that matches this product's category so kids products
  // don't render with every size button disabled.
  const sizeRange = p.cat === 'kids' ? [1, 2, 3, 4, 5] : [6, 7, 8, 9, 10, 11];
  sizes.innerHTML = sizeRange.map(s => `<button type="button" ${p.sizes.includes(s) ? '' : 'disabled class="unavailable"'}>${s}</button>`).join('');
  sizes.querySelectorAll('button:not([disabled])').forEach(b => b.addEventListener('click', () => {
    sizes.querySelectorAll('button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  }));
  const qi = document.getElementById('dQty');
  document.getElementById('dAdd').addEventListener('click', () => {
    const sz = sizes.querySelector('button.active');
    Cart.add(p.id, sz ? +sz.textContent : null, +qi.value || 1);
  });
  // Buy Now: add this product (with selected size) to the cart, then go
  // straight to checkout — no login required (guest checkout).
  document.getElementById('buyNow')?.addEventListener('click', e => {
    e.preventDefault();
    const sz = sizes.querySelector('button.active');
    Cart.add(p.id, sz ? +sz.textContent : null, +qi.value || 1);
    window.location.href = 'checkout.html';
  });
  // qty
  document.getElementById('qtyMinus').addEventListener('click', () => { qi.value = Math.max(1, +qi.value - 1); });
  document.getElementById('qtyPlus').addEventListener('click', () => { qi.value = +qi.value + 1; });
}
loadDetail();

/* ----- Cart panel (on products page #cart) ----- */
function renderCart() {
  const list = document.getElementById('cartList');
  const cart = Cart.get();
  if (!cart.length) { list.innerHTML = '<p class="text-muted">Your cart is empty.</p>'; document.getElementById('cartTotal').textContent = '$0'; return; }
  let tot = 0;
  list.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id); if (!p) return '';
    tot += p.price * item.qty;
    return `<div class="d-flex align-items-center gap-3 py-2 border-bottom">
      <img src="${p.img}" alt="${p.alt}" class="cart-thumb">
      <div class="flex-grow-1">
        <div class="fw-bold">${p.name}</div>
        <small class="text-muted">${p.brand}${item.size ? ' · Size ' + item.size : ''}</small>
        <div class="qty-picker qty-picker-sm mt-1">
          <button type="button" data-qty-dec="${p.id}" data-qty-size="${item.size || ''}" aria-label="Decrease quantity">−</button>
          <input aria-label="quantity" value="${item.qty}" data-qty-input="${p.id}" data-qty-size2="${item.size || ''}" inputmode="numeric">
          <button type="button" data-qty-inc="${p.id}" data-qty-size="${item.size || ''}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div class="fw-bold">$${p.price * item.qty}</div>
      <button class="btn btn-sm btn-outline-orange" data-rm="${p.id}" data-rms="${item.size || ''}" aria-label="Remove"><i class="fa fa-trash"></i></button>
    </div>`;
  }).join('');
  document.getElementById('cartTotal').textContent = '$' + tot;
  list.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => Cart.remove(+b.dataset.rm, b.dataset.rms ? +b.dataset.rms : null)));
  list.querySelectorAll('[data-qty-dec]').forEach(b => b.addEventListener('click', () => {
    const cart = Cart.get();
    const item = cart.find(i => i.id === +b.dataset.qtyDec && (i.size || '') === b.dataset.qtySize);
    if (item) Cart.setQty(item.id, item.size, item.qty - 1);
  }));
  list.querySelectorAll('[data-qty-inc]').forEach(b => b.addEventListener('click', () => {
    const cart = Cart.get();
    const item = cart.find(i => i.id === +b.dataset.qtyInc && (i.size || '') === b.dataset.qtySize);
    if (item) Cart.setQty(item.id, item.size, item.qty + 1);
  }));
  list.querySelectorAll('[data-qty-input]').forEach(inp => inp.addEventListener('change', () => {
    const id = +inp.dataset.qtyInput, size = inp.dataset.qtySize2;
    const cart = Cart.get();
    const item = cart.find(i => i.id === id && (i.size || '') === size);
    const val = Math.max(0, parseInt(inp.value, 10) || 0);
    if (item) Cart.setQty(item.id, item.size, val);
  }));
}

/* ----- Contact form validation ----- */
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  let ok = true;
  const set = (id, msg) => { document.getElementById(id + 'Err').textContent = msg; if (msg) ok = false; };
  const f = this;
  set('name', f.name.value.trim().length < 2 ? 'Enter your name' : '');
  set('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value) ? '' : 'Valid email required');
  set('phone', f.phone.value.replace(/\D/g, '').length < 7 ? 'Enter valid phone' : '');
  set('type', f.type.value ? '' : 'Choose enquiry type');
  set('message', f.message.value.trim().length < 10 ? 'Min 10 characters' : '');
  if (ok) { document.getElementById('contactSuccess').classList.remove('d-none'); f.reset(); }
});
// preselect product
(function () {
  const prod = new URLSearchParams(location.search).get('product');
  if (prod) { const ta = document.querySelector('#contactForm [name=message]'); if (ta) ta.value = 'I am interested in: ' + prod; }
})();

/* ----- Coming soon countdown ----- */
const cd = document.getElementById('countdown');
if (cd) {
  const target = new Date(Date.now() + 30 * 24 * 3600 * 1000);
  function tick() {
    const d = target - new Date();
    const days = Math.floor(d / 86400000), h = Math.floor(d / 3600000) % 24, m = Math.floor(d / 60000) % 60, s = Math.floor(d / 1000) % 60;
    cd.innerHTML = [[days, 'Days'], [h, 'Hours'], [m, 'Minutes'], [s, 'Seconds']].map(([v, l]) => `<div><b>${String(v).padStart(2, '0')}</b><span>${l}</span></div>`).join('');
  }
  tick(); setInterval(tick, 1000);
}

/* ----- Auth helpers (admin only — no customer accounts) ----- */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function emailToName(email) {
  const local = String(email || 'user').split('@')[0].replace(/[._-]+/g, ' ').trim();
  return local ? local.replace(/\b\w/g, letter => letter.toUpperCase()) : 'SoleHaus User';
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, match => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[match]));
}

function setFieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function setAuthMessage(id, msg, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = `auth-alert ${type}`;
  el.classList.toggle('d-none', !msg);
}

function getCurrentAdmin() { try { return JSON.parse(localStorage.getItem('currentAdmin')) } catch (e) { return null } }

/* Customer accounts have been removed from the site — this read-only stub
   just lets the admin dashboard's Customers table keep working (it will
   show any accounts left over from earlier testing, otherwise stays empty). */
const CustomerStore = {
  key: 'solehaus_customers',
  get() { try { return JSON.parse(localStorage.getItem(this.key)) || [] } catch (e) { return [] } }
};

/* Admin accounts — a default admin ships out of the box, and additional
   admins can now self-register from admin-signup.html. All admin accounts
   are stored client-side in localStorage (same demo-data model as the rest
   of the site — see Products, Orders, etc.). */
const AdminStore = {
  key: 'solehaus_admins',
  get() {
    try {
      const stored = JSON.parse(localStorage.getItem(this.key));
      if (Array.isArray(stored) && stored.length) return stored;
    } catch (e) { /* fall through to default */ }
    return [{ id: 'A001', name: 'SoleHaus Admin', email: 'admin@solehaus.com', password: 'admin123' }];
  },
  save(list) { localStorage.setItem(this.key, JSON.stringify(list)); },
  nextId(list) { return 'A' + String(list.length + 1).padStart(3, '0'); }
};

function loginAdmin(e) {
  e?.preventDefault();
  const form = document.getElementById('adminSigninForm'); if (!form) return false;
  const email = form.email.value.trim().toLowerCase();
  const password = form.password.value;
  let ok = true;
  setFieldError('signinEmailErr', isValidEmail(email) ? '' : 'Enter a valid email');
  setFieldError('signinPasswordErr', password ? '' : 'Password is required');
  if (!isValidEmail(email) || !password) ok = false;
  if (!ok) return false;
  const admin = AdminStore.get().find(a => a.email.toLowerCase() === email && a.password === password);
  if (!admin) {
    setAuthMessage('signinMessage', 'Invalid admin credentials', 'error');
    return false;
  }
  localStorage.setItem('currentAdmin', JSON.stringify({ id: admin.id, name: admin.name, email: admin.email, role: 'admin' }));
  location.href = 'admin-dashboard.html';
  return true;
}

function signupAdmin(e) {
  e?.preventDefault();
  const form = document.getElementById('adminSignupForm'); if (!form) return false;
  const name = form.fullName.value.trim();
  const email = form.email.value.trim().toLowerCase();
  const password = form.password.value;
  const confirm = form.confirmPassword.value;
  let ok = true;

  setFieldError('fullNameErr', name ? '' : 'Full name is required');
  setFieldError('signupEmailErr', isValidEmail(email) ? '' : 'Enter a valid email');
  setFieldError('signupPasswordErr', password.length >= 6 ? '' : 'Password must be at least 6 characters');
  setFieldError('confirmPasswordErr', confirm === password ? '' : 'Passwords must match');
  if (!name || !isValidEmail(email) || password.length < 6 || confirm !== password) ok = false;

  const admins = AdminStore.get();
  if (admins.some(a => a.email.toLowerCase() === email)) {
    setFieldError('signupEmailErr', 'This email is already registered');
    ok = false;
  }
  if (!ok) return false;

  const admin = { id: AdminStore.nextId(admins), name, email, password };
  admins.push(admin);
  AdminStore.save(admins);
  localStorage.setItem('currentAdmin', JSON.stringify({ id: admin.id, name: admin.name, email: admin.email, role: 'admin' }));
  setAuthMessage('signupMessage', 'Admin account created! Redirecting...', 'success');
  setTimeout(() => { location.href = 'admin-dashboard.html'; }, 800);
  return true;
}

function loadDashboard() {
  if (!document.getElementById('adminSidebar')) return;
  const admin = getCurrentAdmin();
  if (!admin) { location.href = 'admin-signin.html'; return; }
  const adminName = document.getElementById('adminName');
  const adminEmail = document.getElementById('adminEmail');
  const adminAvatar = document.getElementById('adminAvatar');
  if (adminName) adminName.textContent = admin.name;
  if (adminEmail) adminEmail.textContent = admin.email;
  if (adminAvatar) adminAvatar.textContent = (admin.name || 'A').charAt(0).toUpperCase();
  const customerCount = document.getElementById('customerCount');
  if (customerCount) customerCount.textContent = String(CustomerStore.get().length);
  renderCustomers();
  renderAdminProducts();
  renderAdminOrders();
}

/* All orders placed on the site — guest checkouts included — so admin can
   track everything regardless of whether the shopper signed in. */
function renderAdminOrders() {
  const tbody = document.getElementById('orderRows');
  const orderCount = document.getElementById('orderCount');
  const orders = OrderStore.get().slice().sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  if (orderCount) orderCount.textContent = String(orders.length);
  if (!tbody) return;
  const customers = CustomerStore.get();
  tbody.innerHTML = orders.length ? orders.map(o => {
    const customer = o.customerId ? customers.find(c => c.id === o.customerId) : null;
    const customerLabel = customer ? customer.name : 'Guest';
    return `<tr>
      <td>${escapeHtml(o.orderId || '')}</td>
      <td>${escapeHtml(customerLabel)}</td>
      <td>${escapeHtml(o.productName || '')}</td>
      <td>${escapeHtml(String(o.quantity ?? ''))}</td>
      <td>$${escapeHtml(String(o.total ?? 0))}</td>
      <td><span class="status-badge ${orderStatusClass(o.status)}">${escapeHtml(o.status || 'Pending')}</span></td>
    </tr>`;
  }).join('') : '<tr><td colspan="6" class="text-center text-muted py-4">No orders placed yet</td></tr>';
}

function renderAdminProducts() {
  const tbody = document.getElementById('productRows');
  if (!tbody) return;
  tbody.innerHTML = PRODUCTS.length ? PRODUCTS.map(p => `<tr>
      <td><img class="admin-product-img" src="${escapeHtml(p.img)}" alt="${escapeHtml(p.alt || p.name)}"></td>
      <td>${escapeHtml(p.name)}</td>
      <td>${escapeHtml(p.brand)}</td>
      <td>${escapeHtml(p.cat)}</td>
      <td>$${escapeHtml(String(p.price))}</td>
      <td>${escapeHtml(p.sizes.join(', '))}</td>
      <td class="text-nowrap">
        <button type="button" class="btn btn-sm btn-outline-orange me-1" data-edit-product="${p.id}" aria-label="Edit ${escapeHtml(p.name)}"><i class="fa-solid fa-pen"></i></button>
        <button type="button" class="btn btn-sm btn-outline-danger" data-delete-product="${p.id}" aria-label="Delete ${escapeHtml(p.name)}"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>`).join('') : '<tr><td colspan="7" class="text-center text-muted py-4">No products found</td></tr>';
  attachAdminProductRowHandlers();
}

function attachAdminProductRowHandlers() {
  document.querySelectorAll('[data-edit-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = PRODUCTS.find(p => p.id === +btn.dataset.editProduct);
      if (product) ProductModal.open(product);
    });
  });
  document.querySelectorAll('[data-delete-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = PRODUCTS.find(p => p.id === +btn.dataset.deleteProduct);
      if (product) DeleteProductModal.open(product);
    });
  });
}

/* ----- Add / Edit product modal (admin dashboard) ----- */
const ProductModal = {
  instance: null,
  editingId: null,
  ensure() {
    if (this.instance) return;
    const el = document.getElementById('productModal');
    if (!el || typeof bootstrap === 'undefined') return;
    this.instance = new bootstrap.Modal(el);
    const sizeWrap = document.getElementById('productSizeCheck');
    if (sizeWrap) {
      sizeWrap.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        .map(s => `<label><input type="checkbox" value="${s}"> ${s}</label>`).join('');
    }
    document.getElementById('productForm')?.addEventListener('submit', e => {
      e.preventDefault();
      this.submit();
    });
  },
  open(product) {
    this.ensure();
    if (!this.instance) return;
    this.editingId = product ? product.id : null;
    document.getElementById('productModalTitle').textContent = product ? 'Edit Product' : 'Add Product';
    document.getElementById('productId').value = product ? product.id : '';
    document.getElementById('productName').value = product ? product.name : '';
    document.getElementById('productBrand').value = product ? product.brand : '';
    document.getElementById('productCategory').value = product ? product.cat : 'sports';
    document.getElementById('productPrice').value = product ? product.price : '';
    document.getElementById('productImage').value = product ? product.img : '';
    document.getElementById('productAlt').value = product ? (product.alt || '') : '';
    document.getElementById('productSizesErr').textContent = '';
    const sizeSet = new Set(product ? product.sizes : []);
    document.querySelectorAll('#productSizeCheck input[type=checkbox]').forEach(cb => {
      cb.checked = sizeSet.has(+cb.value);
    });
    this.instance.show();
  },
  submit() {
    const name = document.getElementById('productName').value.trim();
    const brand = document.getElementById('productBrand').value.trim();
    const cat = document.getElementById('productCategory').value;
    const price = +document.getElementById('productPrice').value;
    const img = document.getElementById('productImage').value.trim();
    const alt = document.getElementById('productAlt').value.trim() || name;
    const sizes = [...document.querySelectorAll('#productSizeCheck input[type=checkbox]:checked')].map(cb => +cb.value);
    const sizesErr = document.getElementById('productSizesErr');

    let ok = true;
    if (!name || !brand || !img || !price || price <= 0) ok = false;
    if (!sizes.length) { sizesErr.textContent = 'Select at least one size'; ok = false; }
    else sizesErr.textContent = '';
    if (!ok) return;

    if (this.editingId) {
      const idx = PRODUCTS.findIndex(p => p.id === this.editingId);
      if (idx > -1) PRODUCTS[idx] = { ...PRODUCTS[idx], name, brand, cat, price, img, alt, sizes };
    } else {
      const id = ProductStore.nextId(PRODUCTS);
      PRODUCTS.push({ id, name, brand, cat, price, img, alt, sizes, colors: [{ name: '', swatch: '#333', image: img, alt }] });
    }
    ProductStore.save(PRODUCTS);
    renderAdminProducts();
    toast(this.editingId ? 'Product updated' : 'Product added');
    this.instance.hide();
  }
};

/* ----- Delete product confirm modal (admin dashboard) ----- */
const DeleteProductModal = {
  instance: null,
  productId: null,
  ensure() {
    if (this.instance) return;
    const el = document.getElementById('deleteProductModal');
    if (!el || typeof bootstrap === 'undefined') return;
    this.instance = new bootstrap.Modal(el);
    document.getElementById('confirmDeleteProductBtn')?.addEventListener('click', () => this.confirm());
  },
  open(product) {
    this.ensure();
    if (!this.instance) return;
    this.productId = product.id;
    document.getElementById('deleteProductName').textContent = product.name;
    this.instance.show();
  },
  confirm() {
    PRODUCTS = PRODUCTS.filter(p => p.id !== this.productId);
    ProductStore.save(PRODUCTS);
    renderAdminProducts();
    toast('Product deleted');
    this.instance.hide();
  }
};

document.getElementById('addProductBtn')?.addEventListener('click', () => ProductModal.open(null));

function renderCustomers() {
  const tbody = document.getElementById('customerRows');
  if (!tbody) return;
  const customers = CustomerStore.get();
  tbody.innerHTML = customers.length ? customers.map(c => `<tr>
      <td>${escapeHtml(c.id)}</td>
      <td>${escapeHtml(c.name)}</td>
      <td>${escapeHtml(c.email)}</td>
      <td>${escapeHtml(c.joinDate)}</td>
      <td><span class="status-badge status-active">${escapeHtml(c.status)}</span></td>
    </tr>`).join('') : '<tr><td colspan="5" class="text-center text-muted py-4">No registered customers yet</td></tr>';
}

function resetAdminPassword(form) {
  if (!form) return false;
  const email = form.email.value.trim().toLowerCase();
  const newPassword = form.newPassword.value;
  const confirmPassword = form.confirmPassword.value;
  let ok = true;
  setFieldError('forgotEmailErr', isValidEmail(email) ? '' : 'Enter a valid email');
  if (!isValidEmail(email)) ok = false;
  setFieldError('forgotNewPasswordErr', newPassword.length >= 6 ? '' : 'Password must be at least 6 characters');
  if (newPassword.length < 6) ok = false;
  setFieldError('forgotConfirmPasswordErr', confirmPassword === newPassword ? '' : 'Passwords do not match');
  if (confirmPassword !== newPassword) ok = false;
  if (!ok) return false;

  const admins = AdminStore.get();
  const admin = admins.find(a => a.email.toLowerCase() === email);
  if (!admin) {
    setAuthMessage('forgotMessage', 'No admin account found with this email', 'error');
    return false;
  }
  admin.password = newPassword;
  AdminStore.save(admins);
  setAuthMessage('forgotMessage', 'Password updated successfully. Please login again.', 'success');
  form.reset();
  setTimeout(() => { location.href = 'admin-signin.html'; }, 1500);
  return true;
}

window.resetAdminPassword = resetAdminPassword;

/* ===== Orders ===== */
const OrderStore = {
  key: 'solehaus_orders',
  get() { try { return JSON.parse(localStorage.getItem(this.key)) || [] } catch (e) { return [] } },
  save(list) { localStorage.setItem(this.key, JSON.stringify(list)); },
  add(order) {
    const orders = this.get();
    orders.push(order);
    this.save(orders);
    return order;
  },
  clear() { localStorage.removeItem(this.key); },
  newOrderId() { return 'SH' + Math.floor(10000 + Math.random() * 90000); }
};
window.OrderStore = OrderStore;

function orderStatusClass(status) {
  const s = String(status || '').toLowerCase();
  if (s === 'delivered') return 'status-delivered';
  if (s === 'cancelled') return 'status-cancelled';
  return 'status-pending';
}

/* ----- Admin session ----- */
function logout() {
  localStorage.removeItem('currentAdmin');
  location.href = 'admin-signin.html';
}
window.loginAdmin = loginAdmin;
window.loadDashboard = loadDashboard;
window.renderCustomers = renderCustomers;
window.logout = logout;

function logoutUser() {
  logout();
}

function renderAdminDashboard() {
  loadDashboard();
}

/* Shop is admin-only for accounts — no customer sign-in/sign-up, so there's
   nothing dynamic to wire into the public nav. Just handle the admin bits. */
function initAuthPages() {
  document.getElementById('adminSigninForm')?.addEventListener('submit', loginAdmin);
  document.getElementById('adminSignupForm')?.addEventListener('submit', signupAdmin);
  document.querySelectorAll('[data-logout]').forEach(button => button.addEventListener('click', logoutUser));
  document.getElementById('adminMenuToggle')?.addEventListener('click', () => {
    document.getElementById('adminSidebar')?.classList.toggle('open');
  });
  document.querySelectorAll('.admin-menu a').forEach(link => link.addEventListener('click', () => {
    document.getElementById('adminSidebar')?.classList.remove('open');
  }));
  renderAdminDashboard();
}

initAuthPages();
render();
