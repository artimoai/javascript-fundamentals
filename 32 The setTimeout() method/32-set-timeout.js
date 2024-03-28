/**
 * *    setTimeout() method in Javascript
 * ?    this invokes a function after a certain number of miliseconds
 * ?
 */

let item = 'crypto';
let itemPrice = 420.69;

let timer1 = setTimeout(firstMessage, 1000);
let timer2 = setTimeout(secondMessage, 3000);
let timer3 = setTimeout(thirdMessage, 5000);

function firstMessage() {
  window.alert(`Buy some ${item} for ONLY $${itemPrice}`);
}

function secondMessage() {
  window.alert(`MAJOR discounts today`);
}

function thirdMessage() {
  window.alert(`BUY NOW!`);
}

document.getElementById('buy-btn').onclick = function () {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  window.alert(`Thank you for shopping ${item} with us <3`);
};
