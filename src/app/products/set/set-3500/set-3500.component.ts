import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-set-3500',
  templateUrl: './set-3500.component.html',
  styleUrls: ['./set-3500.component.scss']
})
export class Set3500Component implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit() {
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дні', price: '400'},
    {number: '6 днів', price: '1200'},
    {number: '14 днів', price: '2800'},
    {number: '24 дні', price: '4800'},
    {number: '30 днів', price: '6000'}
  ];

  onSelected(data) {}

  orderProduct() {
    let myArray =  [
      { id: 3500,
        name:"Набір - 3500ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/set-3500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 3500,
      'name': 'Набір - 3500ккал',
      'description': 'Якісне співвідноження білків,жирів і вуглеводів дозволяє ефективно набрати мязеву масу тіла.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/set-3500.jpg'
    }
  ];

}
