'use strict';

const cart = {
  items: [],
  get totalPricing() {
    return this.totalPrice = this.calculateItemPrice();
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
    const rebate = val * `0.${this.discount}`;
    return val - rebate;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    const cartStr = JSON.stringify(cart);
    console.log(cartStr);
    console.log('Общая стоимость корзины:', this.totalPrice);
  },
  set setDiscount(value) {
    if (value === 'METHED') {
      this.discount = 15;
    }
    if (value === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  discount: 0,
};

cart.clear();

cart.add('телофон', 100000, 1);

cart.add('наушники', 4500, 1);

cart.add('защитное стекло', 2000, 2);

cart.print();
