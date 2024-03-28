/*
    The switch statement is used to perform different actions based on different conditions.
    
    Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
*/

// The getDay() method returns the weekday as
// a number between 0 and 6 starting from Sunday.
// (Sunday = 0, Monday = 1, Tuesday = 2 ...)

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}

console.log(day);

/*
    Example of multi-case: single operation
*/
const fruit = 'Papayas';

switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  // This method takes advantage of the fact that
  // if there is no break below a case clause
  // it will continue to execute the next case clause
  // regardless if the case meets the criteria.
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}

/*
    Example of multi-case: chained operations
*/
const FOO = 3;
let output = 'Output: ';

switch (FOO) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}
