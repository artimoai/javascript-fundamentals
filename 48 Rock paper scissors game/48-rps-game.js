/**
 * *    Rock paper scissors game in JavaScript
 */

const PLAYERTEXT = document.querySelector('#playerText');
const COMPUTERTEXT = document.querySelector('#computerText');
const RESULTTEXT = document.querySelector('#resultText');
const CHOICEBTN = document.querySelectorAll('.choice-btn');
let playerChoice;
let computerChoice;
let result;

CHOICEBTN.forEach((button) =>
  button.addEventListener('click', () => {
    playerChoice = button.id;
    playerSymbol = button.textContent;
    computerTurn();
    PLAYERTEXT.textContent = `Player >> ${playerSymbol}`;
    COMPUTERTEXT.textContent = `Computer >> ${computerSymbol}`;
    RESULTTEXT.textContent = checkWinner();
  })
);

function computerTurn() {
  const RANDNUM = Math.floor(Math.random() * 3) + 1;

  switch (RANDNUM) {
    case 1:
      computerChoice = 'rock';
      computerSymbol = '💎';
      break;
    case 2:
      computerChoice = 'paper';
      computerSymbol = '📃';
      break;
    case 3:
      computerChoice = 'scissors';
      computerSymbol = '✂️';
      break;
  }
}

function checkWinner() {
  if (playerChoice == computerChoice) {
    return 'Draw!';
  } else if (computerChoice == 'rock') {
    return playerChoice == 'paper' ? 'You Win!' : 'You Lose!';
  } else if (computerChoice == 'paper') {
    return playerChoice == 'scissors' ? 'You Win!' : 'You Lose!';
  } else if (computerChoice == 'scissors') {
    return playerChoice == 'rock' ? 'You Win!' : 'You Lose!';
  }
}
