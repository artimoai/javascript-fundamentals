/**
 * *    Date objects in JavaScript
 */

let currentDate = new Date();

function formatDate(dateObject) {
  let year = currentDate.getFullYear(); // 2022
  let month = currentDate.getMonth() + 1; // January = 0
  let day = currentDate.getDate(); // 31
  let dayOfWeek = currentDate.getDay(); // Sunday = 0

  switch (dayOfWeek) {
    case 0:
      dayOfWeek = 'Sunday';
      break;
    case 1:
      dayOfWeek = 'Monday';
      break;
    case 2:
      dayOfWeek = 'Tuesday';
      break;
    case 3:
      dayOfWeek = 'Wednesday';
      break;
    case 4:
      dayOfWeek = 'Thursday';
      break;
    case 5:
      dayOfWeek = 'Friday';
      break;
    case 6:
      dayOfWeek = 'Saturday';
  }

  return `Today is ${dayOfWeek}, ${day}/${month}/${year}`;
}

console.log(formatDate(currentDate));

// Alternative method to convert the current date and time to string
currentDate = currentDate.toLocaleString(); // 31/07/2022, 17:17:19

// Alternative method to convert only the current date to string
// currentDate = currentDate.toLocaleDateString(); // 31/07/2022

// Alternative method to convert only the current time to string
// currentDate = currentDate.toLocaleTimeString(); // 17:17:19

document.getElementById(
  'date'
).innerHTML = `Alternative way to convert date: ${currentDate}`;
