/**
 * *    Anonymous Objects in JavaScript
 * ?    These are objects without a name, not directly referenced.
 */

class Card {
  constructor(cardValue, cardSuit) {
    this.value = cardValue;
    this.suit = cardSuit;
  }
}

// Define playing cards objects anonymously in an array
let playingCards = [
  new Card('A', '♥️'),
  new Card('A', '♠️'),
  new Card('A', '♦️'),
  new Card('A', '♣️'),
  new Card('Q', '♥️'),
  new Card('Q', '♠️'),
  new Card('Q', '♦️'),
  new Card('Q', '♣️'),
];

// List all the cards in the array
playingCards.forEach((card) => console.log(`${card.value}|${card.suit}`));
