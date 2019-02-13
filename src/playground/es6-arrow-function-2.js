// arguments object - no longer bound with arrow functions

// const add =  (a, b) => {
//     console.log(arguments);
//     return a + b;
// };

// with the regular functions even if the method has only two arguments,
// arguments object has excess to all given during the mesage 
// arrow functions don't have access to arguments object
// console.log(add(55, 1, 1001)); 


// this keyboard - no loger bound
// this value breaks in an anonymous function
// this value doesn't break in arrow functions, as arrow functions don't have their own 'this' value
// arrow functions use this of the parent
// arrow functions don't bind with the local 'this' value, it always go for the parent
const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // cannot use arrow function below, it will go for 'this' of the parent and not the object
    // printPlacesLived: function()
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
        // return this.cities.map((city) => {
        //   return this.name + ' has lived in ' +  city;
        // });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    
};

console.log(user.printPlacesLived());

// challenge area

const multiplier = {
    // numbers - array of numbers
    numbers: [2, 3, 4, 5],
    // multiplyBy- single number
    multiplyBy: 5,
    // multiply - returns a new array where the number have been multiplied
    multiply() {
        return this.numbers.map((number) => this.multiplyBy*number);
    }

};

console.log(multiplier.multiply());