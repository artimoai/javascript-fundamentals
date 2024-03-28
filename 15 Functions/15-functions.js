/**
 * *  Functions in JS
 * *  These are simply reusable blocks of code.
 */

//  First example
function myFunction(defaultParameter = 'User') {
  window.alert(`Hello there ${defaultParameter}!`);
}

//  myFunction();      // will print the default parameter value 'User'
myFunction('Stranger'); // will print the provided value instead

//  Second example with function chaining
startSinging();

function startSinging() {
  let myName = window.prompt("What's your name?");
  let myAge = window.prompt('How old are you?');

  // include which arguments should be sent over to the other function
  happyBirthday(myName, myAge);
}

function happyBirthday(myName, myAge) {
  // the parameters myName and myAge can be renamed to something else like a and b
  // but the order in which they appear in the block has to be the same
  for (let n = 1; n <= 3; n += 1) {
    console.log('Happy birthday to you!');
    if (n == 2) {
      console.log(`Happy birthday to you dear ${myName}!`);
      continue;
    }
  }
  console.log(`Congratulations! You are ${myAge} years old!`);
}

/**
 * *  Returning values from functions
 */

//  Returns a value back to the place where function was invoked
let width = window.prompt('Enter width');
let height = window.prompt('Enter height');

function getArea(width, height) {
  let total = width * height;
  document.getElementById('area-total').innerHTML = total;
  return total;
}

console.log(`The area is ${getArea(width, height)}`);

/**
 * *  Arrow functions in JS
 * *  They provide an alternative way to write a shorter syntax
 *  * compared to the function expression.
 */

//  Example 1 arrow function with a single parameter
//  (parameter) => { statements };
//  map the length of strings in an array
let names = ['John', 'Mac', 'Peter'];
let nameLengths = names.map((name) => name.length);
console.log('The name lenghts are:');
listAll(nameLengths); // [4,3,5]

//  Example 2 arrow function with two parameters
//  (p1, p2) => { statements };
//  sort an array of numbers in descending order
let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log('[4,2,6] in descending order is:');
listAll(numbers); // [6,4,2]

function listAll(array) {
  for (let element of array) {
    console.log(element);
  }
}

//  If you use an expression in the body of an arrow function
//  you don’t need to use the curly braces.
let multiply = (n1, n2) => n1 * n2;
console.log(`Multiplying 6 * 7 equals ${multiply(6, 7)}`);

//  JavaScript arrow functions and object literal
let setColor = (color) => ({ value: color });

let backgroundColor = setColor('Red');
console.log(`The background color is ${backgroundColor.value}`); // "Red"

/**
 * *  Arrow function vs. regular function
 * *  There are two main differences between an arrow function and a regular function.
 * *    First, in the arrow function, the this, arguments, super, new.target are lexical.
 * *    It means that the arrow function uses these variables (or constructs)
 * *    from the enclosing lexical scope.
 *
 * *    Second, an arrow function cannot be used as a function constructor.
 *  *   If you use the "new" keyword to create a new object from an arrow function, you will get an error.
 */

/**
 * *  Nested functions in JS
 * *  You may nest a function within another function.
 * *  The nested (inner) function is private to its containing (outer) function.
 */

// A nested function example
var playerName = 'Player 1';
let userInbox = 0;

login();

function login() {
  displayPlayerName();
  displayPlayerInbox();
  getPlayerScore();

  function displayPlayerName() {
    console.log(`Welcome ${playerName}`);
  }

  function displayPlayerInbox() {
    console.log(`You have ${userInbox} new messages`);
  }

  function getPlayerScore() {
    const SCORE1 = 5;
    const SCORE2 = 6;

    function addTotal() {
      return `${playerName} scored ${SCORE1 + SCORE2} points`;
    }

    function listTotal(parameter) {
      console.log(parameter);
    }

    return listTotal(addTotal());
  }
}

/**
 * *  Recursive functions in JS
 * *  A function can refer to and call itself. There are three ways for a function to refer to itself:
      //  the function's name;
      //  arguments.callee;
      //  an in-scope variable that refers to the function;
 */

function loop(x) {
  //  set the exit condition "x >= 10" (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  //  do statement
  console.log(x);
  //  the recursive call
  loop(x + 1);
}

loop(0); //  counts from 0 to 9
loop(5); //  counts from 5 to 9
loop(11); //  does nothing, exits
