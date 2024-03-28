/*
    While and do...while loops

    The main difference between a do...while loop and a while loop
    is that the code inside a do...while loop is always executed at least once.
    That's because the condition comes after the code inside the loop.
    So we always run that code, then check to see if we need to run it again.
    In while and for loops, the check comes first, so the code might never be executed.
*/

// While loop
let userName = '';

while (userName == '' || userName == null) {
  userName = window.prompt('What is your username?');
}
console.log('Hello there', userName);

// Another while loop example
const CATS = ['Persian', 'Siamese', 'Sphynx', 'Birman'];

let myCats = 'My favorite cat breeds are: ';

let i = 0;

while (i < CATS.length) {
  if (i === CATS.length - 1) {
    myCats += `and ${CATS[i]}.`;
  } else {
    myCats += `${CATS[i]}, `;
  }

  i++;
}

console.log(myCats);

// Do...while loop
const PASSWORD = 'Beetlejuice';
let secretPass = '';

do {
  secretPass = window.prompt('What is the secret password?');
} while (secretPass !== PASSWORD);
window.alert('Password is correct');

// Another do...while example
const FOODS = ['Pizza', 'Shwarma', 'Oven fries', 'Feta salads'];

let mySnacks = 'My favorite snacks are: ';

let j = 0;

do {
  if (j === FOODS.length - 1) {
    mySnacks += `and ${FOODS[j]}.`;
  } else {
    mySnacks += `${FOODS[j]}, `;
  }

  j++;
} while (j < FOODS.length);

console.log(mySnacks);
