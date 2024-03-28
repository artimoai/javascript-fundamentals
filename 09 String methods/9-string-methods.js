/*
    Some string properties and methods
*/

const USERNAME = 'Cosmin Andrei Artimof';
console.log(USERNAME);
console.log(USERNAME.length);
// console.log(USERNAME.charAt(7));
// console.log(USERNAME.indexOf('m'));

// Trim removes white space from both sides of a string
// console.log(USERNAME.trim().length);

// toUpperCase returns all capital letters
// console.log(USERNAME.trim().toUpperCase());

let phoneNumber = '123-456-7890';
console.log(phoneNumber.replaceAll('-', ''));

/* 
    String slicing techniques
*/

// Read more here:
// https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/

// slice() extracts a section of a string
// and returns it as a new string
// without modyfing the original string;

let firstName;
let middleName;
let lastName; // or family name

// Manual technique to slice a USERNAME

// firstName = USERNAME.slice(0, 6);
// console.log(firstName);

// middleName = USERNAME.slice(7, 13);
// console.log(middleName);

// lastName = USERNAME.slice(14);
// console.log(lastName);

/* 
    A slightly better way to slice USERNAME
    into first, middle, and last names
*/

// Extract the first name
// Start from zero and slice until the first white space of the string
// firstName = USERNAME.slice(0, USERNAME.indexOf(' ') + 1);

// Extract the last name
// Start from the last white space to the end of the string
// lastName = USERNAME.slice(USERNAME.lastIndexOf(' ') + 1, USERNAME.length);

// Extracting the middle name
// Start from where the first name ends and stop before the last name in the string
/* middleName = USERNAME.slice(
  firstName.length,
  USERNAME.length - lastName.length
); */

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

/* 
    The easy way to split a string
*/

// The split() method is used for strings
// as it divides a string into substrings
// and returns them in an array

const SPLITONSPACE = USERNAME.split(' ');
// console.log(SPLITONSPACE);

firstName = SPLITONSPACE[0];
console.log(firstName);
middleName = SPLITONSPACE[1];
console.log(middleName);
lastName = SPLITONSPACE[2];
console.log(lastName);

/*
    Format currency numbers
*/

// toLocaleString() - returns a string with a language sensitive representation of a number
// number.toLocaleString(locale, {options})
// locale - specify language
// {options} - object with formating options

let accountTotal = 23456.789;

// accountTotal = accountTotal.toLocaleString('en-US');
// US English; it will add a comma for every thousands place

// accountTotal = accountTotal.toLocaleString('de-DE');
// standard German; it will add a dot for every thousands place

accountTotal = accountTotal.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
// it will append the dollar sign before the number AND it will round up to ONLY two decimal places
// $23,456.79
console.log(accountTotal);

let percentValue = 0.01;
percentValue = percentValue.toLocaleString(undefined, { style: 'percent' });
console.log(percentValue);
// 0.5 will be displayed as 50%
// 0.01 will be displayed as 1%

let temperature = 36;
temperature = temperature.toLocaleString(undefined, {
  style: 'unit',
  unit: 'celsius',
});
console.log(temperature);
// 36 will be displayed as 36°C
