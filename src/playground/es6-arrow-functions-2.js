// argument objects: no longer bound with arrow functions
const add = (a, b) => {
    
    return a + b;    
};

console.log(add(55, 1));


//this keyword: no longer bound

const user = {
    name: 'Maca',
    age: 23,
    cities: ['Córdoba', 'Buenos Aires'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());


// Challenge Area

const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number + ' * ' + this.multiplyBy + ' = ' + number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
