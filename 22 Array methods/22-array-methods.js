/**
 * *  Array methods in JavaScript
 */

/**
 * *  array.forEach() method
 *
 * *  executes a provided callback function once for each array element
 */

let students = ['bob', 'mary', 'alan', 'theo', 'andy', 'simon'];
students.forEach(capitalize);
students.forEach(printNames);

// Function to capitalize first letter
function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function printNames(element) {
  console.log(element);
}

// console.log(students[0]);
console.log('<< End array.forEach() example >>');

/**
 * *  map and array.map() methods
 *
 * *  a map is an object which holds value-key pairs of any data type
 *
 * *  array.map() executes a provided callback function once for each array element
 * *  and creates a new array in the process
 */

// map object example
const STORE = new Map([
  ['t-shirt', 20],
  ['jeans', 10],
  ['socks', 30],
  ['hat', 15],
]);

function listMap(mapObject) {
  mapObject.forEach((value, key) => {
    console.log(`${key}, $${value}`);
  });
}

listMap(STORE);

/**
 * *  map methods
 */

// map .size() method
console.log(`Map size is ${STORE.size}`); // 4

// map .get() method
let shoppingCart = 0;
shoppingCart += STORE.get('hat'); // 15
console.log(`Total in the shopping cart: ${shoppingCart}`);

// map .set() method
STORE.set('robe', 40);
listMap(STORE);

// map .delete() method
if (STORE.has('t-shirt')) {
  STORE.delete('t-shirt');
}
listMap(STORE);

console.log('<< End map object methods >>');

// array.map() example
let numbers = [2, 3, 4, 5];

let squares = numbers.map(squared);
squares.forEach(printNumbers);

let cubes = numbers.map(cubed);
cubes.forEach(printNumbers);

function squared(element) {
  return Math.pow(element, 2);
}

function cubed(element) {
  return Math.pow(element, 3);
}

function printNumbers(element) {
  console.log(element);
}

console.log('<< End array.map() example >>');

/**
 * *  array.filter() method
 *
 * *  creates a new array with all the elements
 * *  that pass the test described by the function
 */

let ages = [18, 19, 21, 23, 42, 15, 17];

let adults = ages.filter(checkAge);
adults.forEach(printAges);

function checkAge(element) {
  return element >= 18;
}

function printAges(element) {
  console.log(element);
}

console.log('<< End array.filter() example >>');

/**
 * *  array.reduce() method
 *
 * *  this method reduces an array to a single value
 */

let prices = [2.99, 1.8, 3.99, 5, 0.5, 11];
let total = prices.reduce(checkOut);

function checkOut(total, element) {
  return total + element;
}

console.log(`The total price is ${total}`);
console.log('<< End array.reduce() example >>');
