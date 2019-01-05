import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IRestaurant } from "../restaurant/restaurant";
import { ToastService } from "../service/toastr.service";
import { Time } from "../order/order.component";

@Component({
  selector: 'pf-order',
  templateUrl: './order-restaurant.component.html',
  styleUrls: ['./order-restaurant.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderRestaurantComponent implements OnInit {
  restaurant: IRestaurant[];
  items: number;
  total: number;
  pieces;
  showPrice: boolean;

  time: Time[] = [
    {value: '6-8'},
    {value: '7-9'},
    {value: '8-10'},
    {value: '9-11'},
    {value: '10-12'}
  ];

  myRestaurantForm: FormGroup;

  constructor(
      private router: Router,
      private http: HttpClient,
      private toastService: ToastService
  ) {}

  ngOnInit() {
    this.myRestaurantForm = new FormGroup({
      'name': new FormControl('', [Validators.required,  Validators.minLength(3)]),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'address': new FormControl('', [Validators.required, Validators.minLength(3),
        Validators.maxLength(25)]),
      'house': new FormControl('', [Validators.required, Validators.minLength(1),
        Validators.maxLength(3)]),
      'room': new FormControl('', [Validators.required, Validators.minLength(1),
        Validators.maxLength(3)]),
      'payment': new FormControl('', Validators.required),
      'honeypot': new FormControl('')
    });

    this.orderFromLocalStorage();
    this.showPrice = JSON.parse(localStorage.getItem('restaurant'));
  }

  validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }

  onSubmit(form) {
    if (this.validateHuman(this.myRestaurantForm.get('honeypot').touched)) {  //if form is filled, form will not be submitted
      return false;
    }

    // RESTAURANT
    if (localStorage.getItem('restaurant')) {
      let restItem = localStorage.getItem('restaurant').length;
    }

    if (localStorage.getItem('restaurant')) {
      let order_rest = JSON.parse(localStorage.getItem('restaurant'));
      let summ = 0;
      let product = [];
      order_rest.forEach(function(element) {
        summ += element.price;
        product.push({name: element.name, piece : element.pieces, price: element.price});
      });
      let array_new = {};
      array_new['phone'] = form.value.mobile;
      array_new['address_customer'] = form.value.address;
      array_new['house'] = form.value.house;
      array_new['room'] = form.value.room;
      array_new['payment'] = form.value.payment;
      array_new['name_customer'] = form.value.name;
      array_new['price'] = summ;
      array_new['name_product'] = product;
      const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');

      this.http.post('http://127.0.0.1:3000/send-restaurant', JSON.stringify(array_new), {
        headers: headers
      })
        .subscribe(data => {
          console.log('form data: ', data);
        });
      console.log('array_new: ', array_new);

      form.reset();
      this.toastService.showToast('success', 'Замовлення прийнято!');
      localStorage.clear();
      setTimeout(this.router.navigate(['/home']), 0);
    }
  }

  // redirectToThxPage(): any {
  //   setTimeout(this.router.navigate(['/thx-page']), 5000);
  // }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0)
        ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  orderFromLocalStorage() {
    let restaur = JSON.parse(localStorage.getItem('restaurant'));
    this.restaurant = restaur;
    this.total = 0;
    this.pieces = 0;
    if (restaur) {
      for (let i = 0; i < restaur.length; i++) {
        this.total += restaur[i].price;
        this.pieces += restaur[i].pieces;
      }
    }
    return this.total, this.pieces;
  }

  removeFromLocalStorage() {
    localStorage.clear();
    this.toastService.showToast('error', 'Корзину очищено!');
    setTimeout((x) => {
      this.router.navigate(['/home']);
    }, 1500);
  }

  removeProduct(id) {
    let items = JSON.parse(localStorage.getItem('restaurant'));
    let index = items.map(x => {
      return x.id;
    }).indexOf(id);

    items.splice(index, 1);
    localStorage.setItem('restaurant', JSON.stringify(items));
    this.restaurant = JSON.parse(localStorage.getItem('restaurant'));
    this.total = 0;
    if (this.restaurant) {
      for (let i = 0; i < this.restaurant.length; i++) {
        this.total += this.restaurant[i].price;
      }
    }
    this.toastService.showToast(
      'success',
      `Продукт успішно видалено!`,
      3000);
    console.log('items: ', items);
  }

}
