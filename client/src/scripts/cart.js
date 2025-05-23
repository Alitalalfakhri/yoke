const cart = {
  cartArray: [],

  addItem(id, name, image) {
    const existingItem = this.cartArray.find(item => item.productId === id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      this.cartArray.push({ productId: id, productName: name, productImage: image, quantity: 1 });
    }
  },
  removeItem(id) {
    this.cartArray = this.cartArray.filter(item => item.productId !== id);
    return this.cartArray; // Return the updated array
  }

};

export default cart;
