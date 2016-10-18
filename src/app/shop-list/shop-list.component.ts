import { Component, OnInit } from '@angular/core';

import { StoresService } from '../stores.service';
// import * as stores from 'stores.js';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
  providers: [StoresService],
})
export class ShopListComponent implements OnInit {
  stores: Array<any>;
  zoom: number = 12;
  // stores = [
  //   {name: 'test'},
  //   {name: 'test2'},
  // ];

  constructor(storesService: StoresService) {
    this.stores = storesService.getStores()
    .sort(function(a, b){
      console.log(a.name);
      let keyA = a.name.toUpperCase(),
          keyB = b.name.toUpperCase();
      return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
  }

  ngOnInit() {
  }

}
