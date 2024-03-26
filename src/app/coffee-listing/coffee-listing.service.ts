import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//third-party
import { Observable } from 'rxjs';
//model
import { CoffeeListing } from './coffee-listing.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeListingService {
  apiUrl: string = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';
  constructor(private http: HttpClient) { }

  getCoffeeListing(): Observable<CoffeeListing[]> {
    return this.http.get<CoffeeListing[]>(this.apiUrl);
  }
}
