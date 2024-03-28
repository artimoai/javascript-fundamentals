/*
    User input in JavaScript
*/

// This is the easy way to get started
// let userName = window.prompt('Enter your preferred username');
// console.log(userName);

// This is the more advacned way
let userName;
document.getElementById('submit-btn').onclick = () => {
  userName = document.getElementById('userName').value;
  console.log(userName);
  document.getElementById(
    'userNameLabel'
  ).innerHTML = `Your chosen username is ${userName}`;
};
