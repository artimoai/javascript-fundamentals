/**
 * *    Stop watch app in JavaScript
 */

const TIMEDISPLAY = document.querySelector('#timeDisplay');
const STARTBTN = document.querySelector('#start-btn');
const PAUSEBTN = document.querySelector('#pause-btn');
const RESETBTN = document.querySelector('#reset-btn');

let currentTime = 0;
let startTime = 0;
let pausedTime = true;
// When the timer starts, elapsed time is equal to zero
let elapsedTime = 0;

let intervalId;

let hours = 0;
let minutes = 0;
let seconds = 0;

STARTBTN.addEventListener('click', () => {
  if (pausedTime) {
    pausedTime = false;
    // Get time in miliseconds
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 250);
  }
});

PAUSEBTN.addEventListener('click', () => {
  if (!pausedTime) {
    pausedTime = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});

RESETBTN.addEventListener('click', () => {
  pausedTime = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  TIMEDISPLAY.textContent = `00:00:00`;
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  seconds = zeroPad(Math.floor((elapsedTime / 1000) % 60));
  minutes = zeroPad(Math.floor((elapsedTime / (1000 * 60)) % 60));
  hours = zeroPad(Math.floor((elapsedTime / (1000 * 60 * 60)) % 60));

  TIMEDISPLAY.textContent = `${hours}:${minutes}:${seconds}`;

  function zeroPad(unit) {
    return ('0' + unit).length > 2 ? unit : '0' + unit;
  }
}
