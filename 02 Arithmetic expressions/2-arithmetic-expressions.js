/* 
    Arithmetic expressions are a combination of:
    1. Operands (values, variables, etc.)
    2. Operators (+ - * / %)
    that can be evaluated to a value
    e.g. y = x + 5;
*/

let parkedCars = 12;
console.log(parkedCars);

// parkedCars = parkedCars + 1;
// parkedCars = parkedCars - 1;
// parkedCars = parkedCars * 2;
// parkedCars = parkedCars / 3;
// parkedCars = parkedCars % 4;

/* 
    Augumented assignment operators
    are a shortcut to avoid repetition
*/

// parkedCars += 1;
// parkedCars -= 1;
// parkedCars *= 2;
// parkedCars /= 3;
// parkedCars %= 4;
// console.log(parkedCars);

/* 
    Operator precedence or PEMDAS
    1. Paranthesis
    2. Exponents
    3. Multiplications
    4. Divisions
    5. Addition
    6. Substraction
*/

let mathLineOne = 1 + 2 * (3 + 4);
console.log('The result of 1 + 2 * (3 + 4) =', mathLineOne);

let mathLineTwo = (mathLineOne ** 2 + 3) / 4 + 5 - (6 / 7) * 8;
console.log(mathLineTwo);

// Changing the inner HTML content of the paragraps identified p1 to p4
document.getElementById(
  'p1'
).innerHTML = `The result of 1 + 2 * (3 + 4) = ${mathLineOne}`;

document.getElementById(
  'p2'
).innerHTML = `The result of (mathLineOne ** 2 + 3) / 4 + 5 - (6 / 7) * 8 = ${mathLineTwo}`;
