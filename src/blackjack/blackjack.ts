import { Deck } from "./deck.js";
import type { Card } from "./deck.js";


class Blackjack {
    private deck = new Deck;
    private wager = 0;
    private playerHand: Card[] = [];
}