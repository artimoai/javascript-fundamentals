/**
 * *    Cookies in JavaScript
 *
 * ?    Cookies are data, stored in small text files, on the computer.
 * ?    When a web server has sent a web page to a browser,
 * ?    the connection is shut down, and the server forgets everything about the user.
 * ?    Cookies were invented to solve the problem "how to
 * ?    remember information about the user". Cookies are saved in name-value pairs.
 */

// Check is cookies are enabled in browser window
console.log(navigator.cookieEnabled); // true

// Create a cookie and specify expiration date and store path
// document.cookie =
//   'firstName = Mad; expires=Sun, 1 January 2030 12:00:00 UTC; path=/;';
// A cookie set to expire on a previous date will be deleted
// console.log(document.cookie); // returns object
// document.cookie =
//   'lastName = Max; expires=Sun, 1 January 2030 12:00:00 UTC; path=/;';
// Display cookie information
// console.log(document.cookie); // returns object

function setCookie(name, value, daysToLive) {
  const DATE = new Date();
  // Date in miliseconds
  DATE.setTime(DATE.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  // Convert date to UTC
  let expires = 'expires=' + DATE.toUTCString();
  // Define cookie object
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Create cookie object
// setCookie('email', 'test@email.com', 365);
// console.log(document.cookie); // display cookie object

// Delete cookies function
function deleteCookie(name) {
  setCookie(name, null, null);
}

// deleteCookie('firstName');
// deleteCookie('lastName');
// deleteCookie('email');
// console.log(document.cookie); // display cookie object

// Function to get the value of a cookie by a name

function getCookie(name) {
  const CDECODED = decodeURIComponent(document.cookie);
  // Split name-value pairs at each of the semicolons
  // Save the returned array in a new const
  const CARRAY = CDECODED.split('; ');
  let result = null;
  // For each element in the array, check if the name matches
  CARRAY.forEach((element) => {
    // Check element at index of cookie name we're searching for
    if (element.indexOf(name) == 0) {
      // If there is a match, return the result
      // Create a substring the length of the inputed cookie name + 1
      result = element.substring(name.length + 1);
    }
  });
  // Return result
  return result;
}

// Get the value of the cookies named ...
// console.log(getCookie('firstName'));
// console.log(getCookie('lastName'));

// Delete cookies
// deleteCookie('firstName');
// deleteCookie('lastName');
// console.log(document.cookie); // display cookie object

// Create cookies from the web interface
const FIRSTNAME = document.getElementById('firstNameField');
const LASTNAME = document.getElementById('lastNameField');
const SUBMITBUTTON = document.querySelector('#submitBtn');
const COOKIEBUTTON = document.querySelector('#cookieBtn');

SUBMITBUTTON.addEventListener('click', () => {
  setCookie('firstName', FIRSTNAME.value, 365);
  setCookie('lastName', LASTNAME.value, 365);
});

COOKIEBUTTON.addEventListener('click', () => {
  FIRSTNAME.value = getCookie('firstName');
  LASTNAME.value = getCookie('lastName');
});

console.log(document.cookie); // display cookie object
