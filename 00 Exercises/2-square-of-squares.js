/**
 * *  In this exercise, determine if a number is a perfect square.
 * ?  For example, 25 = 5 * 5 = true
 * ?  Note: The function accepts an integer
 */

/**
 * *    First attempt functional solution
 */
var isSquare = function (n) {
  return n < 0
    ? false
    : n === 0
    ? true
    : Math.ceil(Math.sqrt(n)) === Math.floor(Math.sqrt(n))
    ? true
    : false;
};

console.log(isSquare(100));

/**
 * *    The best on-line solution
 */
function isSquare2(n) {
  //  If the root has no fractional remainder then the number is a perfect square
  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare2(15));
