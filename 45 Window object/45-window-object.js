/**
 * *    Window Object
 *
 * ?    The window object represents an interface to an open window in a web browser.
 * ?    The DOM is a property of the window object itself.
 * ?    If a document contain frames (<iframe> tags), the browser
 * ?    creates one window object for the HTML document, and
 * ?    one additional window object for each frame.
 */

window.alert('Window Object Tutorial');
window.confirm('Press OK to coninue');

let userAge = window.prompt('Enter your age');
if (userAge < 18) {
  window.alert('You must be 18+ to visit this site!');
  window.close();
}

console.dir(window);
console.log('Window origin: ' + window.origin);
console.log('Windows location: ' + window.location.href);
console.log('Windows location hostname: ' + window.location.hostname);
console.log('Windows location pathname: ' + window.location.pathname);
// Redirect to another URL
// window.location.href = "https://google.com";

// Interact with the window
console.log('Window inner width: ' + window.innerWidth);
console.log('Window inner height: ' + window.innerHeight);
//console.log(window.scrollX);
//console.log(window.scrollY);

const webButton = document.querySelector('#web-btn');

webButton.addEventListener('click', () => window.open('https://google.com'));
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());
