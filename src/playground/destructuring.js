// // Object Destructuring 

// const person = {
//   name: 'Andrew',
//   age: 27,
//   location : {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// //ES6 array destructuring  and names should match or you can use colon to rename it
// // to set default values if they don't exist use '='
// const {name: firstName = 'Happy', age} = person;
// const {city, temp: temperature } = person.location;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.` );

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publishers: {
//     name: 'Penguin'
//   }
// };
// // TODO : Penguin, Self-Published
// const {name: publisherName = 'Self-published'} = book.publishers;

// console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// ES6 array destructuring 
// array destructuring gets value accoring to the position
// to skip a value leave it blank and u can use default like object destructuring
const [ , city, state = 'New york'] = address;

console.log(`You are in ${address[1]} ${address[2]}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// grab first and third items using array destruction
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);