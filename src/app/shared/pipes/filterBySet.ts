import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card';

@Pipe({
  name: 'filterBySet',
  standalone: true
})
export class FilterBySet implements PipeTransform {

  transform(cards: Card[], set: string): any {
    if(!cards) return [];
    if(!set) return cards;

    set = set.toLowerCase().trim();
    return cards.filter(card => {
      return card.set.toLowerCase().trim() === set;
    })
  }

}
