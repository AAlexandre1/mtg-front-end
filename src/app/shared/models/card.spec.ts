import { Card } from './card';

describe('Card', () => {
  it('should create an instance', () => {
    expect(new Card({
      id: 1,
      name: "Academic Dispute",
      set: "Strixhaven",
      description: "Target creature blocks this turn if able. You may have it gain reach until end of turn. Learn. (You may reveal a Lesson card you own from outside the game and put it into your hand, or discard a card to draw a card.)",
      types: [1, "Artifact"]
    })).toBeTruthy();
  });
});
