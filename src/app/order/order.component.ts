import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from '../products/product';
import {Router} from "@angular/router";

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'pf-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {

  product: IProduct[];

  myform: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.myform = new FormGroup({
      'name': new FormControl('', [Validators.required,  Validators.minLength(3)]),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'address': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))')])
    });

    this.orderFromLocalStorage();
  }


  onSubmit() {
    console.log("Form Submitted!");
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0)
        ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  orderFromLocalStorage() {
    let prod = JSON.parse(localStorage.getItem('product'));
    console.log('cache: ', prod);

    this.product = prod;
  }

  removeFromLocalStorage() {
      console.log('removed!');
      localStorage.clear();
      this.router.navigate(['/home']);
  }

}
