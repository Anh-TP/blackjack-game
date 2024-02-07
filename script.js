const startEl = document.getElementById("start-game");
const hitEl = document.getElementById("hit-btn");
const stickEl = document.getElementById("stick-btn");
const resetEl = document.getElementById("reset-btn");

let gameStatusEl = document.getElementById("game-status");
let playerScoreEl = document.getElementById("player-score");
let playerCardsEl = document.getElementById("player-cards");
let dealerScoreEl = document.getElementById("dealer-score");
let dealerCardsEl = document.getElementById("dealer-cards");

let playerCards = [];
let compCards = [];
let compSum = 0;
let playerSum = 0;

let gameStarted = false;
let stay = false;
let bust = false;
let win = false;
let blackjack = false;

// games start and player cards are dealt

// listen for user click to start game / hit / stick
startEl.addEventListener("click", startGame);
hitEl.addEventListener("click", dealPlayerCards);
stickEl.addEventListener("click", stick);
resetEl.addEventListener("click", resetGame);

function getRandomNumber() {
  randomNumber = Math.ceil(Math.random() * 11);
  return randomNumber;
}

// deal 2 starting cards to player/comp
function startGame() {
  if (!gameStarted) {
    firstCard = getRandomNumber();
    secondCard = getRandomNumber();
    playerCards.push(firstCard, secondCard);

    playerCardsEl.textContent = "Your Cards: " + playerCards;

    gameStarted = true;

    console.log(playerCards);
    addPlayerSum();

    firstCompCard = getRandomNumber();
    secondCompCard = getRandomNumber();
    compCards.push(firstCompCard, secondCompCard);

    dealerCardsEl.textContent = "Dealer Cards: " + compCards;
    console.log(compCards);

    addCompSum();
  }
  renderGame();
}

// deal 1 card when player clicks hit
function dealPlayerCards() {
  dealPlayerCard = getRandomNumber();
  playerCards.push(dealPlayerCard);
  playerCardsEl.textContent = "Your Cards: " + playerCards;

  console.log(playerCards);

  addPlayerSum();
  renderGame();
}

// player sticks
function stick() {
  dealCompCards();
  renderGame();
}

// dealers cards
function dealCompCards() {
  while (compSum < 17) {
    dealCompCard = getRandomNumber();
    compCards.push(dealCompCard);
    addCompSum();
    dealerCardsEl.textContent = "Dealer Cards: " + compCards;
    return renderGame();
  }
}

// calculate sum of player/comp cards
// reduce method (with arrow func) similar to for each / for loops
function addPlayerSum() {
  playerSum = playerCards.reduce(
    (totalValue, currentValue) => totalValue + currentValue
  );
  playerScoreEl.textContent = "Your Score: " + playerSum;
  console.log("Player Sum:" + playerSum);
  return playerSum;
}

// calculate comp sum
function addCompSum() {
  compSum = compCards.reduce(
    (totalValue, currentValue) => totalValue + currentValue
  );
  dealerScoreEl.textContent = "Dealer Score: " + compSum;
  console.log("Computer Sum:" + compSum);
  return compSum;
}

function renderGame() {
  if (playerSum === 21) {
    gameStatusEl.textContent = "Black Jack, You's a Winner!";
  } else if (compSum > 21) {
    gameStatusEl.textContent = "House Busssss. You Win!";
  } else if (playerSum < 21) {
    gameStatusEl.textContent = "Do you want to draw a new card?";
  } else if (playerSum > 21) {
    gameStatusEl.textContent = "Ooops. Issssa Busssss. You Lose.";
  } else if (playerSum > compSum) {
    gameStatusEl.textContent = "You win!";
  } else if (compSum === playerSum) {
    gameStatusEl.textContent = "It's a tie!";
  } else if (compSum === 21) {
    gameStatusEl.textContent = "You lose!";
  }
}

function resetGame() {
  gameStarted = false;
  playerCards.splice(0, playerCards.length);
  compCards.splice(0, compCards.length);
  console.log(playerCards);
  console.log(compCards);
}
