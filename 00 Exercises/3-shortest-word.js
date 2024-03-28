/**
 * *  In this exercise, find the length of the shortest word in a sentence.
 */

let sentence = 'bitcoin take over the world maybe who knows perhaps';

console.log(findShort(sentence));

/**
 * *    The best one-line solution
 */

function findShort(s) {
  return Math.min(...s.split(' ').map((e) => e.length));
}
