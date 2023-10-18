'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  get Discount() {
    return this.discount;
  },

  set Discount(str) {
    if (str === 'METHED') {
      this.discount = 15;
    }

    if (str === 'NEWYEAR') {
      this.discount = 21;
    } else {
      console.log('no');
    }
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
    let tax = 0;
    const str = '0.';
    const newStr = parseFloat(str + this.discount);
    const resPrice = this.items.reduce((acc, item) =>
      acc += item.price * item.amount, 0);
    if (this.discount > 0) {
      tax = resPrice * newStr;
    }

    return resPrice - tax;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
    this.discount = 0;
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
