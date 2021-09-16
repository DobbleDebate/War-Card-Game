import Deck from "./deck.js"

const abilitiesCardSlot = document.querySelector(".computer-card-slot");
const situationsCardSlot = document.querySelector(".player-card-slot");
const abilitiesDeckElement = document.querySelector(".computer-deck");
const situationsDeckElement = document.querySelector(".player-deck");

let abilitiesDeck, situationsDeck;

startGame()

abilitiesDeckElement.onclick = flipCard(abilitiesDeck, abilitiesCardSlot);
situationsDeckElement.onclick = flipCard(situationsDeck, situationsCardSlot);

function startGame() {
  abilitiesDeck = new Deck('assets/cards/abilities');
  abilitiesDeck.shuffle();

  situationsDeck = new Deck('assets/cards/situations');
  situationsDeck.shuffle();

  cleanBeforeRound();
}

function cleanBeforeRound() {
  abilitiesCardSlot.innerHTML = ""
  situationsCardSlot.innerHTML = ""
}

function cleanCardSlot(cardSlot){
  cardSlot.innerHTML = ""
}

function flipCard(deck, cardSlot) {
  cleanCardSlot(cardSlot);

  if (deck.numberOfCards <= 0){
    deck.reshuffle();
  }

  const card = deck.pop();

  cardSlot.appendChild(card.getHTML());

  deck.pushDiscard(card);

}
