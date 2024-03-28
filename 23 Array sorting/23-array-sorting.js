/*
    Array sorting in Javascript
*/

/*
    Sorting an array of strings
*/

// array.sort() method sorts string elements alphabetically
// array.reverse() method sorts string elements in reverse alphabetical order
// can also be chained like array.sort().reverse()
let fruits = ['Apple', 'Orange', 'Kiwi', 'Raspberries', 'Grapes', 'Banana'];
console.log('This is the unsorted list of fruits:');
listArray(fruits);

let sortedFruits = fruits.sort();
console.log('This is the sorted list of fruits:');
listArray(sortedFruits);

sortedFruits.reverse();
console.log('This is the reverse sorted list of fruits:');
listArray(sortedFruits);

// Function list elements of array
function listArray(array) {
  for (let element of array) {
    console.log(element);
  }
}

/*
    Sorting an array of numbers
*/

let prices = [10.99, 4.2, 2, 3.45, 6.66, 0.5, 8.76];
console.log('This is the unsorted list of prices:');
listArray(prices);

// The compare function
// array.sort(compareFunction)
/*
    // The purpose of the compareFunction is to define an alternative sort order.
    // The sort() method needs to know the relation between each two elements to sort them. 
    // For each pair of two numbers it calls the function and then, based on the return value, may swap them.
    // The array.sort() callback of the compareFunction will return:
        if a > b then a - b > 0, i.e. a positive number (return 1)
        if a < b then a - b < 0, i.e. a negative number (return -1)
        if a === b then a - b === 0, i.e. 0 (return 0)
*/

// Compare function example 1
function sortNumbers1(n1, n2) {
  if (n1 > n2) return 1;
  if (n1 < n2) return -1;
  if (n1 === n2) return 0;
}

console.log('Example 1 - This is the sorted list of prices:');
listArray(prices.sort(sortNumbers1));

// Compare function example 2
// The simplest way to write a compare function for numbers
function sortNumbersAscending(n1, n2) {
  return n1 - n2;
}

console.log('Example 2 - This is the sorted list of prices:');
listArray(prices.sort(sortNumbersAscending));

// Reverse order compare function example 3
// The simplest way to write a reverse compare function for numbers
function sortNumbersDescending(n1, n2) {
  return n2 - n1;
}

console.log('Example 3 - This is the reverse sorted list of prices:');
listArray(prices.sort(sortNumbersDescending));

// Compare function to sort an array of mixed case strings
let mixedCaseAnimals = [
  'Cat',
  'JaGuAr',
  'dog',
  'rabbIT',
  'LyNx',
  'budgie',
  'pIg',
  'aNT',
  'MinX',
  'elePHAnt',
  'viper',
];

function sortMixedStrings(s1, s2) {
  let e1 = s1.toUpperCase();
  let e2 = s2.toUpperCase();
  return e1 === e2 ? 0 : e1 > e2 ? 1 : -1;
}

console.log('Example 4 - This is the sorted list of mixed case animals:');
listArray(mixedCaseAnimals.sort(sortMixedStrings));

/*
    Sorting optimised with map()

    // If the number of array elements is increasing,
    // it will potentially decrease the performance.
    // While we cannot reduce the number of times
    // that comparison function is executed, we can
    // reduce the work that the comparison has to do.

    // also known as Schwartzian transform, read more:
    // https://en.wikipedia.org/wiki/Schwartzian_transform
    // https://www.javascripttutorial.net/javascript-array-sort/

    // The Schwartzian transform is a technique used to improve
    // the efficiency of sorting a list of items. It's appropriate 
    // for comparison-based sorting when the ordering is based
    // on the ordering of a certain property (key) of the elements and
    // where computing that property is an intensive operation
    // that should be performed a minimal number of times.

    // Implementation
        // 1. extract the actual values into a temporary array using the map() method
        // 2. sort the temporary array with the elements that are already evaluated (or transformed)
        // 3. walk the temporary array to get an array with the right order.
*/

const DATA = [
  'oscar',
  'delta',
  'foxtrot',
  'alpha',
  'charlie',
  'bravo',
  'echo',
  'lima',
];
console.log('The array to be sorted is:');
listArray(DATA);

// Create temporary array to hold elements with position and sort-value
// The sort value in this example is the first letter of the element v[0]
let mappedFirstLetter = DATA.map((v, i) => {
  return { index: i, value: v[0] };
});

// Sort alphabetically the mapped array containing the reduced values
mappedFirstLetter.sort((a, b) => {
  return a.value.localeCompare(b.value);
});

// Rebuild the array based on the alphabetically sorted indexes
let sortedData = mappedFirstLetter.map((e) => {
  return DATA[e.index];
});
console.log('The alphabetically sorted array is:');
listArray(sortedData);
