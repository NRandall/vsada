import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../stores.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnDestroy {
  private subscription: Subscription;
  stores: Array<any>;
  term = this.storesService.getQuery();
  region: any;
  tag: any;

  constructor(private storesService: StoresService, private activatedRoute: ActivatedRoute) {
    this.stores = this.storesService.getStores()
    .sort(function(a, b){
      let keyA = a.name.toUpperCase(),
          keyB = b.name.toUpperCase();
      return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.region = param['region'] || false;
        this.tag = param['tag'] || false;
        console.log(this.tag, this.region);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
