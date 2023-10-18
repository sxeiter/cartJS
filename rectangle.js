'use strict';

const rectangle = {
  get rectWidth() {
    return this.width + 'см';
  },

  get rectHeight() {
    return this.height + 'см';
  },

  set rectWidth(num = 5) {
    (Number.isFinite(num)) ? this.width = num : console.log('Введите число');
  },

  set rectHeight(num = 5) {
    (Number.isFinite(num)) ? this.height = num : console.log('Введите число');
  },

  generatePerimeter() {
    const resPerimetr = (parseInt(this.rectWidth) * 2) +
    (parseInt(this.rectHeight) * 2) + 'см';

    return resPerimetr;
  },

  genereteSquare() {
    const resSquare = parseInt(this.rectWidth) *
    parseInt(this.rectHeight) + 'см';

    return resSquare;
  },
};

rectangle.rectWidth = 5;
rectangle.rectHeight = 6;

console.log(rectangle.rectWidth);
console.log(rectangle.rectHeight);

console.log(rectangle.generatePerimeter());
console.log(rectangle.genereteSquare());
