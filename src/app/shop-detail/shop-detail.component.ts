import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../stores.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css'],
})
export class ShopDetailComponent implements OnDestroy {
  private subscription: Subscription;
  zoom: number = 12;
  id: number;
  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            loop: true,
            //loopedSlides: 'auto'
        };
  store: any;
  stores: Array<any>;

  getMap(address: string) {
    window.location.href = 'http://maps.google.com/?q=' + address;
  }

  constructor(private storesService: StoresService, private activatedRoute: ActivatedRoute) {
    this.stores = this.storesService.getStores();
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.id = +param['id'];
        this.store = this.storesService.getStore(this.id);
        setTimeout(function() { window.scrollTo(0, window.innerHeight * 0.755); }, 10);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
