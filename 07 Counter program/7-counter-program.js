let counter = 0;

document.getElementById('decrease-btn').onclick = () => {
  counter -= 1;
  document.getElementById('counter-label').innerHTML = counter;
};

document.getElementById('reset-btn').onclick = () => {
  counter = 0;
  document.getElementById('counter-label').innerHTML = counter;
};

document.getElementById('increase-btn').onclick = () => {
  counter += 1;
  document.getElementById('counter-label').innerHTML = counter;
};
