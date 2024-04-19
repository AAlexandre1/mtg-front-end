import { Type } from "./type"
import { ManaCost } from "./mana-cost"

export class Card {
  id: number;
  name: string;
  set: string;
  power?: number;
  toughness?: number;
  description: string;
  // types?: Type[];
  // manaCosts?: ManaCost[];

  constructor(card:any) {
    this.id = card.id;
    this.name =  card.name;
    this.set = card.set;
    this.power = card.power;
    this.toughness = card.toughness;
    this.description = card.description
    // this.types = card.types;
    // this.manaCosts = card.manaCosts;
  }
}
