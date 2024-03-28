/* 
    Logical operators: AND, OR and NOT
    Useful when testing multiple conditions without having to write nested if/else statements
    Read more here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
*/

// && — AND; all conditions have to individually evaluate to true for the whole expression to return true
// || — OR; one or more conditions have to individually evaluate to true for the whole expression to return true

/*
  Examples
*/

// logical AND
// const a = true, b = false, c = 4;
// console.log(a && a); // true
// console.log(a && b); // false
// console.log(c > 2 && c < 2); // false

// logical OR
// const a = true, b = false, c = 4;
// console.log(a || b); // true
// console.log(b || b); // false
// console.log((c>2) || (c<2)); // true

// logical NOT
// const a = true, b = false;
// console.log(!a); // false
// console.log(!b); // true

/*
  More examples
*/

let dayTemp = 29;
let daySunny = false;

if (dayTemp > 12 && dayTemp < 30 && daySunny) {
  console.log('The weather is warm and sunny');
} else {
  console.log('The weather is cold or rainy');
}

/*
    A simple calendar example
*/

const SELECT = document.querySelector('SELECT');
const LIST = document.querySelector('ul');
const CALENDAR = document.getElementById('calendar');

SELECT.addEventListener('change', () => {
  const OPTION = SELECT.value;
  let days = 31;

  if (OPTION === 'February') {
    days = 28;
  } else if (
    OPTION === 'April' ||
    OPTION === 'June' ||
    OPTION === 'September' ||
    OPTION === 'November'
  ) {
    days = 30;
  }

  createCalendar(days, OPTION);
});

function createCalendar(days, OPTION) {
  LIST.innerHTML = '';
  CALENDAR.textContent = OPTION;
  for (let i = 1; i <= days; i++) {
    const LISTITEM = document.createElement('li');
    LISTITEM.textContent = i;
    LIST.appendChild(LISTITEM);
  }
}

createCalendar(31, 'January');
