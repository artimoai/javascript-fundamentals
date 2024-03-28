/**
 * *    Class accessors (getters and setters)
 * ?    Accessor properties are represented by “getter” and “setter” methods.
 * ?    These are useful to read or modify the values of an object.
 *
 */

/**
 * *    The "get" keyword
 * ?    In JavaScript, getter methods are used to access the properties of an object.
 * ?    Get binds an object property to a function when that function is invoked.
 * ?    When accessing the value of an object, we access the value as a .property and not a method().
 * !    Getter names must be different from property names. You can preseed a property _name with an underscore.
 */

class User {
  language = '';

  constructor(firstname, surname) {
    this._firstname = firstname;
    this._surname = surname;
  }

  // getter method
  get firstName() {
    return `${this._firstname}`;
  }

  // getter method
  get surName() {
    return `${this._surname.toUpperCase()}`;
  }

  // getter method
  get fullName() {
    return `${this.firstName} ${this.surName}`;
  }

  // setter method
  set speaks(value) {
    this.language = value[0].toUpperCase() + value.substring(1);
  }
}

// Example getters
let user1 = new User('Joey', 'King');

console.log(`First name ${user1.firstName}`); // Joey
console.log(`Family name ${user1.surName}`); // King
console.log(`Welcome ${user1.fullName}!`); // Joey King

/**
 * *    The "set" keyword
 * ?    In JavaScript, setter methods are used to change the values of an object.
 */

// Example setter
user1.speaks = 'english';
console.log(`Fun fact, ${user1.fullName} speaks ${user1.language}.`);

/**
 * *    Object.defineProperty()
 * ?    In JavaScript, you can also use Object.defineProperty() method to add getters and setters to an object.
 */

class Student {
  _firstName = '';
  _lastName = '';
  _gpa = 0;

  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

let student1 = new Student('Max', 'Gayne');

// Object.defineProperty() is used to access and change the property of an object like student1.

// getting properties
Object.defineProperty(student1, 'getFirstName', {
  get: function () {
    return this._firstName;
  },
});

Object.defineProperty(student1, 'getGPA', {
  get: function () {
    return this._gpa;
  },
});

// setting properties
Object.defineProperty(student1, 'changeLastName', {
  set: function (value) {
    this._lastName = value;
  },
});

Object.defineProperty(student1, 'changeGPA', {
  set: function (value) {
    this._gpa = value;
  },
});

console.log(`${student1.fullName} is a student`);
console.log(`${student1.getFirstName} has a ${student1.getGPA} GPA`);

student1.changeLastName = 'Payne';
student1.changeGPA = 3.9;

console.log(
  `${student1.getFirstName} changed their last name. They are now known as ${student1.fullName}.`
);
console.log(
  `After studying hard, ${student1.fullName} has a ${student1.getGPA} GPA.`
);

/**
 * * Pass objects as arguments
 */

class Car {
  constructor(make, year, bhp, color) {
    this.make = make;
    this.year = year;
    this.bhp = bhp;
    this.color = color;
  }
}

const CAR100 = new Car('Tesla', 2020, 300, 'red');
const CAR200 = new Car('BMW', 2019, 252, 'blue');

function displayInfo(car) {
  console.log(`${car.make} | ${car.year} | ${car.bhp}bhp | ${car.color}`);
}

displayInfo(CAR100);
displayInfo(CAR200);

function changeCarColor(car, newColor) {
  car.color = newColor;
}

changeCarColor(CAR200, 'gold');
displayInfo(CAR200);
