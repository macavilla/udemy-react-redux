// const square = function (x) {
//     return x*x;
// };


// const squareArrow = ()
// console.log(square(8));

const fullName = 'John Doe';

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const shorthand = (fullName) => fullName.split(' ')[0];

console.log('fullName', fullName);
console.log('First name', getFirstName(fullName));
console.log('First name with shorthand arrow function:', shorthand(fullName));