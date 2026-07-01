/* ===== SoleHaus checkout.js =====
   Handles the checkout page only: order summary rendering, payment method
   switching, field validation and the custom success/error UI.
   Relies on PRODUCTS and Cart, both defined in main.js (loaded first). */

(function () {
  const form = document.getElementById('checkoutForm');
  if (!form) return; // not on the checkout page

  /* Guest checkout is allowed — no login required. If a customer happens to
     be signed in, saveOrders() below will still attach the order to their
     account so it shows up in "My Orders". */

  const SHIPPING = 0; // free shipping, matches rest of site

  /* ----- Render order summary from the cart ----- */
  function renderOrderSummary() {
    const cart = Cart.get();
    const wrap = document.getElementById('orderItems');
    let subtotal = 0;

    if (!cart.length) {
      wrap.innerHTML = '<p class="order-empty">Your cart is empty.</p>';
    } else {
      wrap.innerHTML = cart.map(item => {
        const p = PRODUCTS.find(x => x.id === item.id);
        if (!p) return '';
        const lineTotal = p.price * item.qty;
        subtotal += lineTotal;
        return `<div class="order-item">
          <img src="${p.img}" alt="${p.alt}">
          <div class="info">
            <div class="name">${p.name}</div>
            <div class="meta">${item.size ? 'Size ' + item.size + ' · ' : ''}Qty ${item.qty}</div>
          </div>
          <div class="price">$${lineTotal}</div>
        </div>`;
      }).join('');
    }

    const total = subtotal + (subtotal > 0 ? SHIPPING : 0);
    document.getElementById('orderSubtotal').textContent = '$' + subtotal;
    document.getElementById('orderShipping').textContent = subtotal > 0 ? (SHIPPING === 0 ? 'Free' : '$' + SHIPPING) : '$0';
    document.getElementById('orderTotal').textContent = '$' + total;
    return { cart, subtotal, total };
  }

  renderOrderSummary();

  /* ----- Payment method switching ----- */
  const cardFields = document.getElementById('cardFields');
  const paymentOptions = document.querySelectorAll('.payment-option');

  function syncCardFields() {
    const selected = form.querySelector('input[name="payMethod"]:checked');
    const isCard = selected && selected.value === 'card';
    cardFields.hidden = !isCard;
  }

  paymentOptions.forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    radio.addEventListener('change', () => {
      paymentOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      syncCardFields();
    });
  });
  syncCardFields();

  /* ----- Alert banner ----- */
  const alertBox = document.getElementById('checkoutAlert');
  const alertText = document.getElementById('checkoutAlertText');

  function showAlert(type, message) {
    alertBox.classList.remove('error', 'success');
    alertBox.classList.add(type, 'show');
    alertText.textContent = message;
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function hideAlert() {
    alertBox.classList.remove('show', 'error', 'success');
  }

  /* ----- Field validation ----- */
  function setFieldError(name, msg) {
    const el = document.getElementById(name + 'Err');
    if (el) el.textContent = msg;
    return !msg;
  }

  function clearFieldErrors() {
    form.querySelectorAll('.field-error').forEach(el => { el.textContent = ''; });
  }

  function validate() {
    let ok = true;
    const f = form;
    const req = (name, label) => {
      const val = f.elements[name].value.trim();
      const valid = setFieldError(name, val ? '' : (label + ' is required'));
      if (!valid) ok = false;
    };

    req('fullName', 'Full name');
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.elements.email.value.trim());
    if (!setFieldError('email', emailValid ? '' : 'Valid email is required')) ok = false;
    req('phone', 'Phone');
    req('city', 'City');
    req('address', 'Address');
    req('state', 'State');
    req('zip', 'ZIP code');
    req('country', 'Country');

    const payMethod = f.querySelector('input[name="payMethod"]:checked')?.value;
    if (payMethod === 'card') {
      req('cardNumber', 'Card number');
      req('cardExpiry', 'Expiry date');
      req('cardCvv', 'CVV');
    }

    return ok;
  }

  /* ----- Success modal ----- */
  const overlay = document.getElementById('successOverlay');

  function showSuccess() {
    overlay.classList.add('show');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  }

  /* ----- Save placed order(s) to localStorage ----- */
  function saveOrders(cart) {
    const orderDate = new Date().toLocaleDateString();
    const timestamp = Date.now();
    const customer = typeof getCurrentCustomer === 'function' ? getCurrentCustomer() : null;

    cart.forEach(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return;
      OrderStore.add({
        orderId: OrderStore.newOrderId(),
        customerId: customer ? customer.id : null,
        productName: p.name,
        productImg: p.img,
        quantity: item.qty,
        price: p.price,
        total: p.price * item.qty,
        status: 'Pending',
        orderDate,
        timestamp
      });
    });
  }

  /* ----- Submit handler ----- */
  form.addEventListener('submit', e => {
    e.preventDefault();
    clearFieldErrors();
    hideAlert();

    const { cart } = renderOrderSummary();
    if (!cart.length) {
      showAlert('error', 'Your cart is empty. Add a product before checking out.');
      return;
    }

    if (!validate()) {
      showAlert('error', 'Please fill all required fields');
      return;
    }

    saveOrders(cart);
    Cart.save([]);
    showSuccess();
  });
})();
