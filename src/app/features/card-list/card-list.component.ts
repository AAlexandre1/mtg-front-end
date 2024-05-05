import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/models/card';
import { CardComponent } from '../../shared/components/card/card.component';
import { ManaCost } from '../../shared/models/mana-cost';
import { CardService } from '../../core/services/card.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { FilterService, Filter} from '../../core/services/filter.service';
import { FormsModule } from '@angular/forms';
import { FilterCardsBySetPipe } from './filter-cards-by-set.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, HeaderComponent, FooterComponent, FilterComponent, FormsModule, FilterCardsBySetPipe, CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  providers: [FilterComponent]
})

export class CardListComponent implements OnInit {
  selectedSet: string = '';
  // filters: Filter | undefined;
  // filters: Filter = {};

  cards: Card[] = this.cardService.cards;

  constructor(private cardService: CardService) {

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
    // gets cards


  }
}


  // this.filterComponent.filtersChange.subscribe((filterEvent: FilterEvent) => {
  //   this.filterService.getFilteredCards(filterEvent.filters) // Pass filters from event
  //   .subscribe({
  //     next: (filteredCards: Card[]) => {
  //       // Check if filtered cards are empty
  //       if (filteredCards.length === 0) {
  //         // Use default cards if no filters match
  //         this.cards = this.cardService.cards; // Reassign fetched cards
  //       } else {
  //         this.cards = filteredCards; // Update with filtered cards
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Unable to retrieve cards.', error);
  //       this.cards = this.cardService.cards;
  //     }
  //   });
  // });


  // this.filterService.filtersChange.subscribe(filters => {
  //   this.filters = filters;
  //   this.filterCards(filters);
  // });

  // this.filterComponent.filtersChange.subscribe((filterEvent: FilterEvent) => {
  //   this.cards = this.filterService.getFilteredCards(filters)
  // });

  // filterCards(filters: Filter) {
    //   let filteredCards = this.cards; // Start with all cards

    //   if (filters) {
      //     if (filters.searchString) {
        //       const lowercaseString = filters.searchString.toLowerCase();
        //       filteredCards = filteredCards.filter(card =>
          //         card.name.toLowerCase().includes(lowercaseString) ||
        //         card.description.toLowerCase().includes(lowercaseString)
        //       );
        //     }

        //     if (filters.selectedSet) {
          //       filteredCards = filteredCards.filter(card => card.set === filters.selectedSet);
          //     }
          //   }

          //   this.cards = filteredCards;
          // }
          // filterCards(filters: Filter) {
            //   // Call cardService or filter locally based on your implementation
            //   if (filters) {
              //     this.cardService.getFilteredCards(filters) // Option 1: Call card service
              //       .subscribe(filteredCards => this.cards = filteredCards);
              //   } else {
                //     // Handle case where no filters are applied
                //     this.cardService.getCards() // Option 2: Fetch all cards if no filters
                //       .subscribe(cards => this.cards = cards);
                //   }
                // }

                // onFilterChange(filters: Filter) {
                  //   this.filterService.getFilteredCards(filters)
                  //     .subscribe(filteredCards => this.cards = filteredCards);
                  // }

                  // onFilterChange(filters: Event) {
  //   const filterData: Filter = (filters as any).detail;
  //   this.filterService.getFilteredCards(filterData)
  //     .subscribe(filteredCards => this.cards = filteredCards);
  // }

  // onFilterChange(filters: Event) {
    //   this.filterService.getFilteredCards(filters) // Access filters property
    //     .subscribe(filteredCards => this.cards = filteredCards);
    // }
    // onFilterChange(filters: FilterEvent<Filter>) {
      //   this.filterService.getFilteredCards(filters.detail) // Access filters property
      //     .subscribe(filteredCards => this.cards = filteredCards);
      // }


