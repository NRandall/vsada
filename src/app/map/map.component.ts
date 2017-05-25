import { Component } from '@angular/core';
import { StoresService } from '../stores.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  zoom: number = 10;
  stores: Array<any>;
  markClick(store: any) {
    this.router.navigate(['/store', store.title[0].value.replace(/\W+/g, "").toLowerCase()]);
  }
  convertToInt(coord: string) {
    return +coord;
  }

  constructor(private storesService: StoresService, private router: Router) {
    this.storesService.getStoresFromDrupal()
          .subscribe(
            (res: Response) => {
              this.stores = res.json()
              .sort(function(a, b){
                let keyA = a.title[0].value.toUpperCase(),
                    keyB = b.title[0].value.toUpperCase();
                return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
              });
              for (let store of this.stores){
                if (store.field_tag.filter(tag=>tag.target_id==="1").length > 0) { store.z = 1; }
              }
            },
            err => console.log(err)
          );
    // this.stores = this.storesService.getStores();
    // for (let store of this.stores){
    //   if (store.tags.indexOf('Mall') >= 0) { store.z = 1; }
    // }
  }
}
