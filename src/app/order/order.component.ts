import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from '../products/product';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IRestaurant } from "../restaurant/restaurant";
import {ToastService} from "../service/toastr.service";

@Component({
  selector: 'pf-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {

  product: IProduct[];
  restaurant: IRestaurant[];

  myform: FormGroup;
  myRestaurantForm: FormGroup;

  constructor(
      private router: Router,
      private http: HttpClient,
      private toastService: ToastService
  ) {}

  ngOnInit() {
    this.myform = new FormGroup({
      'name': new FormControl('', [Validators.required,  Validators.minLength(3)]),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'address': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25),
        Validators.pattern('[^\w\d]*(([0-9]+.*[A-Za-z\u0400-\u04ff]+.*)|[A-Za-z\u0400-\u04ff]+.*([0-9]+.*))')]),
      // 'checkbox': new FormControl('', Validators.required),
      'honeypot': new FormControl('')
    });

    this.myRestaurantForm = new FormGroup({
      'name': new FormControl('', [Validators.required,  Validators.minLength(3)]),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'address': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25),
        Validators.pattern('[^\w\d]*(([0-9]+.*[A-Za-z\u0400-\u04ff]+.*)|[A-Za-z\u0400-\u04ff]+.*([0-9]+.*))')]),
      // 'checkbox': new FormControl('', Validators.required),
      'honeypot': new FormControl('')
    });

    this.orderFromLocalStorage();
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
    if (this.validateHuman(this.myform.get('honeypot').touched)) {  //if form is filled, form will not be submitted
      return false;
    }
    console.log("Form Submitted!");

    // PRODUCT
    if (localStorage.getItem('product')) {
      let order_prod = JSON.parse(localStorage.getItem('product'))[0];
      let array_new = {};
      array_new['phone'] = form.value.mobile;
      array_new['address_customer']= form.value.address;
      array_new['name_customer'] = form.value.name;
      array_new['price'] = order_prod.price;
      array_new['name_product'] = order_prod.name;
      console.log(array_new);
      const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');

      this.http.post('http://127.0.0.1:3000/send', JSON.stringify(array_new), {
        headers: headers
      })
        .subscribe(data => {
          console.log('form data: ', data);
        });

      form.reset();
      localStorage.clear();
      setTimeout(this.router.navigate(['/home']), 5000);
    }

    // RESTAURANT
    if (localStorage.getItem('restaurant')) {
      let order_rest = JSON.parse(localStorage.getItem('restaurant'))[0];
      let array_new = {};
      array_new['phone'] = form.value.mobile;
      array_new['address_customer']= form.value.address;
      array_new['name_customer'] = form.value.name;
      array_new['price'] = order_rest.price;
      array_new['name_product'] = order_rest.name;
      console.log(array_new);
      const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');

      this.http.post('http://127.0.0.1:3000/send-restaurant', JSON.stringify(array_new), {
        headers: headers
      })
        .subscribe(data => {
          console.log('form data: ', data);
        });

      form.reset();
      this.toastService.showToast('success', 'Замовлення прийнято!');
      localStorage.clear();
      setTimeout(this.router.navigate(['/home']), 5000);
    }

  }

  redirectToThxPage(): any {
    setTimeout(this.router.navigate(['/thx-page']), 5000);
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0)
        ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  orderFromLocalStorage() {
    let prod = JSON.parse(localStorage.getItem('product'));
    let restaur = JSON.parse(localStorage.getItem('restaurant'));
    this.product = prod;
    this.restaurant = restaur;
  }

  removeFromLocalStorage() {
      localStorage.clear();
      this.router.navigate(['/home']);
  }


}
