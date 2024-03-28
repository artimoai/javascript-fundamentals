/**
 * *    In this exercise, find the digital root of a number.
 * ?    Digital root is the recursive sum of all the digits in a number.
 */

/**
 * *    First attempt functional solution
 */
function digitalRoot(n) {
  while (n.toString().length > 1) {
    let digitsSum = n
      .toString()
      .split('')
      .map((e) => +e)
      .reduce((partialSum, value) => partialSum + value, 0);

    if (digitsSum.toString().length > 1) {
      return digitalRoot(digitsSum);
    }

    return digitsSum;
  }
  return n;
}

console.log(digitalRoot(12345));

/**
 * *    Second attempt simplified solution
 */
function digitalRoot2(n) {
  return n < 10
    ? n
    : digitalRoot2(
        n
          .toString()
          .split('')
          .reduce((partialSum, value) => partialSum + +value, 0)
      );
}

console.log(digitalRoot2(12345));

/**
 * *    The best one-line solution
 */
function digitalRoot3(n) {
  return ((n - 1) % 9) + 1;
}

console.log(digitalRoot3(12345));

/**
 * ?    In modulo 9 arithmetic, any number multiplied by 10 is the same number.
 *
 * ?    We can show that by proving that any number's remainder of dividing by 9
 * ?    is the same as a remainder from dividing the same number multiplied by 10.
 *
 * ?    n = 9k + R // any number can be represented as k multiplicity of 9 and R remainder
 * ?    10n = 90k + 10R
 * ?    10n = 90k + 9R + R
 * ?    10n = 9(10k + R) + R // the remainder is also R
 *
 * ?    With that, we can write any number like so:
 * ?    1234 = 1 * 10^3 + 2 * 10^2 + 3 * 10^1 + 4 * 10^0 which in modulo 9 arithmetic
 * ?    is equivalent to 1 + 2 + 3 + 4.
 *
 * ?    So, in mod 9 arithmetic any number is equal to sum of its digits,
 * ?    and also to sum of that sum's digits, and so on...
 */
