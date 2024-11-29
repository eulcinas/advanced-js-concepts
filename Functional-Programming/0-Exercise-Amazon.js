// Amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

let amazonHistory = [];

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

const pipe =
  (f, g) =>
  (...args) =>
    g(f(...args));

purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, { name: "laptop", price: 200 });

console.log(purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, { name: "laptop", price: 200 }));
// if using Pipe then ^ functions should be reversed in order

function purchaseItem(...fns) {
  // return fns.reduce(compose);
  return fns.reduce(pipe);
}

function addItemToCart(user, item) {
  amazonHistory.push(user);
  const updateCart = user.cart.concat([item]);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

/**
 * Implement a cart feature:
 * 1. Add items to cart.
 * 2. Add 3% tax to item in cart
 * 3. Buy item: cart --> purchases
 * 4. Empty cart
 */

function refundItem() {}
function getUserState() {}

console.log(amazonHistory);
