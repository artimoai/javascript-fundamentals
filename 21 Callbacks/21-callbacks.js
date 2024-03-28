/*
    Callback functions
*/

// A callback is when a function is passed
// as an argument to another function.
// This ensures that a function is not going
// to run before a task is completed.
// Helps to avoid errors and potentail problems
// (e.g. wait for a file to load first)

// Invoke functions
sum(3, 7, displayConsole);
sum(1, 5, displayDOM);

// Define functions
function sum(x, y, callBack) {
  let result = x + y;
  callBack(result);
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById('output').innerHTML = output;
}
