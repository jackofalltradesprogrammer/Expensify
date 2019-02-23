const person = {
  name: 'Andrew',
  age: 27,
  location : {
    city: 'Philadelphia',
    temp: 92
  }
};

//ES6 array destructuring  and names should match or you can use colon to rename it
// to set default values if they don't exist use '='
const {name: firstName = 'Happy', age} = person;
const {city, temp: temperature } = person.location;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.` );

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publishers: {
    name: 'Penguin'
  }
};
// TODO : Penguin, Self-Published
const {name: publisherName = 'Self-published'} = book.publishers;

console.log(publisherName);