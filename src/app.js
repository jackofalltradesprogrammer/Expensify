// import './utils.js';
// named imports - name should match
// import { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(100, 23));

import {isAdult, canDrink} from './person';

console.log('you are an adult ', isAdult(18));
console.log('you can drink', canDrink(18));
