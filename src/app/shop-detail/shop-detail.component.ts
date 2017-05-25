import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../stores.service';
import { Subscription } from 'rxjs/Rx';
import { Response } from '@angular/http';

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
  lat: number;
  lng: number; 
  id: string;                          // holds the current store id
  store: any;                          // holds the currrent store object
  stores: Array<any>;                  // holds the array of all

  // returns link to google maps for current store
  getMap(address: string) {
    window.location.href = 'http://maps.google.com/?q=' + address;
  }

  makeLink(linkText) {
    return linkText.replace(/\W+/g, "").toLowerCase();
  }

  constructor(private storesService: StoresService, private activatedRoute: ActivatedRoute) {
    // subscribes to activatedRoute to get passed store id
    this.subscription = activatedRoute.paramMap.subscribe(
      (params: any) => {
        this.id = params.get('id');
        this.storesService.getStoresFromDrupal()
          .subscribe(
            (res: Response) => {
              this.stores = res.json()
              .sort(function(a, b){
                let keyA = a.title[0].value.toUpperCase(),
                    keyB = b.title[0].value.toUpperCase();
                return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
              });
              for (let i = 0; i < this.stores.length; i++) {
                if (this.stores[i].title[0].value.replace(/\W+/g, "").toLowerCase() === this.id) { 
                  this.store = this.stores[i]; 
                  this.lat = +this.store.field_maplat[0].value;
                  this.lng = +this.store.field_maplng[0].value;
                  setTimeout(function() { window.scrollTo(0, window.innerHeight * 0.755); }, 10);
                  break;  
                }
              }
            },
            err => console.log(err)
          );
      }
    );
  }

  ngOnDestroy() {
    // kill activatedRoute subscription on completion
    this.subscription.unsubscribe();
  }
}
