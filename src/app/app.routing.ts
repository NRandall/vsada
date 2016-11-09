import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { MapComponent } from './map/map.component';

const APP_ROUTES: Routes = [
  { path: '', component: ShopListComponent },
  { path: 'region/:region', component: ShopListComponent },
  { path: 'tag/:tag', component: ShopListComponent },
  { path: 'store/:id', component: ShopDetailComponent },
  { path: 'map', component: MapComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
