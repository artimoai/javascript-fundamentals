/**
 * *  Variables in Javascript
 * ?  A variable is a container for storing data.
 * ?  The five most basic types of data are strings, numbers, booleans, undefined, and null.
 * ?  We refer to these as primitive data types.
 */

/*
  Two step process:
    1. Declaration (var, let, const)
    2. Assignment (= assignment operator)
*/

let myFirstName = 'Andy';
console.log('Hello', myFirstName);
console.log('The type of myFirsName is: ', typeof myFirstName);
// The output will be Andy which is a string data type

let myAge = 26;
console.log('You are', myAge, 'years old.');
console.log('The type of myAge is: ', typeof myAge);
// The output will be 26 which is a number data type
// console.log(`You are ${myAge} years old.`);
// Using template literals the output will be displayed as 26 but is now converted to a string data type

let myStudentStatus = true;
console.log('Enrolled:', myStudentStatus);
console.log('The type of myStudentStatus is: ', typeof myStudentStatus);
// The output will be true which is a boolean data type

let myPassword;
console.log('Account password is:', myPassword);
console.log('The type of myPassword is: ', typeof myPassword);
// The output will be undefined because no value was assigned to the variable

let myUnusedVariable = null;
console.log('This is a null assigned variable: ', myUnusedVariable);
console.log('The type of myUnusedVariable is: ', typeof myUnusedVariable);
// The output will be null but the data type is object

/**
 * *  Template literals
 */

// Changing the inner HTML content of the paragraps identified p1 to p4
document.getElementById('p1').innerHTML = `Hello ${myFirstName}`;
document.getElementById('p2').innerHTML = `Your age is: ${myAge}`;
document.getElementById('p3').innerHTML = 'Enrolled status: ' + myStudentStatus;
document.getElementById(
  'p4'
).innerHTML = `Your account password is: ${myPassword}`;

/**
 * *  Differences between let and var
 */

// Variable scope describes where a variable is accesible from
// let - variable is accesible only from the block scope {}
// var - variable is accesible only from a function()
// use let instead of var whenever necessary

let variable = true;
// variable is defined in the global scope; it's outside any function

var name = 'Teo';
// a global var is problematic because it may change the browser's window properties
// in this case, the window property of name now has value "Teo"

for (let n = 1; n <= 3; n += 1) {
  console.log(`Number n is ${n}`);
}
// console.log(n);
// Reference error, n is outside the declared scope of the for loop

for (var m = 1; m <= 4; m += 1) {
  console.log(`Number m is ${m}`);
}
// console.log(`Number m is ${m}`);
// No reference error but it returns just the value 4 once

/**
 * *  Hoisting in JavaScript
 * ?  It means that JS will move declarations to the top of every scope.
 * !  Only variables declared with var are hoisted.
 */

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
