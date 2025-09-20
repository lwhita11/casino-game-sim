export type Rank = {label: string; value: number};

export type Card = { suit: string; rank: Rank };

export class Deck{

    private suits = ["♥", "♦", "♣", "♠"];
    private ranks = [{label: "2", value: 2}, {label: "3", value: 3}, {label: "4", value: 4}, {label: "5", value: 5}, {label: "6", value: 6}, {label: "7", value: 7}, {label: "8", value: 8}, {label: "9", value: 9}, {label: "10", value: 10}, {label: "J", value: 10}, {label: "Q", value: 10}, {label: "K", value: 10}, {label: "A", value: 11},];
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