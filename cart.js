'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
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
    const totalPrice = this.items.reduce((acc, item) =>
      acc += item.price * item.amount, 0);
    const discountAmount = totalPrice * (this.discount / 100);
    return totalPrice - discountAmount;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },
  set setDiscount(promocode) {
    if (promocode === "METHED") {
      this.discount = 15;
    } else if (promocode === "NEWYEAR") {
      this.discount = 21;
    }
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
