async function loadProducts(containerId) {
    const response = await fetch("products.json");
    const products = await response.json();
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(category => {
      const section = document.createElement("section");
      section.innerHTML = `<h2>${category}</h2>`;
      const grid = document.createElement("div");
      grid.className = "product-grid";
  
      products.filter(p => p.category === category).forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p>Sold: ${product.unitsSold}</p>
          <input type="number" class="quantity" min="1" value="1">
          <button onclick="addToCart('${product.id}', this)">Add to Cart</button>
        `;
        grid.appendChild(card);
      });
  
      section.appendChild(grid);
      container.appendChild(section);
    });
  }
  
  function addToCart(productId, button) {
    const quantity = button.previousElementSibling.value;
    alert(`Added ${quantity} of ${productId} to cart.`);
  }
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    return cart;
  }
  
  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function addToCart(productId, button) {
    const quantity = parseInt(button.previousElementSibling.value);
    const cart = loadCart();
    cart[productId] = (cart[productId] || 0) + quantity;
    saveCart(cart);
    updateCartDisplay();
    alert(`✅ Added ${quantity} item(s) to cart.`);
  }
  
  async function updateCartDisplay() {
    const cart = loadCart();
    const res = await fetch("products.json");
    const products = await res.json();
    let totalItems = 0, totalPrice = 0;
  
    for (const id in cart) {
      const product = products.find(p => p.id === id);
      if (product) {
        totalItems += cart[id];
        totalPrice += product.price * cart[id];
      }
    }
  
    document.getElementById("cart-info").textContent =
      `🛒 Cart: ${totalItems} item(s) | Total: $${totalPrice.toFixed(2)}`;
  }
  card.innerHTML = `
  <img src="${product.image}" alt="${product.name}" style="width:100%;height:auto;">
  <h3>${product.name}</h3>
  <p>Price: $${product.price}</p>
  <p>Sold: ${product.unitsSold}</p>
  <input type="number" class="quantity" min="1" value="1">
  <button onclick="addToCart('${product.id}', this)">Add to Cart</button>
`;
async function loadProducts(containerId) {
    const res = await fetch("products.json");
    const products = await res.json();
  
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width:100%">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Sold: ${product.unitsSold}</p>
        <input type="number" value="1" min="1">
        <button onclick="addToCart('${product.id}', this)">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  }
  