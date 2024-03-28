/**
 * *    Create a function to break up camel casing
 * ?    Complete the solution by inserting a space between words.
 */

const testWord = 'testWordAgainNow';

/**
 * *    The best one-line regex solution
 */

function solution(string) {
  return string.replace(/([a-z0-9])([A-Z])/gm, '$1 $2');
}

console.log(solution(testWord));

/**
 * *    Another one-line regex solution with positive lookahead
 */

function solution3(string) {
  return string.split(/(?=[A-Z])/gm).join(' ');
}

console.log(solution3(testWord));

/**
 * *    Another solution in JavaScript
 */

// equivalent to string.replace(/([A-Z])/gm, ' $1')

function solution2(string) {
  return [...string]
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join('');
}

console.log(solution2(testWord));
