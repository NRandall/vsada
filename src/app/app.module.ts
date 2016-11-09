import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { routing } from './app.routing';
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { StoreFilterPipe } from './store-filter.pipe';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopListComponent,
    ShopDetailComponent,
    NavbarComponent,
    StoreFilterPipe,
    MapComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    SwiperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOBMMXgA1XasT53SrsanY18fCO91cBJzU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
