/*
    Math functions overview
    Calculate the hypotenuse lenght of a right angle triangle
    using Pythagora's theorem
*/

let a;
let b;
let c;

document.getElementById('h-calculator').onclick = () => {
  a = document.getElementById('a-text').value;
  a = Number(a);

  b = document.getElementById('b-text').value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById(
    'c-label'
  ).innerHTML = `Lenght of hypotenuse is ${c.toFixed(2)}`;
};
