'use strict';

// argument objects: no longer bound with arrow functions
var add = function add(a, b) {

    return a + b;
};

console.log(add(55, 1));

//this keyword: no longer bound

var user = {
    name: 'Maca',
    age: 23,
    cities: ['Córdoba', 'Buenos Aires'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

// Challenge Area

var multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        // const result = this.numbers.map((number) => number + ' * ' + this.multiplyBy + ' = ' + number * this.multiplyBy);
        return this.numbers.map(function (number) {
            return number + ' * ' + _this2.multiplyBy + ' = ' + number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
