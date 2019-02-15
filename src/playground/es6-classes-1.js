// TODO Setup Consturctor to take name and age (default to 0)
// TODO getDescription - Andre Mead is 26 year(s) old.

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(); // * calls the parent class constructor
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription(); // * gets the parent description

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

// TODO Traveler -> Person
// TODO Add support for homeLocation
// TODO Override getGreeting
// TODO 1. Hi. I am Andrew Mead. I'm visiting from Philadelphia.
// TODO 2. Hi. I am Andrew Mead.

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());
