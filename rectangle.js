'use strict';

const rectangle = {
  _width: 5,
  _height: 5,
  set width(value) {
    if (typeof value === 'number') {
      this._width = value;
    }
  },
  set height(value) {
    if (typeof value === 'number') {
      this._height = value;
    }
  },

  get perimeter() {
    return (this._width + this._height) * 2 + ' см';
  },
  get square() {
    return this._width * this._height + ' см2';
  },

};

console.log('Изменяем объект:',
    rectangle.width = 10, rectangle.height = 15, rectangle);

console.log('Измеряем периметр:', rectangle.perimeter);

console.log('Измеряем площадь:', rectangle.square);
