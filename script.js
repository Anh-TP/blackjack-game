const start = document.getElementById("start-game");
const hit = document.getElementById("hit-btn");
const stick = document.getElementById("stick-btn");
const reset = document.getElementById("reset-btn");

let playerCards = [];
let compCards = [];
let compSum = 0;
let playerSum = 0;

// games start and player cards are dealt

// listen for user click to start game / hit / stick
start.addEventListener("click", dealPlayerCards);
hit.addEventListener("click", dealPlayerCards);
stick.addEventListener("click", dealCompCards);
reset.addEventListener("click", resetGame);

// deal player/comp cards
function dealPlayerCards() {
  firstCard = Math.ceil(Math.random() * 11);
  secondCard = Math.ceil(Math.random() * 11);
  playerCards.push(firstCard, secondCard);
  addPlayerSum();

  console.log(playerCards);
}

function dealCompCards() {
  firstCard = Math.ceil(Math.random() * 11);
  secondCard = Math.ceil(Math.random() * 11);
  compCards.push(firstCard, secondCard);
  addCompSum();
}

// calculate sum of player/comp cards
// reduce method (with arrow func) similar to for each / for loops
function addPlayerSum() {
  playerSum = playerCards.reduce(
    (totalValue, currentValue) => totalValue + currentValue
  );
  console.log(playerSum);

  // calculate the result
  if (playerSum > 21) {
    console.log("Ooops. Issssa Busssss. You Lose");
  } else if (playerSum === 21) {
    console.log("Black Jack, You's a Winner!");
  } else {
    return playerSum;
  }
}

// calculate comp sum
function addCompSum() {
  compSum = compCards.reduce(
    (totalValue, currentValue) => totalValue + currentValue
  );
  console.log(compSum);

  if (compSum > 21) {
    console.log("Ooops. Issssa Busssss. You Lose");
  } else if (compSum === 21) {
    console.log("Black Jack, You's a Winner!");
  } else {
    return compSum;
  }
}

// add a loop to continue comp hit / stick

// stop button from working whislt game in certain play

// reset game
// click to start again
function resetGame() {
  playerCards.splice(0, playerCards.length);
  compCards.splice(0, compCards.length);
  console.log(playerCards);
  console.log(compCards);
}
