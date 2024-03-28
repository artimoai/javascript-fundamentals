/**
 * *    Objects
 *
 * *    They are a group of properties and methods.
 * ?        properties = what an object is
 * ?        methods = what an object can do
 * ?        this. is a reference to a particular object in the immediate context
 */

const CAR = {
  // properties
  model: 'Tesla',
  color: 'Black',
  year: 1999, // <- this one
  // remember the comma after each property and method

  // methods
  drive: function () {
    console.log(`You drive the ${this.model}`);
  },
  brake: function () {
    console.log(`You stopped the ${this.color} ${this.model}`);
  },
};

console.log(CAR.model);
console.log(CAR.color);
console.log(CAR.year);

CAR.drive();
CAR.brake();

/**
 * *    this. reference example
 * *    this replaces the actual name of an object
 */

//  Access the contextual properies of a window object
console.log(this);

// modify the value of the name property
this.name = 'Name property';
console.log(this); // the value of name has changed
console.log(this.name); // Name property
