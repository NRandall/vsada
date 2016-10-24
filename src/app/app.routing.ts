import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';

const APP_ROUTES: Routes = [
  { path: '', component: ShopListComponent },
  { path: 'store', component: ShopDetailComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
