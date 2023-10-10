'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice () {
        return this.totalPrice;
    },
    add (nameItem, price ,sum = 1) {
        const newItem = {
            nameItem,
            price,
            sum,
        }
        this.count += 1; 
        this.items.push(newItem);
        this.calculateItemPrice();
    },
    increaseCount (number) {
        this.count += number;
    },
    calculateItemPrice () {
        this.totalPrice = 0;
        this.items.forEach((item) => {
            this.totalPrice += item.price * item.sum;
    })
    },
    clear () {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
    print () {
        const cartStr = JSON.stringify(cart); 
        console.log(cartStr);
        console.log("Общая стоимость корзины:" ,this.getTotalPrice());
    }
}

cart.clear();

cart.add("телофон", 100000 , 1);

cart.add("наушники", 4500 , 1);

cart.add("защитное стекло", 2000 , 2);

cart.print();