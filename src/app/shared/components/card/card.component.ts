import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required:true }) card:Card = new Card({})
}
