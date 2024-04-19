import { Component } from '@angular/core';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { CardService } from '../../core/services/card.service';
import { FilterService } from '../../core/services/filter.service';
import { Card } from '../../shared/models/card';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CardComponent, FilterComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
  providers: [FilterComponent]
})
export class WishlistComponent {
  cards: Card[] = this.cardService.cards;

  constructor(private cardService: CardService, private filterService: FilterService, private filterComponent: FilterComponent) {

  }

  ngOnInit(): void {
    this.cardService.getCardListCards().subscribe({
      next: (cards: Card[]) => {
        this.cards = cards;
      },
      error: (error) => {
        console.error('Unable to retrieve cards.', error)
        this.cards = this.cardService.cards
      }
    })
  }
}
