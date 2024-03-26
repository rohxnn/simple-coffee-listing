import { Component, OnInit } from '@angular/core';
//component
import { CardComponent } from '../card/card.component';
//model
import { CoffeeListing } from './coffee-listing.model';
//service
import { CoffeeListingService } from './coffee-listing.service';

@Component({
  selector: 'app-coffee-listing',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './coffee-listing.component.html',
  styleUrl: './coffee-listing.component.scss'
})
export class CoffeeListingComponent implements OnInit {
  showAll: boolean = true;
  coffeeListing: CoffeeListing[] = [];

  constructor(private coffeeListingService: CoffeeListingService) { }
  ngOnInit(): void {
    this.getCoffeeListing();
  }

  getCoffeeListing() {
    this.coffeeListingService.getCoffeeListing().subscribe({
      next: (response: CoffeeListing[]) => {
        this.coffeeListing = response;
      }, error: (error) => {
        console.log(error.message);
      }
    });
  }

  onClickShowAllProduct() {
    this.showAll = true;
    this.getCoffeeListing();
  }

  onClickShowAvailable() {
    this.showAll = false;
    if(!this.showAll) {
      this.coffeeListing = this.coffeeListing.filter((item) => item.available === true);
    } 
  }
}
