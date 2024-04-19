import { Mana } from "./mana";

export class ManaCost {
  id: number;
  card_id: number;
  mana_id: Mana;
  quantity: number;

  constructor(manaCost:any) {
    this.id = manaCost.id;
    this.card_id = manaCost.card_id;
    this.mana_id = manaCost.mana_id.id;
    this.quantity = manaCost.quantity;
  }
}
