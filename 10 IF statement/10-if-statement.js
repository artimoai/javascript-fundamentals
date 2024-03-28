/*
    IF statements are a basic form of decision making
*/

// Order of IF conditions matters and are checked sequentially

let myAge = window.prompt('What is your age?');

if (myAge < 0) {
  console.log('Invalid age value');
} else if (myAge >= 65) {
  console.log('You are a senior citizen');
} else if (myAge >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are a minor');
}

// Another example of IF statements
function testNumber(n) {
  let result;
  if (n > 0) {
    result = 'This is a positive number';
  } else {
    result = 'This is a negative number';
  }
  return result;
}

console.log(testNumber(-5));
// expected output: "This is a negative number"

/* 
    Conditional (ternary) operator

    The conditional (ternary) operator is the only JavaScript operator
    that takes three operands: a condition followed by a question mark (?), 
    then an expression to execute if the condition is truthy
    followed by a colon (:), and finally the expression to execute
    if the condition is falsy. This operator is frequently used as 
    an alternative to an if...else statement.
*/

// What BEVERAGE are you allowed to drink in Europe?
const BEVERAGE =
  myAge >= 18 ? 'You can drink beer' : 'You can drink apple juice';
console.log(BEVERAGE);

// Handling NULL values
let GREETING = (person) => {
  let name;
  name = typeof person === 'string' ? person : 'stranger';
  return `Howdy, ${name}!`;
};

console.log(GREETING('Teo')); // "Howdy, Teo!"
console.log(GREETING(null)); // "Howdy, stranger!"

// More examples
const SELECT = document.querySelector('SELECT');
const OUTPUT = document.getElementById('weather-today');

SELECT.addEventListener('change', setWeather);

function setWeather() {
  const OPTION = SELECT.value;

  if (OPTION === 'sunny') {
    OUTPUT.textContent =
      'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (OPTION === 'rainy') {
    OUTPUT.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (OPTION === 'snowing') {
    OUTPUT.textContent =
      'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (OPTION === 'overcast') {
    OUTPUT.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    OUTPUT.textContent = '';
  }
}
