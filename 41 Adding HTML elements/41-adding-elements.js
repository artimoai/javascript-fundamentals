/**
 * *    Adding HTML elements in JavaScript
 *
 * ?    .innerHTML is vulnerable to XSS attacks
 * ?    .textContent is the more secure approach
 */

// Modify the content of the H1 element and add the page title
const PAGETITLE = document.querySelector('h1');
PAGETITLE.textContent = 'Adding HTML elements in Javascript';

// Don't use innerHTML when creating HTML elements
// const USERNAME = document.createElement('p');
// USERNAME.innerHTML = window.prompt(`Enter your username`);
// document.body.append(USERNAME);

// Example XSS injection
// innerHTML is not safe against Cross-Site Scripting (XSS) attacks
// More examples here https://github.com/payloadbox/xss-payload-list
// <svg/onload=alert(1)>

// Add a li element and set it to Mango
const MYLIST = document.querySelector('#fruits'); // Remember the hashtag
// Create a new list item element
const LISTITEM1 = document.createElement('li');
LISTITEM1.textContent = 'Mango';
// Add new list item to the unordered list
MYLIST.append(LISTITEM1);
// Create another list item element
const LISTITEM2 = document.createElement('li');
// Preapend this other list item at the beginning of the list
LISTITEM2.textContent = 'Ananas';
MYLIST.prepend(LISTITEM2);
