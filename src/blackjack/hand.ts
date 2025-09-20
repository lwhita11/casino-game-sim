import type { Card } from "./deck.js";

export class Hand {
    private busted: boolean = false;
    private stay = false;
    private cards: Card[] = [];
    private count: number = 0;

    public addCard(card: Card) {
        this.cards.push(card);
        this.calculateCount();
    }

    public getCount(): number {
        return this.count;
    }

    private calculateCount(): void {
        let runningCount = 0;

        this.cards.forEach(card => {
            if (card.rank.label == "A") {
                console.log("Have not handled Aces yet");
            }
            else {
                runningCount += card.rank.value;
            }
        });
        this.count = runningCount;
        if (this.count > 21) {
            this.busted = true;
            this.stay = true;
        }
    }
}