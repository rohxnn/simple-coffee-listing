import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
//model
import { CoffeeListing } from '../coffee-listing/coffee-listing.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input()
coffeeListing: CoffeeListing[] = [];
}
