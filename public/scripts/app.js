'use strict';

var _arguments = arguments;
// argument objects: no longer bound with arrow functions
var add = function add(a, b) {
    console.log(_arguments);
    return a + b;
};

console.log(add(55, 1));

//this keyword: no longer bound

var user = {
    name: 'Maca Villa',
    age: 23,
    cities: ['Córdoba', 'Buenos Aires'],
    printPlacesLived: function printPlacesLived() {
        console.log('Name:', this.name);
        console.log('Cities:', this.cities);
    }
};
