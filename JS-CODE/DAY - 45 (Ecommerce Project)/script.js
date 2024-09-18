// Base / Parent product class
class Product {
  constructor(id, name, price, imageUrl) {
    // abstract
    if (this.constructor === Product) {
      throw new Error("can not inilize the abstract class");
    }
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  // abstract method
  displayProduct() {
    throw new Error("Abstract method must be implemented");
  }
}

// PhysicalProduct inherited from Products
class PhysicalProduct extends Product {
  constructor(id, name, price, weigth, imageUrl) {
    super(id, name, price, imageUrl);
    this.weigth = weigth; // additional property
  }

  displayProduct() {
    return `<div class = "product">
      <img src="${this.imageUrl}"
      alt = "${this.name}"
      class = "product-image" height = "200px" width="200px">
      <h3>${this.name}</h3>
      <p>Weight : ${this.weigth} Kg </p>
      <button onclick="shop.addtocart(${this.id})">Add to Card</button>
      </div>
      `;
  }
}

// DigitalProduct inherited from Products
class DigitalProduct extends Product {
  constructor(id, name, price, fileSize, imageUrl) {
    super(id, name, price, imageUrl);
    this.fileSize = fileSize; // additional property
  }

  displayProduct() {
    return `<div class = "product">
        <img src="${this.imageUrl}"
        alt = "${this.name}"
        class = "product-image" height = "200px" width="200px">
        <h3>${this.name}</h3>
        <p>fileSize : ${this.fileSize} MB </p>
        <button onclick="shop.addtocart(${this.id})">Add to Card</button>
        </div>
        `;
  }
}

// cartItem class to to represent items in the cart
class CartItem {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  incrementQuantity() {
    this.quantity++;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }

  // factory
  displayCartItem() {
    return `<li class="cart-item">
    <img src ="${this.product.imageUrl}" alt="${
      this.product.name
    }" class = "cart-item-image" height = "50px"
    width = "50px">  ${this.product.name} -$${this.product.price} x ${
      this.quantity
    } = $${this.getTotalPrice()}
    </li>`;
  }
}

// cart class to manage cart items
class Cart {
  constructor() {
    this.items = []; // empty
  }
  addProduct(product) {
    const existingItem = this.items.find(
      (item) => item.product.id == product.id
    );

    if (existingItem) {
      existingItem.incrementQuantity();
    } else {
      this.items.push(new CartItem(product));
    }
    this.displayCart();
  }

  displayCart() {
    const cartItem = document.getElementById("cart-item");
    cartItem.innerHTML = "";
    this.items.forEach((item) => {
      cartItem.innerHTML += item.displayCartItem();
    });
  }

  checkout() {
    if (this.items.length === 0) {
      alert("Your cart is empty");
    }

    alert(`Checkout ${this.items.length}. Total price : ${this.getTotal()}`);
    this.items = [];
    this.displayCart();
  }

  // factory
  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

// Shop class to manage overall shopping
class Shop {
  constructor(products) {
    this.products = products;
    this.cart = new Cart();
  }

  displayProduct() {
    const productList = document.getElementById("products");
    productList.innerHTML = "";
    this.products.forEach((product) => {
      productList.innerHTML += product.displayProduct();
    });
  }

  addtocart(productId) {
    // productId = unique
    const product = this.products.find((p) => p.id === productId);
    this.cart.addProduct(product);
  }

  checkout() {
    this.cart.checkout();
  }

  init() {
    this.displayProduct();
    document.getElementById("checkout-button").addEventListener("click", () => {
      this.checkout();
    });
  }
}

const products = [
  new PhysicalProduct(
    1,
    "Laptop",
    1500,
    2.4,
    "https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024"
  ),
  new PhysicalProduct(
    1,
    "Laptop",
    1500,
    2.4,
    "https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024"
  ),
  new PhysicalProduct(
    1,
    "Laptop",
    1500,
    2.4,
    "https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024"
  ),
  new PhysicalProduct(
    1,
    "Laptop",
    1500,
    2.4,
    "https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024"
  ),
  new PhysicalProduct(
    1,
    "Laptop",
    1500,
    2.4,
    "https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024"
  ),
];

const shop = new Shop(products);
shop.init();
