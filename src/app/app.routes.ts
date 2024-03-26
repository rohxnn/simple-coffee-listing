import { Routes } from '@angular/router';
//component
import { CoffeeListingComponent } from './coffee-listing/coffee-listing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/coffee-listing', pathMatch: 'full'},
  { path: 'coffee-listing', component: CoffeeListingComponent}
];
