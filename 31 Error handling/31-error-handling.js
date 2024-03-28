/**
 * *    Error handling in JavaScript
 * ?    error is an object with a description of something going wrong
 * ?    like TypeError, lost connection, can't open a file, etc.
 */

// console.lag(); // TypeError as this is not a function

// This way we won't interrupt the script running
try {
  let x = Number(window.prompt('Enter a number'));

  if (isNaN(x)) throw "That wasn't a number!";
  if (x == '') throw 'That was an empty string.';

  console.log(`${x} is a number`); // entering a string will result in a NaN error
} catch (error) {
  console.log(error);
} finally {
  console.log('This always executes');
}
