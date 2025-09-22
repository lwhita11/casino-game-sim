import { Deck } from "./deck.js";
import type { Card } from "./deck.js";
import { Hand } from "./hand.js";


export class Blackjack {
    private deck = new Deck();
    private dealerScore = 0;
    private wager;
    private playerHands: Hand[] = [new Hand()];
    private dealerHand: Hand = new Hand;

    constructor(wager: number) {
        this.wager = wager;
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
        //TODO
    }

    public stand(): void {
        //TODO
    }

    public double(): void {
        //TODO
    }

    public split(): void {
        //TODO
    }

    private dealerRun(): void {
        //TODO
    }
}