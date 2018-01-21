// argument objects: no longer bound with arrow functions
const add = (a, b) => {
    console.log(arguments);
    return a + b;    
};

console.log(add(55, 1));


//this keyword: no longer bound

const user = {
    name: 'Maca Villa',
    age: 23,
    cities: ['Córdoba', 'Buenos Aires'],
    printPlacesLived: function() {
        console.log('Name:', this.name);
        console.log('Cities:', this.cities);
    }
};