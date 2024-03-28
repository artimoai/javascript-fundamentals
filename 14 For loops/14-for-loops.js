/*
    For loops, break and continue, nested loops
*/

// Example
for (let counter = 1; counter <= 10; counter += 1) {
  console.log(counter);
}
console.log('Finished counting from 1 to 10');

// Another example
let text = '';

for (let i = 0; i <= 5; i += 1) {
  text += 'The number is ' + i + '<br />';
  document.getElementById('for-loop').innerHTML = text;
}

/* 
    Break and continue statements
*/

// break - breaks out of a loop entirely
for (let j = 1; j <= 20; j += 1) {
  if (j == 13) {
    break;
  }
  console.log(j);
}
console.log('We broke out of the loop after 12');

// continue - will skip an iteration of the loop
for (let k = 1; k <= 20; k += 1) {
  if (k == 13) {
    continue; // skiped value 13
  }
  console.log(k);
}
console.log('We skipped iteration 13 and continued counting');

/* 
    Nested loops
*/

// Once we complete an entire iteration of the inner loop
// we will complete one iteration of the outer loop
for (let a = 1; a <= 2; a += 1) {
  for (let b = 1; b <= 3; b += 1) {
    console.log(b);
  }
}

// Another example
let symbol = window.prompt('Enter a symbol to repeat');
let rows = window.prompt('Enter the number of rows');
let columns = window.prompt('Enter the number of columns');

for (let r = 1; r <= rows; r += 1) {
  for (let c = 1; c <= columns; c += 1) {
    document.getElementById('myRectangle').innerHTML += symbol; // append symbol
  }
  document.getElementById('myRectangle').innerHTML += '<br />'; // append break
}
