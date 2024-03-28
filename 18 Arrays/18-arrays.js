/*
    Arrays
    // Variables that can store multiple elements/values accesible via unique indexes
    // Arrays can store mixed data type elements
*/

let fruits = [
  'Apple',
  'Banana',
  'Pineapple',
  'Cherry',
  'Peach',
  'Tomato',
  'Orange',
  'Grapes',
  42,
];

// Find length of the Array
console.log(`Array length is ${fruits.length}`);

// Access elements by index
let peachIndex = fruits.indexOf('Peach'); // Index 4
console.log(peachIndex);
console.log(`Element on index 4 is ${fruits[4]}`); // Peach
// indexyOf('Kiwi') if an element can't be found in an array it will return -1

// Overwrite element in an Array
fruits[4] = 'Coconut';
console.log(`Element on index 4 is ${fruits[4]}`); // Coconut

// Add element at the end of the Array
fruits.push('Lemon');
console.log(fruits);

// Remove element at the end of the Array
fruits.pop();
console.log(fruits);

// Add element at the beginning of the Array
fruits.unshift('Mango');
console.log(fruits);

// Remove element at the beginning of the Array
fruits.shift();
console.log(fruits);

/*
    Loop through the elements of an Array
*/
for (let i = 0; i < fruits.length; i += 1) {
  console.log(i, fruits[i]);
}
console.log('Done');

// Reverse loop through Array
for (let i = fruits.length - 1; i >= 0; i -= 1) {
  console.log(i, fruits[i]);
}
console.log('Done');

// The best way to loop over elements in an Array
// Can include 
for (let fruit of fruits) {
  console.log(fruit);
}

/*
    Sorting an Array (of strings)
*/

// In alphabetical order
sortedFruits = fruits.sort();
console.log(sortedFruits);

// In reverse alphabetical order
sortedFruits = fruits.sort().reverse();
console.log(sortedFruits);

// Also read more on sorting algorithms in JS
// https://www.section.io/engineering-education/sorting-algorithms-in-js/

/*
    2D Arrays
    These are arrays of arrays
*/

let newFruits = ['Apple', 'Banana', 'Pineapple', 'Cherry', 'Tomato', 'Orange'];
let vegetables = ['Potato', 'Carrot', 'Cabbage', 'Onion'];
let meats = ['Pork', 'Fish', 'Chicken'];

let groceriesList = [newFruits, vegetables, meats];
console.log(groceriesList);

// Looping over the elements on each array
for (let list of groceriesList) {
  for (let element of list) {
    console.log(element);
  }
}

// Another way to access 2D array elements
// First index is the row, Second index is the column
// groceriesList[][];

console.log(`Element[0][0] is ${groceriesList[0][0]}`);
