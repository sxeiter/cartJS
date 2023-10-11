'use strict';

const cart = {
  items: [],
  get totalPricing() {
    this.totalPrice = this.calculateItemPrice();
  },
  totalPrice: 0,
  count: 0,
  add(nameItem, price, sum = 1) {
    const newItem = {
      nameItem,
      price,
      sum,
    };
    this.count += 1;
    this.items.push(newItem);
  },
  increaseCount(number) {
    this.count += number;
  },
  calculateItemPrice(val = 0) {
    this.items.forEach((item) => {
      val += item.price * item.sum;
    });
    return val;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    const cartStr = JSON.stringify(cart);
    console.log(cartStr);
    console.log("Общая стоимость корзины:", this.totalPrice);
  },
};


cart.clear();

cart.add("телофон", 100000 , 1);

cart.add("наушники", 4500 , 1);

cart.add("защитное стекло", 2000 , 2);

cart.print();