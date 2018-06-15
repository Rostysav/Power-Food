import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from '../products/product';
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pf-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {

  product: IProduct[];

  myform: FormGroup;

  constructor(private router: Router,private http: HttpClient) {}

  ngOnInit() {
    this.myform = new FormGroup({
      'name': new FormControl('', [Validators.required,  Validators.minLength(3)]),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'address': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))')]),
      'checkbox': new FormControl('', Validators.required)
    });

    this.orderFromLocalStorage();
  }

  onSubmit() {
    console.log("Form Submitted!");
    // const headers = new HttpHeaders()
    //     .set('Authorization', 'my-auth-token')
    //     .set('Content-Type', 'application/json');
    //
    // this.http.post('http://127.0.0.1:3000/order', JSON.stringify(this.product), {
    //   headers: headers
    // })
    //     .subscribe(data => {
    //       console.log('form data: ', data);
    //     });
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0)
        ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  orderFromLocalStorage() {
    let prod = JSON.parse(localStorage.getItem('product'));
    this.product = prod;
  }

  removeFromLocalStorage() {
      localStorage.clear();
      this.router.navigate(['/home']);
  }

}
