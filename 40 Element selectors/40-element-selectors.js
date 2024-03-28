/**
 * *    Element selectors in JavaScript
 */

// Select the element and store as a variable
let element = document.getElementById('h2-title');

// Change the element background color property value
element.style.backgroundColor = 'DodgerBlue';

// This will return a node list of elements- with the same name
let pizzas = document.getElementsByName('pizzas');
console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2]);

// This will return the value of the checked radio button
pizzas.forEach((pizza) => {
  if (pizza.checked) {
    console.log(pizza.value);
  }
});

// This method allows to select elements by their tag name which
// retruns an HTML collection (an array).
let listElements = document.getElementsByTagName('li');
console.log(listElements);
listElements[0].style.backgroundColor = 'orange';

// This method allows to select elements by their class name which
// retruns an HTML collection (an array-like object).
let desserts = document.getElementsByClassName('desserts');
console.log(desserts);
desserts[1].style.backgroundColor = 'pink';

// This method querySelector() returns the first Element within the document
// that matches the specified selector, or group of selectors.
// If no matches are found, null is returned.
let menuTitle = document.querySelector('#h1-title');
menuTitle.style.backgroundColor = 'blue';

// This method querySelectorAll() returns a static NodeList
// representing a list of the document's elements that
// match the specified group of selectors.
let allListItems = document.querySelectorAll('label');
allListItems.forEach((element) => {
  element.style.backgroundColor = 'gold';
});

/**
 * *  DOM traversal explained
 */

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)

// This will change the background color of the H1 element to red.
// This element is the first in the body of the entire HTML document.
let allHTML = document.body;
let childElement = allHTML.firstElementChild;
childElement.style.backgroundColor = 'red';

// This will change the background color of all child elements from
// the vegetables children array
let vegetables = document.querySelector('#vegetables');
let childElements = Array.from(vegetables.children);
childElements.forEach(
  (element) => (element.style.backgroundColor = 'lightgreen')
);
