/**
 * *    Calculating with functions
 * ?    Requirements:
 * ?    There must be a function for each number from 0 ("zero") to 9 ("nine")
 * ?    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
 * ?    Each calculation consist of exactly one operation and two numbers
 * ?    The most outer function represents the left operand, the most inner function represents the right operand
 * ?    Division should be integer division. For example, eight(dividedBy(three())); should return 2, not 2.666666...:
 * ?    seven(times(five())); // must return 35
 */

function expression(number, operation) {
  if (!operation) return number;
  return operation(number);
}

function zero(operation) {
  return expression(0, operation);
}
function one(operation) {
  return expression(1, operation);
}
function two(operation) {
  return expression(2, operation);
}
function three(operation) {
  return expression(3, operation);
}
function four(operation) {
  return expression(4, operation);
}
function five(operation) {
  return expression(5, operation);
}
function six(operation) {
  return expression(6, operation);
}
function seven(operation) {
  return expression(7, operation);
}
function eight(operation) {
  return expression(8, operation);
}
function nine(operation) {
  return expression(9, operation);
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return y * x;
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}

console.log(seven(times(two())));
console.log(nine(dividedBy(three())));
console.log(five(plus(eight())));
console.log(six(minus(one())));

/**
 * *  Another solution
 */

const [zero, one, two, three, four, five, six, seven, eight, nine] = Array.from(
  { length: 10 }
).map((item, i) => (f) => f ? f(i) : i);

const [plus, minus, times, dividedBy] = ['+', '-', '*', '/'].map((op) =>
  Function('b', `return a => a ${op} b`)
);

/**
 * * Another solution
 */

const numbers = 'zero one two three four five six seven eight nine';

numbers
  .split(' ')
  .forEach((mth, num) => (this[mth] = (f = (val) => val) => f(num)));

let plus = (r) => (l) => l + r;
let minus = (r) => (l) => l - r;
let times = (r) => (l) => l * r;
let dividedBy = (r) => (l) => Math.floor(l / r);

/**
 * *  Another solution
 */

function zero(x) {
  return x != null ? x(0) : 0;
}
function one(x) {
  return x != null ? x(1) : 1;
}
function two(x) {
  return x != null ? x(2) : 2;
}
function three(x) {
  return x != null ? x(3) : 3;
}
function four(x) {
  return x != null ? x(4) : 4;
}
function five(x) {
  return x != null ? x(5) : 5;
}
function six(x) {
  return x != null ? x(6) : 6;
}
function seven(x) {
  return x != null ? x(7) : 7;
}
function eight(x) {
  return x != null ? x(8) : 8;
}
function nine(x) {
  return x != null ? x(9) : 9;
}

function plus(x) {
  return (y) => y + x;
}
function minus(x) {
  return (y) => y - x;
}
function times(x) {
  return (y) => y * x;
}
function dividedBy(x) {
  return (y) => Math.floor(y / x);
}

/**
 * *  Another solution
 */

[
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
].map((name, index) => (this[name] = (f = value) => f(index)));

value = (val) => val;
plus = (inner) => (outer) => outer + inner;
minus = (inner) => (outer) => outer - inner;
times = (inner) => (outer) => outer * inner;
dividedBy = (inner) => (outer) => Math.floor(outer / inner);
