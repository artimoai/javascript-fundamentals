/*
  Basic random numbers generation 
*/

// To generate a random number between 0 and 1
// let randomNumber = Math.random();
//console.log(randomNumber);

// Generate a pseudo dice from 1 to 6
// const DICEFACES = 6;
// Add +1 offset so counting starts from 1 and not 0
// randomNumber = Math.floor(randomNumber * DICEFACES) + 1;
// console.log(randomNumber);

/*
  Generate pseudo-random numbers function
*/

/*  
  Great explantion here:
  https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  You could use the Math.round() method instead of floor(), but that would give you a non-uniform distribution.
  This means that both max and min will have half a chance to come out as an outcome.
  Using Math.floor() will give you perfectly even distribution.
*/

function randomNumberGenerator(min, max) {
  // Generate a random number between the user specified min/max values (e.g. 1 and 6 for a dice)
  let minValue = Math.floor(min);
  let maxValue = Math.ceil(max);

  // Returns an integer random number between min (included) and max (included)
  randomNumberValue =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  return randomNumberValue;
}

document.getElementById('roll-btn').onclick = () => {
  x = randomNumberGenerator(1, 6);
  document.getElementById('x').innerHTML = x;

  y = randomNumberGenerator(1, 6);
  document.getElementById('y').innerHTML = y;

  z = randomNumberGenerator(1, 6);
  document.getElementById('z').innerHTML = z;
};
