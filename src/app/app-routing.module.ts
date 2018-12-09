import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import { DeliveryComponent } from './delivery/delivery.component';
// import { AboutCompanyComponent } from './about-company/about-company.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
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
import { AppleCoctailComponent } from './restaurant/drinks/apple-coctail/apple-coctail.component';
import { MangoCoctailComponent } from './restaurant/drinks/mango-coctail/mango-coctail.component';
import { ColaLaymCoctailComponent } from './restaurant/drinks/cola-laym--coctail/cola-laym--coctail.component';

// Deserts
import { MilkPiddingComponent } from './restaurant/deserts/milk-pidding/milk-pidding.component';
import { CherryMusseComponent } from './restaurant/deserts/cherry-musse/cherry-musse.component';
import { CheesecakeComponent } from './restaurant/deserts/cheesecake/cheesecake.component';
import { PanaKotaComponent } from './restaurant/deserts/pana-kota/pana-kota.component';
import { CheesePearComponent } from './restaurant/deserts/cheese-pear/cheese-pear.component';
import { OrderRestaurantComponent } from "./order-restaurant/order-restaurant.component";

//Lanch
import { FirstLanchComponent } from './restaurant/lanch/first-lanch/first-lanch.component';
import { SecondLanchComponent } from './restaurant/lanch/second-lanch/second-lanch.component';
import { ThirdLanchComponent } from './restaurant/lanch/third-lanch/third-lanch.component';

// Breakfast
import { OmeletComponent } from './restaurant/breakfast/omelet/omelet.component';
import { OatmealComponent } from './restaurant/breakfast/oatmeal/oatmeal.component';
import { GranolaComponent } from './restaurant/breakfast/granola/granola.component';


// Bryskety
import { GuakamoleComponent } from './restaurant/bruskety/guakamole/guakamole.component';
import { SpinachComponent } from './restaurant/bruskety/spinach/spinach.component';
import { RostfibComponent } from './restaurant/bruskety/rostfib/rostfib.component';

// Salaty
import { ShrimpSalatComponent } from './restaurant/salaty/shrimp-salat/shrimp-salat.component';
import { BeetSalatComponent } from './restaurant/salaty/beet-salat/beet-salat.component';
import { KinoaSalatComponent } from './restaurant/salaty/kinoa-salat/kinoa-salat.component';
import { BylgyrSalatComponent } from './restaurant/salaty/bylgyr-salat/bylgyr-salat.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'order/deliveri', component: DeliveryComponent},
  // {path: 'about', component: AboutCompanyComponent},
  {path: 'ration', component: CatalogComponent},
  {path: 'price', component: PriceComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'contacts', component: ContactComponent},
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
  {path: 'order-restaurant', component: OrderRestaurantComponent},

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
  {path: 'restaurant/apple-coctail', component: AppleCoctailComponent},
  {path: 'restaurant/mango-coctail', component: MangoCoctailComponent},
  {path: 'restaurant/cola-laym-coctail', component: ColaLaymCoctailComponent},

  // deserts
  {path: 'restaurant/milk-pudding', component: MilkPiddingComponent},
  {path: 'restaurant/cherry-musse', component: CherryMusseComponent},
  {path: 'restaurant/cheesecake', component: CheesecakeComponent},
  {path: 'restaurant/pana-kota', component: PanaKotaComponent},
  {path: 'restaurant/cheese-pear', component: CheesePearComponent},

  // lanch
  {path: 'restaurant/lanch-N1', component: FirstLanchComponent},
  {path: 'restaurant/lanch-N2', component: SecondLanchComponent},
  {path: 'restaurant/lanch-N3', component: ThirdLanchComponent},


  // breakfast
  {path: 'restaurant/omelet', component: OmeletComponent},
  {path: 'restaurant/oatmeal', component: OatmealComponent},
  {path: 'restaurant/granola', component: GranolaComponent},

  // bryskety
  {path: 'restaurant/brysketa-guakamole', component: GuakamoleComponent},
  {path: 'restaurant/brysketa-spinach', component: SpinachComponent},
  {path: 'restaurant/brysketa-rostbif', component: RostfibComponent},

  // salaty
  {path: 'restaurant/shrimp-salad', component: ShrimpSalatComponent},
  {path: 'restaurant/beet-salad', component: BeetSalatComponent},
  {path: 'restaurant/kinoa-salad', component: KinoaSalatComponent},
  {path: 'restaurant/bylgyr-salad', component: BylgyrSalatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
