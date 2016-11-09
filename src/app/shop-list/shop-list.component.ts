import { Component } from '@angular/core';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent {
  stores: Array<any>;
  term = this.storesService.getQuery();
  logEvent(store) {
    this.storesService.setStore(store);
  };

  constructor(private storesService: StoresService) {
    this.stores = this.storesService.getStores()
    .sort(function(a, b){
      let keyA = a.name.toUpperCase(),
          keyB = b.name.toUpperCase();
      return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
  }
}
