import promptSync from "prompt-sync";
import { game } from "./games.js";
import { Blackjack } from "./blackjack/blackjack.js";
const prompt = promptSync();


console.log('Casino Simulator');
let response = "";
let currGame = game.Blackjack;
let bankroll = prompt("Enter starting bankroll");
while (true) {
    response = prompt("Which game would you like to test? ");
    if (response.toLowerCase() == "roulette") {
        currGame = game.Roulette;
        break;
    }
    else if (response.toLowerCase() == "blackjack") {
        currGame = game.Blackjack;
        playBlackJack();
        
        break;
    }
    else {
        console.log("Please enter a valid game. Options: " );
        for (const g of Object.values(game)) {
            console.log(`- ${g}`);
        }
        continue;
    }
}

function playBlackJack(): number {
    console.log('Welcome to Blackjack');
    const wager = parseInt(prompt("Enter wager amount: "));
    const blackJackGame = new Blackjack(wager);
    const hands = blackJackGame.getPlayerHands();
    console.log('Player Hands:')
    for (const hand of hands) {
        console.log(hand.toString());
    }
    console.log('Dealer Hand:');
    console.log(blackJackGame.getDealerHand().toString());
    return 0;
}
