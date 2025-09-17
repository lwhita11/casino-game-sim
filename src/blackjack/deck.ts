export type Card = { suit: string; rank: string };

export class Deck{

    private suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    private ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    private deck: Card[] = [];

    constructor() {
        this.createDeck(); 
        this.shuffleDeck();
    }

    private createDeck(): Card[] {
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                this.deck.push({ suit, rank });
            }
        }
        return this.deck;
    }

    private shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j]!, this.deck[i]!];
        }
    }

    public dealCard(): Card {
        const topCard = this.deck.pop();
        if (topCard) {
            return topCard;
        }
        else {
            throw new Error("The deck is empty! Cannot deal a card.");
        }
    }
}