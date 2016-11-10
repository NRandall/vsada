import { Component, OnInit, Output } from '@angular/core';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  terms:Array<any> = [
    'Mid-Century Modern',
    'Furniture', 
    'Retro', 
    'Danish', 
    'Jewelry', 
    'Primitive', 
    'Mall', 
    'Antiques', 
    'Vintage', 
    'Consignment',
    'Collectibles',
    'china',
    'primitives',
    'glassware',
    'silver',
    'Military',
    'Glass',
    'Sterling'
  ];

  searchBy(query: string) {
    this.storesService.setQuery(query);
  }

  constructor(private storesService: StoresService) {
    // for (let store of storesService.getStores()){
    //   if (store.tags.length > 0) {
    //     for (let tag of store.tags) {
    //       if (this.terms.indexOf(tag) === -1) {
    //         this.terms.push(tag);
    //         console.log(this.terms);
    //       }
    //     }
    //   }
    // }
  }

  ngOnInit() {}

}
