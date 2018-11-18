import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import { DeliveryComponent } from './delivery/delivery.component';
// import { AboutCompanyComponent } from './about-company/about-company.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PriceComponent } from './price/price.component';
// import { AuthorizationComponent } from './authorization/authorization.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { Balance2000DescrComponent } from './products/balance/balance-2000-descr/balance-2000-descr.component';
import { Lower1000DescrComponent } from './products/lower/lower-1000-descr/lower-1000-descr.component';
import { Lower1500DescrComponent } from './products/lower/lower-1500-descr/lower-1500-descr.component';
import { Set2500DescrComponent } from './products/set/set-2500-descr/set-2500-descr.component';
import { Set3500DescrComponent } from './products/set/set-3500-descr/set-3500-descr.component';
import { ThxPageComponent } from './thx-page/thx-page.component';

import { OrderComponent } from './order/order.component';

// Burgers
import { VealBurgerComponent } from './restaurant/burgers/veal-burger/veal-burger.component';
import { GreenBurgerComponent } from './restaurant/burgers/green-burger/green-burger.component';
import { TurkeyBurgerComponent } from './restaurant/burgers/turkey-burger/turkey-burger.component';


// Smuzi
import { ClassicSmuziComponent } from './restaurant/drinks/classic-smuzi/classic-smuzi.component';
import { TropicalSmuziComponent } from './restaurant/drinks/tropical-smuzi/tropical-smuzi.component';
import { GreenSmuziComponent } from './restaurant/drinks/green-smuzi/green-smuzi.component';
import { FreshSmuziComponent } from './restaurant/drinks/fresh-smuzi/fresh-smuzi.component';
import { VataminSmuziComponent } from './restaurant/drinks/vatamin-smuzi/vatamin-smuzi.component';

// Coctails
import { VanilCoclailComponent } from './restaurant/drinks/vanil-coclail/vanil-coclail.component';
import { ChocolateCoclailComponent } from './restaurant/drinks/chocolate-coclail/chocolate-coclail.component';
import { StrawberryCoclailComponent } from './restaurant/drinks/strawberry-coclail/strawberry-coclail.component';

// Deserts
import { MilkPiddingComponent } from './restaurant/deserts/milk-pidding/milk-pidding.component';
import { CherryMusseComponent } from './restaurant/deserts/cherry-musse/cherry-musse.component';
import { CheesecakeComponent } from './restaurant/deserts/cheesecake/cheesecake.component';
import { PanaKotaComponent } from './restaurant/deserts/pana-kota/pana-kota.component';
import { CheesePearComponent } from './restaurant/deserts/cheese-pear/cheese-pear.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'order/deliveri', component: DeliveryComponent},
  // {path: 'about', component: AboutCompanyComponent},
  {path: 'ration', component: CatalogComponent},
  {path: 'price', component: PriceComponent},
  {path: 'restaurant', component: RestaurantComponent},
  // {path: 'authorization', component: AuthorizationComponent},
  // {path: 'registration', component: RegistrationComponent},
  // {path: 'forgot-pass', component: ForgotPassComponent},
  {path: 'balance2000descr', component: Balance2000DescrComponent},
  {path: 'lower1000descr', component: Lower1000DescrComponent},
  {path: 'lower1500descr', component: Lower1500DescrComponent},
  {path: 'set2500descr', component: Set2500DescrComponent},
  {path: 'set3500descr', component: Set3500DescrComponent},
  {path: 'thx-page', component: ThxPageComponent},

  {path: 'order', component: OrderComponent},

  // burgers
  {path: 'restaurant/veal-burger', component: VealBurgerComponent},
  {path: 'restaurant/green-burger', component: GreenBurgerComponent},
  {path: 'restaurant/turkey-burger', component: TurkeyBurgerComponent},

  // smuzi
  {path: 'restaurant/classic-smuzi', component: ClassicSmuziComponent},
  {path: 'restaurant/tropical-smui', component: TropicalSmuziComponent},
  {path: 'restaurant/green-smuzi' , component: GreenSmuziComponent},
  {path: 'restaurant/fresh-smuzi', component: FreshSmuziComponent},
  {path: 'restaurant/vatamin-smuzi', component: VataminSmuziComponent},

  // coctails
  {path: 'restaurant/vanil-coclail', component: VanilCoclailComponent},
  {path: 'restaurant/chocolate-coclail', component: ChocolateCoclailComponent},
  {path: 'restaurant/strawberry-coclail', component: StrawberryCoclailComponent},

  // deserts
  {path: 'restaurant/milk-pudding', component: MilkPiddingComponent},
  {path: 'restaurant/cherry-musse', component: CherryMusseComponent},
  {path: 'restaurant/cheesecake', component: CheesecakeComponent},
  {path: 'restaurant/pana-kota', component: PanaKotaComponent},
  {path: 'restaurant/cheese-pear', component: CheesePearComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
