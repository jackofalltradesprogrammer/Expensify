//es5 function
const square = function(x) {
    return x*x;
};

//Es6 arrow function and are anonymous functions
// const squareArrow = (x) => {
//     return x*x;
// };

//Arrow function experession syntax
const squareArrow = (x) => x*x;

// Challenge - User Arrow function
// getFirstName('Mike Smith') -> 'Mikie'
// Create regular arrow function
const getFirstName = (fullname) => {
    return fullname.split(' ')[0];
};

// create arrow function using shorthand syntax
const getFirstName2 = (fullname) => fullname.split(' ')[0];

console.log(square(8));
console.log(squareArrow(8));
console.log(getFirstName2('Mike Smith'));