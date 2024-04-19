import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../../shared/models/card';
import { CardService } from './card.service';
// import { FilterComponent } from '../../shared/components/filter/filter.component';

export interface Filter {
  searchString?: string;
  selectedSet?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private cardService: CardService) {}

  getFilteredCards(filters?: Filter): Observable<Card[]> {
    return this.cardService.getCardListCards().pipe(
      map(cards => {
        // Check for empty cards array from the API call
        if (cards.length === 0) {
          return []; // Return empty array if no cards retrieved
        }

        // Apply filters if cards are available
        console.log(this.filterByString(cards, filters?.searchString ?? ''));
        return this.filterByString(cards, filters?.searchString ?? '');
      }),
      map(cards => this.filterBySet(cards, filters?.selectedSet ?? ''))
    );
  }

  private filterByString(cards: Card[], searchString?: string): Card[] {
    if (!searchString) {
      return cards;
    }
    const lowercaseString = searchString.toLowerCase();
    return cards.filter(card =>
      card.name.toLowerCase().includes(lowercaseString) ||
      card.description.toLowerCase().includes(lowercaseString)
    );
  }

  private filterBySet(cards: Card[], selectedSet?: string): Card[] {
    if (!selectedSet) {
      return cards;
    }
    return cards.filter(card => card.set === selectedSet);
  }
}




  // getFilteredCards(filters?: Filter): Observable<Card[]> {
  //   return this.cardService.getCardListCards()
  //     .pipe(
  //       map(cards => this.filterByString(cards, filters?.searchString ?? '')),
  //       map(cards => this.filterBySet(cards, filters?.selectedSet ?? ''))
  //     )
  // }
