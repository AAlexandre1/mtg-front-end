import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../../shared/models/card';

@Pipe({
  name: 'filterCardsBySet',
  standalone: true
})
export class FilterCardsBySetPipe implements PipeTransform {

  transform(cards: Card[], set: string): any {
    if(!cards) return [];
    if(!set) return cards;

    set = set.toLowerCase().trim();
    return cards.filter(card => {
      return card.set.toLowerCase().trim() === set;
    })
  }

}
