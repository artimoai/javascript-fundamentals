/**
 * *    Elements visibility toggle in JavaScript
 */

const myButton = document.querySelector('#toggle-btn');
const myImage = document.querySelector('#car-photo');

myButton.addEventListener('click', () => {
  // Add visibility hidden at the image element level
  // else the toggle button will not work as intended
  // console.log(myImage.style.visibility); // returns nothing
  if (myImage.style.visibility == 'hidden') {
    myImage.style.visibility = 'visible';
  } else {
    myImage.style.visibility = 'hidden';
  }
});
