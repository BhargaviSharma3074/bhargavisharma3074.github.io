let cart = {};
const products = [
    { id: 1, name: "Product 1", price: 25 },
    { id: 2, name: "Product 2", price: 50 },
    { id: 3, name: "Product 3", price: 75 },
];

const showProducts = () => {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach((product) => {
        productList.innerHTML += `
  <div class="product">
    <span>${product.name} - $${product.price}</span>
    <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
  </div>`;
    });
};

const showCart = () => {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
    products.forEach((product) => {
        const quantity = cart[product.id] || 0;
        if (quantity > 0) {
            cartList.innerHTML += `
    <div class="cart-item">
      <span>${product.name} - $${product.price} x ${quantity} = $${product.price * quantity}</span>
      <div>
        <button class="btn" onclick="decrement(${product.id})">-</button>
        <button class="btn" onclick="increment(${product.id})">+</button>
      </div>
    </div>`;
        }
    });
    updatePrice();
};

const addToCart = (id) => {
    cart = { ...cart, [id]: 1 };
    showCart();
};

const increment = (id) => {
    cart = { ...cart, [id]: cart[id] + 1 };
    showCart();
};

const decrement = (id) => {
    if (cart[id] > 1) {
        cart = { ...cart, [id]: cart[id] - 1 };
    } else {
        delete cart[id];
    }
    showCart();
};

const updatePrice = () => {
    const total = products.reduce((sum, product) => {
        return sum + product.price * (cart[product.id] || 0);
    }, 0);
    document.getElementById("totalValue").innerText = total;
};

showProducts();
showCart();
