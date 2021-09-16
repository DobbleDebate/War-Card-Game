export default class Deck {
  constructor(cards_folder = null) {

    this.cards_folder = cards_folder;
    
    var cards = new Array();
    var i = 0;
    if (cards_folder != null) {
      var bFinishCheck = false;
      var face;

      while (!bFinishCheck) {
        face = new Image();
        face.onload = fExists;
        face.onerror = fDoesntExist;
        face.src = cards_folder + '/' + i + '.png';

      }

      function fExists() {
        cards.push(Card(face));
        i++;
      }

      function fDoesntExist() {
        bFinishCheck = true;
      }
    }
    this.cards = cards;
    this.size = i;
    this.discard = new Array();
  }

  get numberOfCards() {
    return this.cards.length;
  }

  pop() {
    return this.cards.shift();
  }

  push(card) {
    this.cards.push(card);
  }

  pushDiscard(card) {
    this.discard.push(card);
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }

  reshuffle() {
    this.cards.concat(this.discard);
    this.discard = new Array();
    this.shuffle();
  }
}

class Card {
  constructor(face) {
    this.face = face;
  }

  getHTML() {
    const cardDiv = document.createElement("img");
    cardDiv.src = this.face.src;
    return cardDiv;
  }
}