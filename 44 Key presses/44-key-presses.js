/**
 * *    Detect key presses in JavaScript
 */

window.addEventListener('keydown', (event) => {
  console.log(event.key);
});

const MYDIV = document.getElementById('free-square');
window.addEventListener('keydown', moveDIV);

let x = 0;
let y = 0;

function moveDIV(event) {
  switch (event.key) {
    case 'ArrowDown':
      y += 5;
      MYDIV.style.top = y + 'px';
      break;
    case 'ArrowUp':
      y -= 5;
      MYDIV.style.top = y + 'px';
      break;
    case 'ArrowRight':
      x += 5;
      MYDIV.style.left = x + 'px';
      break;
    case 'ArrowLeft':
      x -= 5;
      MYDIV.style.left = x + 'px';
      break;

    default:
      break;
  }
}
