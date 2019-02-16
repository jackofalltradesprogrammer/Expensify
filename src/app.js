// import './utils.js';
// ! named imports - name should match
// ! default export don't have curly braces and you can call it anyhting
// import subtractAnyname, { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtractAnyname(100, 23));


import isSenior, {isAdult, canDrink} from './person';

console.log('you are an adult ', isAdult(18));
console.log('you can drink', canDrink(18));
console.log('you are a senior', isSenior(65));


