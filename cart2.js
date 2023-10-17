'use strict';

const cart = {

  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(title, price, amount = 1) {
    const item = {title, price, amount};

    this.items.push(item);
    this.increaseCount(amount);
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    const res = this.items.reduce((acc, item) =>
      acc += item.price * item.amount, 0);
    return res;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },

};

cart.clear();
cart.add('телофон', 100000, 1);
cart.add('наушники', 4500, 1);
cart.add('защитное стекло', 2000, 2);
cart.print();

