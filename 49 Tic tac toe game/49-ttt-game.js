/**
 * *    Tic Tac Toe game in JavaScript
 */

const CELLCONTAINER = document.getElementById('cellContainer');
for (let i = 0; i < 9; i++) {
  let newDiv = document.createElement('div');
  newDiv.className = 'cell';
  newDiv.setAttribute('cellIndex', `${i}`);
  // newDiv.textContent = `${i}`;
  CELLCONTAINER.appendChild(newDiv);
}

const CELLS = document.querySelectorAll('.cell');
const STATUSTEXT = document.querySelector('#statusText');
const BUTTON = document.querySelector('#restart-btn');

const WINCONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameRunning = false;

initializeGame();

function initializeGame() {
  CELLS.forEach((cell) => cell.addEventListener('click', cellClicked));
  BUTTON.addEventListener('click', restartGame);
  STATUSTEXT.textContent = `${currentPlayer}'s turn`;
  gameRunning = true;
}

function cellClicked() {
  const CELLINDEX = this.getAttribute('cellIndex');
  if (options[CELLINDEX] != '' || !gameRunning) {
    return;
  }
  updateCell(this, CELLINDEX);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
  STATUSTEXT.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < WINCONDITIONS.length; i++) {
    const CONDITION = WINCONDITIONS[i];
    const CELLA = options[CONDITION[0]];
    const CELLB = options[CONDITION[1]];
    const CELLC = options[CONDITION[2]];

    if (CELLA == '' || CELLB == '' || CELLC == '') {
      continue;
    }

    if (CELLA == CELLB && CELLB == CELLC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    STATUSTEXT.textContent = `${currentPlayer} wins!`;
    gameRunning = false;
  } else if (!options.includes('')) {
    STATUSTEXT.textContent = `Draw`;
    gameRunning = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = 'X';
  options = ['', '', '', '', '', '', '', '', ''];
  STATUSTEXT.textContent = `${currentPlayer}'s turn`;
  CELLS.forEach((cell) => (cell.textContent = ''));
  gameRunning = true;
}
