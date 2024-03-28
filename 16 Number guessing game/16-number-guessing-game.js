function randomize() {
  return Math.floor(Math.random() * 10 + 1);
}

let randomGuess = randomize();
let myGuesses = 0;

document.getElementById('submit-btn').onclick = () => {
  let myGuess = document.getElementById('guess-field').value;
  myGuesses += 1;

  if (myGuess == randomGuess) {
    window.alert(
      `Answer is the number ${randomGuess}. It took you ${myGuesses} guesses to find it.`
    );
  } else if (myGuess < randomGuess) {
    window.alert('Your guess is too small');
  } else {
    window.alert('Your guess is too high');
  }
};

document.getElementById('reset-btn').onclick = () => {
  myGuesses = 0;
  randomGuess = randomize();
  document.getElementById('guess-field').value = null;
  window.alert('Game reset. Try again');
};
