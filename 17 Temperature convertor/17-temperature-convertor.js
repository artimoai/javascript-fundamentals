document.getElementById('submit-btn').onclick = () => {
  // Runs the temperature unit conversion
  let temperature;

  if (document.getElementById('celsius-btn').checked) {
    tValue = Number(document.getElementById('text-box').value);
    temperature = toCelsius(tValue);
    document.getElementById('tempLabel').innerHTML = `${tValue.toLocaleString(
      undefined,
      { style: 'unit', unit: 'fahrenheit' }
    )} is equal to ${temperature.toLocaleString(undefined, {
      style: 'unit',
      unit: 'celsius',
    })}`;
  } else if (document.getElementById('fahrenheit-btn').checked) {
    tValue = Number(document.getElementById('text-box').value);
    temperature = toFahrenheit(tValue);
    document.getElementById('tempLabel').innerHTML = `${tValue.toLocaleString(
      undefined,
      { style: 'unit', unit: 'celsius' }
    )} is equal to ${temperature.toLocaleString(undefined, {
      style: 'unit',
      unit: 'fahrenheit',
    })}`;
  } else {
    document.getElementById('tempLabel').innerHTML = 'Select a unit first!';
  }
};

function toCelsius(temperature) {
  // from Fahrenheit to Celsius
  return (temperature - 32) * (5 / 9);
}

function toFahrenheit(temperature) {
  // from Celsius to Fahrenheit
  return temperature * (9 / 5) + 32;
}
