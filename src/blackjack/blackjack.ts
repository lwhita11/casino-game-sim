import { Deck } from "./deck.js";
import type { Card } from "./deck.js";


class Blackjack {
    private deck = new Deck;
    private wager = 0;
    private playerHand: Card[] = [];
    private dealerHand: Card[] = [];

    constructor() {
        this.playerHand.push(this.deck.dealCard());
        this.playerHand.push(this.deck.dealCard());
        this.dealerHand.push(this.deck.dealCard());
        this.dealerHand.push(this.deck.dealCard());
    }

    public getPlayerHand(): Card[] {
        return this.playerHand;
    }
}