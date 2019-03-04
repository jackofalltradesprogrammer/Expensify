// Promise takes two functions one for resolving and other for rejection
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ name: 'Harpreet', age: 29, message: 'This is my resolved data' }); // Resolve can take only one value, it can be a object
    // resolve('This is my other resolved data'); //Promise executes resolve / reject just once ....so this one is ignored
    reject('Something went wrong!');
  }, 5000);
});

console.log('before');
// .then gets fire if the promise is resolved
// .catch() is used to catch any error if the promise is not resolved
promise
  .then(data => {
    console.log('1', data);
  })
  .catch(error => {
    console.log('error: ', error);
  });

// the above can be used with a different syntax where then takes a second argument as a catch handler
promise.then(
  data => {
    console.log('1', data);
  },
  error => {
    console.log('error: ', error);
  }
);
console.log('after');
