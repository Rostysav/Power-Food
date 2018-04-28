import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { MainComponent } from './home/main/main.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
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
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    MatIconModule,
    MatSelectModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
