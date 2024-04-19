import { Injectable } from '@angular/core';
import { Card } from '../../shared/models/card';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = [
        new Card({
          id: 1,
          name: "Academic Dispute",
          set: "Strixhaven",
          description: "Target creature blocks this turn if able. You may have it gain reach until end of turn. Learn. (You may reveal a Lesson card you own from outside the game and put it into your hand, or discard a card to draw a card.)",
        }),
      ({
        id: 2,
        name: "Academic Probation",
        set: "Strixhaven",
        description: "Choose one • Choose a nonland card name. Opponents can't cast spells with the chosen name until your next turn. • Choose target nonland permanent. Until your next turn, it can't attack or block, and its activated abilities can't be activated.",
      }),
      ({
        id: 3,
        name: "Access Tunnel",
        set: "Strixhaven",
        description: "Tap: Add Colorless. 3, Tap: Target creature with power 3 or less can't be blocked this turn.",
      }),
    ({
      id: 4,
      name: "Accomplished Alchemist",
      set: "Strixhaven",
      description: " Tap: Add one mana of any color. Tap: Add X mana of any one color, where X is the amount of life you gained this turn.",
      power: 2,
      toughness: 5
    }),
    ({
      id: 5,
      name: "A Killer Among Us",
      set: "Karlov",
      description: "When A Killer Among Us enters the battlefield, create a 1/1 white Human creature token, a 1/1 blue Merfolk creature token, and a 1/1 red Goblin creature token. Then secretly choose Human, Merfolk, or Goblin. Sacrifice A Killer Among Us, Reveal the creature type you chose: If target attacking creature token is the chosen type, put three +1/+1 counters on it and it gains deathtouch until end of turn.",
    }),
    ({
    id: 6,
    name: "Absolving Lammasu",
    set: "Karlov",
    description: "When Absolving Lammasu enters the battlefield, all suspected creatures are no longer suspected. When Absolving Lammasu dies, you gain 3 life and suspect up to one target creature an opponent controls. (A suspected creature has menace and can't block.)",
    power: 4,
    toughness: 3
    }),
    ({
      id: 7,
      name: "Aftermath Analyst",
      set: "Karlov",
      description: "When Aftermath Analyst enters the battlefield, mill three cards. 3 Green, Sacrifice Aftermath Analyst: Return all land cards from your graveyard to the battlefield tapped.",
      power: 1,
      toughness: 3
    }),
    ({
    id: 8,
    name: "Agency Coroner",
    set: "Karlov",
    description: "2 Black, Sacrifice another creature: Draw a card. If the sacrificed creature was suspected, draw two cards instead.",
    power: 3,
    toughness: 6
    }),
    ({
      id: 9,
      name: "Abrupt Decay",
      set: "Ravnica",
      description: "This spell can't be countered. Destroy target nonland permanent with mana value 3 or less.",
    }),
    ({
    id: 10,
    name: "Aerial Predation",
    set: "Karlov",
    description: "Destroy target creature with flying. You gain 2 life.",
    }),
    ({
      id: 11,
      name: "Angel of Serenity",
      set: "Karlov",
      description: "When Angel of Serenity enters the battlefield, you may exile up to three other target creatures from the battlefield and/or creature cards from graveyards. When Angel of Serenity leaves the battlefield, return the exiled cards to their owners' hands.",
      power: 5,
      toughness: 6
    }),
    ({
    id: 12,
    name: "Annihilating Fire",
    set: "Karlov",
    description: "Annihilating Fire deals 3 damage to any target. If a creature dealt damage this way would die this turn, exile it instead.",
    }),
      ];

  constructor(private http:HttpClient ) { }

  getCardListCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${environment.apiURL}/cards`).pipe(
      catchError(error => {
        if (error.status === 404) {
          console.error('API endpoint not found.');
        } else if (error.status === 500) {
          console.error('Internal server error on API.');
        } else {
          console.error('Error fetching cards from API:', error);
        }
        return of(this.cards);
      })
    );
  }
}




// getCardListCards(): Observable<Card []> {
//   return this.http.get<Card[]> (`${environment.apiURL}/cards`)
// }
