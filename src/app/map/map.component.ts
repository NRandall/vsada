import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom: number = 10;
  stores: Array<any>;
  markClick(id: number) {
    this.router.navigate(['/store', id]);
  }

  constructor(private storesService: StoresService, private router: Router) {
    this.stores = this.storesService.getStores();
    for (let store of this.stores){
      if (store.tags.indexOf('Mall') >= 0) { store.z = 1; }
    }
  }

  ngOnInit() {
  }

}
