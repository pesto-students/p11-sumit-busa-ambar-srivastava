let productViews = new WeakMap();
let cartItems = new WeakSet();

const incrementProductViews = (productId) => {
  if (!productViews.has(productId)) {
    productViews.set(productId, 1);
    return `Product ID 123 is viewed for the 1 time`;
  } else {
    const viewCount = productViews.get(productId);
    productViews.set(productId, viewCount + 1);
    return `Product ID 123 is viewed for the ${viewCount + 1} time`;
  }
};

const addToCart = (productId) => {
  if (cartItems.has(productId)) {
    return "Product already exist in your cart";
  } else {
    cartItems.add(productId);
    return "Product is added to your cart";
  }
};

const product = { id: 123 };

console.log(incrementProductViews(product));
console.log(incrementProductViews(product));
console.log(incrementProductViews(product));

console.log(addToCart(product));
console.log(addToCart(product));
console.log(addToCart(product));
