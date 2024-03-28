/**
 * *    Events in JavaScript
 */

// Define a simple function
function doSomething() {
  //alert("You did something!");
  element.style.backgroundColor = 'red';
}
function doSomethingElse() {
  //alert("You did something!");
  element.style.backgroundColor = 'navy';
}

// When the button is clicked, execute the function
// const ELEMENT = document.getElementById('myButton');
// ELEMENT.onclick = doSomething;

//  ELEMENT.onLoad = doSomething;
//  ELEMENT.onChange = doSomething;

//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById('myDiv');

//element.onclick = doSomething;
//element.onload = doSomething;
//element.onchange = doSomething;
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

/**
 * *  Event listeners in JavaScript
 */

// .addEventListener(event, function, useCapture)
//  This allows to link an event and a function to an HTML element.
//  You can add many event handlers to one HTML element.

const innerDiv = document.getElementById('innerDiv');

// Listening for two events
innerDiv.addEventListener('mouseover', changeBlue);
innerDiv.addEventListener('mouseout', changeGreen);

function changeBlue() {
  this.style.backgroundColor = 'lightblue';
}

function changeGreen() {
  this.style.backgroundColor = 'lightgreen';
}

// What happens when you have an element within an element?
// When useCapture is set to true, then that event has precedence
// in the execution order
const outerDiv = document.getElementById('outerDiv');

innerDiv.addEventListener('click', changeRed);
outerDiv.addEventListener('click', changeRed, true);

function changeRed() {
  alert(`You selected ${this.id}`);
  this.style.backgroundColor = 'red';
}
