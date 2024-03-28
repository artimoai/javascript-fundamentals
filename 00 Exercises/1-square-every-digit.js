/**
 * *  In this exercise, square every digit of a number and concatenate them.
 * ?  For example, if we run 3456 through the function it will output 9162536.
 * ?  Note: The function accepts an integer and returns an integer.
 */

/**
 * *  Verbose functional solution on first attempt
 */
function squareDigits1(num) {
  //  Check edge case where number is equal to zero
  if (num === 0) {
    return 0;
  }

  //  Continue if number is greater than zero
  //  Declare an array to hold the number's digits
  let digits = [];

  //  A pure mathematical solution to extract digits
  //  without having to parseInt() or Number() every digit
  while (num > 0) {
    //  Push the result of the modulo 10 operation to the array
    //  The reminder left over is each of the digits
    digits.push(num % 10);
    //  To move from the tail to the head of the number
    //  At each step round down the number after dividing by 10
    //  1234 / 10 = 123.4 = 123
    //  123 / 10 = 12.3 = 12
    num = Math.trunc(num / 10);
  }
  //  Because the array holds the digits in a backwards order
  //  we have to reverse the array so the digits are in the order
  //  they appear in the number from head to tail
  digits.reverse();

  //  Map the squared function to the elements of the digits array
  //  Declare a new variable to hold the squared values
  let squareDigits = digits.map(squared);

  //  Declare a string variable to hold the resulting squared digits
  let result = '';

  //  Loop through the elements of the squared array
  //  and append them to the result as strings
  for (let element in squareDigits) {
    result += squareDigits[element];
  }

  //  Convert the result back from String to Int in base 10
  result = parseInt(result, 10);

  // Define a function that squares a number
  function squared(element) {
    return Math.pow(element, 2);
  }

  // Return the final resulting squared digits number
  return result;
}

console.log(squareDigits1(3456));

/**
 * * A better solution using toString, split, map, and join
 */
function squareDigits2(num) {
  return Number(
    num
      .toString()
      .split('')
      .map((n) => +n * +n)
      .join('')
  );
}

console.log(squareDigits2(1234));

/**
 * *  The best one-line solution using array destructuring and parseInt
 * ?  Instead of toString() we can also write [...('' + num)] to trick Int to String conversion
 */
function squareDigits3(num) {
  return parseInt([...num.toString()].map((n) => +n * +n).join(''), 10);
}

console.log(squareDigits3(2345));
