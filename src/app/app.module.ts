import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { MainComponent } from './home/main/main.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DeliveryComponent } from './delivery/delivery.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PriceComponent } from './price/price.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { Lower1000Component } from './products/lower/lower-1000/lower-1000.component';
import { Lower1500Component } from './products/lower/lower-1500/lower-1500.component';
import { Balance2000Component } from './products/balance/balance-2000/balance-2000.component';
import { Set2500Component } from './products/set/set-2500/set-2500.component';
import { Set3500Component } from './products/set/set-3500/set-3500.component';
import { Balance2000DescrComponent } from './products/balance/balance-2000-descr/balance-2000-descr.component';
import { Lower1000DescrComponent } from './products/lower/lower-1000-descr/lower-1000-descr.component';
import { Lower1500DescrComponent } from './products/lower/lower-1500-descr/lower-1500-descr.component';
import { Set2500DescrComponent } from './products/set/set-2500-descr/set-2500-descr.component';
import { Set3500DescrComponent } from './products/set/set-3500-descr/set-3500-descr.component';
import { OrderComponent } from './order/order.component';
import { AuthorizationComponent } from './authorization/authorization.component';

import {
  MatTabsModule,
  MatRadioModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ThxPageComponent } from './thx-page/thx-page.component';
import { BurgersComponent } from './restaurant/burgers/burgers.component';
import { VealBurgerComponent } from './restaurant/burgers/veal-burger/veal-burger.component';
import { GreenBurgerComponent } from './restaurant/burgers/green-burger/green-burger.component';
import { TurkeyBurgerComponent } from './restaurant/burgers/turkey-burger/turkey-burger.component';
import { DrinksComponent } from './restaurant/drinks/drinks.component';
import { ClassicSmuziComponent } from './restaurant/drinks/classic-smuzi/classic-smuzi.component';
import { TropicalSmuziComponent } from './restaurant/drinks/tropical-smuzi/tropical-smuzi.component';
import { GreenSmuziComponent } from './restaurant/drinks/green-smuzi/green-smuzi.component';
import { FreshSmuziComponent } from './restaurant/drinks/fresh-smuzi/fresh-smuzi.component';
import { VataminSmuziComponent } from './restaurant/drinks/vatamin-smuzi/vatamin-smuzi.component';
import { VanilCoclailComponent } from './restaurant/drinks/vanil-coclail/vanil-coclail.component';
import { ChocolateCoclailComponent } from './restaurant/drinks/chocolate-coclail/chocolate-coclail.component';
import { StrawberryCoclailComponent } from './restaurant/drinks/strawberry-coclail/strawberry-coclail.component';
import { DesertsComponent } from './restaurant/deserts/deserts.component';
import { MilkPiddingComponent } from './restaurant/deserts/milk-pidding/milk-pidding.component';
import { CherryMusseComponent } from './restaurant/deserts/cherry-musse/cherry-musse.component';
import { CheesecakeComponent } from './restaurant/deserts/cheesecake/cheesecake.component';
import { PanaKotaComponent } from './restaurant/deserts/pana-kota/pana-kota.component';
import { CheesePearComponent } from './restaurant/deserts/cheese-pear/cheese-pear.component';
import { AppleCoctailComponent } from './restaurant/drinks/apple-coctail/apple-coctail.component';
import { MangoCoctailComponent } from './restaurant/drinks/mango-coctail/mango-coctail.component';
import { ColaLaymCoctailComponent } from './restaurant/drinks/cola-laym--coctail/cola-laym--coctail.component';
import { OrderRestaurantComponent } from "./order-restaurant/order-restaurant.component";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DeliveryComponent,
    AboutCompanyComponent,
    CatalogComponent,
    PriceComponent,
    RestaurantComponent,
    Lower1000Component,
    Lower1500Component,
    Balance2000Component,
    Set2500Component,
    Set3500Component,
    Balance2000DescrComponent,
    Lower1000DescrComponent,
    Lower1500DescrComponent,
    Set2500DescrComponent,
    Set3500DescrComponent,
    OrderComponent,
    AuthorizationComponent,
    RegistrationComponent,
    ForgotPassComponent,
    ThxPageComponent,
    BurgersComponent,
    VealBurgerComponent,
    GreenBurgerComponent,
    TurkeyBurgerComponent,
    DrinksComponent,
    ClassicSmuziComponent,
    TropicalSmuziComponent,
    GreenSmuziComponent,
    FreshSmuziComponent,
    VataminSmuziComponent,
    VanilCoclailComponent,
    ChocolateCoclailComponent,
    StrawberryCoclailComponent,
    DesertsComponent,
    MilkPiddingComponent,
    CherryMusseComponent,
    CheesecakeComponent,
    PanaKotaComponent,
    CheesePearComponent,
    AppleCoctailComponent,
    MangoCoctailComponent,
    ColaLaymCoctailComponent
    CheesePearComponent,
    OrderRestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    Ng2CarouselamosModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      closeButton: true,
      timeOut: 3000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
