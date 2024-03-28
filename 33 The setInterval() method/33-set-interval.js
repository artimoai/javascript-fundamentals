/**
 * *    The setInterval() method in JavaScript
 * ?    This invokes a function repeatedly after a number of milliseconds
 * ?    It's an async function that doesn't interrupt execution
 */

let maxValue = Number(window.prompt('Count down from ... ?'));

const TIMER = setInterval(countDown, 1000);

function countDown() {
  console.log(maxValue);
  maxValue--;
  if (maxValue === 0) {
    console.log(`Ding!`);
    clearInterval(TIMER);
  }
}
