import promptSync from "prompt-sync";
import { game } from "./games.js";
const prompt = promptSync();


console.log('Casino Simulator');
let response = ""
let currGame = game.Blackjack
while (true) {
    response = prompt("Which game would you like to test? ");
    if (response.toLowerCase() == "roulette") {
        currGame = game.Roulette;
        break;
    }
    else if (response.toLowerCase() == "blackjack") {
        currGame = game.Blackjack;
        
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





