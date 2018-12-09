import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IRestaurant } from "../restaurant/restaurant";
import { ToastService } from "../service/toastr.service";

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
      'address': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25),
        Validators.pattern('[^\w\d]*(([0-9]+.*[A-Za-z\u0400-\u04ff]+.*)|[A-Za-z\u0400-\u04ff]+.*([0-9]+.*))')]),
      'checkbox': new FormControl('', Validators.required),
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
    if (this.validateHuman(this.myRestaurantForm.get('honeypot').touched)) {  //if form is filled, form will not be submitted
      return false;
    }
    console.log("Form Submitted!");

    // RESTAURANT
    if (localStorage.getItem('restaurant')) {
      let restItem = localStorage.getItem('restaurant').length;
    }

    if (localStorage.getItem('restaurant')) {
      // for (let i = 0; i < restItem; i++) {
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
        console.log(this.toastService.showToast('success', 'Замовлення прийнято!'));
        localStorage.clear();
        setTimeout(this.router.navigate(['/home']), 5000);
      // }
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
    let restaur = JSON.parse(localStorage.getItem('restaurant'));
    this.restaurant = restaur;
    this.total = 0;
    this.pieces = 0;
    for (let i = 0; i < restaur.length; i++) {
      this.total += restaur[i].price;
      this.pieces += restaur[i].pieces;
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

  // redirectToHomePage() {
  //   this.toastService.showToast(
  //     'warning',
  //     'Ви можете продовжити замовлення і повернутися до корзини в будь-який час!',
  //     4000);
  //   setTimeout((x) => {
  //     this.router.navigate(['/home']);
  //   }, 1500);
  // }
}

