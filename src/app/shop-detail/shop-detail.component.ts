import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css'],
})
export class ShopDetailComponent implements OnInit {
  zoom: number = 12;

  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };

  store = this.storesService.getStore();
  constructor(private storesService: StoresService) {};
  ngOnInit() {
    window.scrollTo(0, window.innerHeight * 0.755);
  };
}
