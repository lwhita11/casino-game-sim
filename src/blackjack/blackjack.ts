import { Deck } from "./deck.js";
import type { Card } from "./deck.js";
import { Hand } from "./hand.js";


class Blackjack {
    private deck = new Deck;
    private wager = 0;
    private playerHands: Hand[] = [new Hand];
    private dealerHand: Hand = new Hand;

    constructor() {
        this.playerHands[0]!.addCard(this.deck.dealCard());
        this.playerHands[0]!.addCard(this.deck.dealCard());
        this.dealerHand.addCard(this.deck.dealCard());
        this.dealerHand.addCard(this.deck.dealCard());
    }

    public getPlayerHands(): Hand[] {
        return this.playerHands;
    }

    public getDealerHand(): Hand {
        return this.dealerHand;
    }

    public getPlayerCounts() {
        let hands = new Map<number, number>();
        this.playerHands.forEach((hand, index) => {
            hands.set(index, hand.getCount());
        });
        return hands;
    }

    public hit(): void {

    }
}