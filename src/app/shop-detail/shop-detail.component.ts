import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../stores.service';
import { Subscription } from 'rxjs/Rx';

// Component for showing a single store's info
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css'],
})
export class ShopDetailComponent implements OnDestroy {
  // variable declarations
  private subscription: Subscription;  // subscription for the url params
  zoom: number = 12;                   // zoom prop for google maps
  id: number;                          // holds the current store id
  store: any;                          // holds the currrent store object
  stores: Array<any>;                  // holds the array of all

  // returns link to google maps for current store
  getMap(address: string) {
    window.location.href = 'http://maps.google.com/?q=' + address;
  }

  constructor(private storesService: StoresService, private activatedRoute: ActivatedRoute) {
    this.stores = this.storesService.getStores(); // gets all the stores from the storeService
    // subscribes to activatedRoute to get passed store id
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.id = +param['id'];
        this.store = this.storesService.getStore(this.id);
        setTimeout(function() { window.scrollTo(0, window.innerHeight * 0.755); }, 10);
      }
    );
  }

  ngOnDestroy() {
    // kill activatedRoute subscription on completion
    this.subscription.unsubscribe();
  }
}
