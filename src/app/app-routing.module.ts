import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PriceComponent } from './price/price.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { Balance2000DescrComponent } from './products/balance/balance-2000-descr/balance-2000-descr.component';
import { Lower1000DescrComponent } from './products/lower/lower-1000-descr/lower-1000-descr.component';
import { Lower1500DescrComponent } from './products/lower/lower-1500-descr/lower-1500-descr.component';
import { Set2500DescrComponent } from './products/set/set-2500-descr/set-2500-descr.component';
import { Set3500DescrComponent } from './products/set/set-3500-descr/set-3500-descr.component';

import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'order/deliveri', component: DeliveryComponent},
  {path: 'about', component: AboutCompanyComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'price', component: PriceComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forgot-pass', component: ForgotPassComponent},
  {path: 'balance2000descr', component: Balance2000DescrComponent},
  {path: 'lower1000descr', component: Lower1000DescrComponent},
  {path: 'lower1500descr', component: Lower1500DescrComponent},
  {path: 'set2500descr', component: Set2500DescrComponent},
  {path: 'set3500descr', component: Set3500DescrComponent},

  {path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
