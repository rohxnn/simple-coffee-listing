import { Component } from '@angular/core';
//component
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-coffee-listing',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './coffee-listing.component.html',
  styleUrl: './coffee-listing.component.scss'
})
export class CoffeeListingComponent {

}
