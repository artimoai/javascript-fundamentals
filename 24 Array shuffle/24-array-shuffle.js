/**
 **  Array shuffle game in JS
 */

let gameCards = [
  'A',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

let shuffleCards = (array) => {
  // begin iterating from the tail end of the array
  let currentIndex = array.length; // 13

  while (currentIndex != 0) {
    // get random number ranging from the beginning to the end of the array
    let randomIndex = Math.floor(Math.random() * array.length);
    // decrement current position in the array by one
    currentIndex -= 1;
    // store the temporary position in the array
    let tempPosition = array[currentIndex];
    // swap the current array element with another random one
    array[currentIndex] = array[randomIndex];
    // move to the next position in the array
    // and repeat until the entire array has been traversed
    array[randomIndex] = tempPosition;
  }
  // returning the array is optional if we want to reassign it
  return array;
};

shuffleCards(gameCards);

// deall the cards at once using an arrow function
console.log('Shuffling the cards ...');
gameCards.forEach((card) => console.log(card));
