/*
    Constants are variables that can't be changed
    and they add a layer of data security
*/

// For constants use UPPERCASE naming
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt('Enter the radius of your circle');
document.getElementById(
  'radius'
).innerHTML = `For a circle with a radius equal to ${radius}`;

// Convert to a number data type
radius = Number(radius);
// Calculate circumference of a circle of radius
circumference = Number(2 * PI * radius);

// Limit the number of decimal digits to 4 with toFixed() in the output
document.getElementById(
  'circumference'
).innerHTML = ` the circumference is ${circumference.toFixed(4)}`;
console.log(
  `For a circle with a radius equal to ${radius} the circumference is ${circumference.toFixed(
    4
  )}`
);

// More useful Math functions
// let x = Math.round(x);
// let y = Math.floor(y);
// let z = Math.ceil(z);
// let w = Math.pow(w, 3);      // raise w to power 3
// let u = Math.sqrt(u);        // square root
// let s = Math.abs(s);         // absolute value of a given number
