/**
 * *    Digital clock in JavaScript
 */

const CLOCK = document.getElementById('clock');

// Start the clock
updateTime();

// Update time every 1000 miliseconds
setInterval(updateTime, 1000);

function updateTime() {
  let date = new Date();
  CLOCK.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours(); //
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AMPM = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12;

    hours = leadingZero(hours);
    minutes = leadingZero(minutes);
    seconds = leadingZero(seconds);

    return `${hours}:${minutes}:${seconds} ${AMPM}`;
  }

  function leadingZero(time) {
    time = time.toString();
    return time.length < 2 ? '0' + time : time;
  }
}
