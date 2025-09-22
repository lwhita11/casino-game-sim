import { gameOptions, type Game } from "./games";
import { Blackjack } from "./blackjack/blackjack";

// Grab DOM elements
const bankrollInput = document.getElementById("bankroll") as HTMLInputElement;
const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const gameSelectDiv = document.getElementById("gameSelectDiv") as HTMLDivElement;
const wagerDiv = document.getElementById("wagerDiv") as HTMLDivElement;
const outputDiv = document.getElementById("outputDiv") as HTMLDivElement;

let bankroll = 0;

// Start button click handler
startBtn.addEventListener("click", () => {
  const value = parseInt(bankrollInput.value);
  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid starting bankroll.");
    return;
  }

  bankroll = value;

  // Hide the bankroll input container
  bankrollInput.value = bankroll.toString();
  bankrollInput.disabled = true;
  startBtn.disabled = true;

  // Clear previous content
  gameSelectDiv.innerHTML = "";
  wagerDiv.innerHTML = "";
  outputDiv.innerHTML = "";

  // Show buttons for available games
  gameOptions.forEach((game) => {
    const btn = document.createElement("button");
    btn.textContent = game;
    btn.addEventListener("click", () => showWagerInput(game as Game));
    gameSelectDiv.appendChild(btn);
  });
});

// Show wager input for selected game
function showWagerInput(selectedGame: Game) {
  wagerDiv.innerHTML = "";
  outputDiv.innerHTML = "";

  const wagerInput = document.createElement("input");
  wagerInput.type = "number";
  wagerInput.placeholder = "Enter wager";

  const dealBtn = document.createElement("button");
  dealBtn.textContent = "Deal Cards";

  dealBtn.addEventListener("click", () => {
    const wager = parseInt(wagerInput.value);
    if (isNaN(wager) || wager <= 0 || wager > bankroll) {
      alert("Invalid wager.");
      return;
    }

    startGame(selectedGame, wager);
  });

  wagerDiv.appendChild(wagerInput);
  wagerDiv.appendChild(dealBtn);
}

// Start the selected game
function startGame(selectedGame: Game, wager: number) {
  outputDiv.innerHTML = "";

  if (selectedGame === "BLACKJACK") {
    playBlackjack(wager);
  } else {
    outputDiv.textContent = "Roulette not implemented yet.";
  }
}

// Play Blackjack
function playBlackjack(wager: number) {
  const blackjackGame = new Blackjack(wager);

  const playerHands = blackjackGame.getPlayerHands();
  const dealerHand = blackjackGame.getDealerHand();

  // Display player hands
  const playerDiv = document.createElement("div");
  playerDiv.textContent =
    "Player Hands:\n" + playerHands.map((h) => h.toString()).join("\n");
  outputDiv.appendChild(playerDiv);

  // Display dealer hand
  const dealerDiv = document.createElement("div");
  dealerDiv.textContent = "Dealer Hand:\n" + dealerHand.dealerToString();
  outputDiv.appendChild(dealerDiv);
}
