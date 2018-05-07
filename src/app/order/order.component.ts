import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'pf-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  midnameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  mobileFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);

  addressFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))")
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

}
