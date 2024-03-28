/*
    Rest parameters
*/

// They represent an indefinite number of ... parameters
// (packs arguments into an array that can be iterated over)

let a = 1;
let b = 2;
let c = 3;
let d = 5;

console.log(sum(a, b, c, d));

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
