'use strict';

const rectangle = {
  set width(value) {
    this.resultWidth = value;
  },
  set height(value) {
    this.resultHeight = value;
  },
  resultWidth: 5,
  resultHeight: 5,
  get perimeter() {
    return this.sumPerimeter =
    (this.resultWidth + this.resultHeight) * 2 + ' см';
  },
  get square() {
    return this.sumSquare = this.resultWidth * this.resultHeight + ' см';
  },
  sumPerimeter: '',
  sumSquare: '',
};

console.log('Изменяем объект:',
    rectangle.width = 10, rectangle.height = 15, rectangle);

console.log('Измеряем периметр:', rectangle.perimeter);

console.log('Измеряем площадь:', rectangle.square);

