import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../stores.service';
import { Subscription } from 'rxjs/Rx';

// Component for controlling the shops index listing -
// Creates a grid of informational store card links that can be filtered
// by tag, region, or search text (passed from the navbar -> storesService)
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnDestroy {

  // Variable declaration
  private subscription: Subscription;    // Subscription for url params
  private searchTerm: Subscription;      // Subscription for navbar search term
  stores: Array<any>;                    // Holds store array locally
  term = this.storesService.getQuery();  // Holds the search term locally
  region: any;                           // Holds region filter if any
  tag: any;                              // Holds tag filter if any
  filter: any;                           // Holds current filter

  // Clears the search input field
  clearSearch() {
    this.storesService.setQuery('');
  }

  constructor(private storesService: StoresService, private activatedRoute: ActivatedRoute) {
    // Gets all stores from the storesService and stores as local array
    this.stores = this.storesService.getStores()
    .sort(function(a, b){
      let keyA = a.name.toUpperCase(),
          keyB = b.name.toUpperCase();
      return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });

    // Subscribes to the activatedRoute to update filter parameters
    // in real time when they are changed via URL parameters
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.region = param['region'] || false;
        this.tag = param['tag'] || false;
        this.filter = this.term || this.region || this.tag || false;
      }
    );

    // Subscribes to the storesService queryUpdated event so that
    // as the user types a query into the navbar, the query is updated
    // here as well
    this.searchTerm = this.storesService.queryUpdated.subscribe(
      (updatedTerm: any) => {
        this.term = updatedTerm;
        this.filter = this.term;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribes from observables when component is destroyed to prevent
    // memory leaks
    this.subscription.unsubscribe();
    this.searchTerm.unsubscribe();
  }
}
