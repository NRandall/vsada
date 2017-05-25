import { Component, Renderer } from '@angular/core';
import { StoresService } from '../stores.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private searchTerm: Subscription;  // Subscription for the current search term
  terms: Array<any> = [              // Array of tags for keyword menu
    'mid-century modern',
    'furniture',
    'retro',
    'danish',
    'jewelry',
    'primitive',
    'mall',
    'antiques',
    'vintage',
    'consignment',
    'collectibles',
    'china',
    'glassware',
    'silver',
    'military',
    'store',
    'glass',
    'sterling',
    'service'
  ];

  term: string = '';               // holds the search term locally

  //
  searchBy(query: string) {
    this.storesService.setQuery(query);
    this.term = query;
  }

  constructor(private storesService: StoresService, private renderer: Renderer) {
    // Uncomment to query stores array to populate keywords menu dynamically
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

    // Updates the searchterm in the storesService so that the shop list component
    // knows what to filter by
    this.searchTerm = this.storesService.queryUpdated.subscribe(
      (updatedTerm: any) => {
        if (updatedTerm === '') { this.term = ''; };
      }
    );
  }
}
