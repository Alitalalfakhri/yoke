import cart from './scripts/cart.js'

export const backendUrl = 'https://6b77b9ed-2fda-4d41-b06b-cc6f53bf39d9-00-3fwnnvcbxwxjp.pike.replit.dev'


export function updateCart() {
  const totalQuantity = cart.cartArray.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  console.log("updated");
  return totalQuantity;
}