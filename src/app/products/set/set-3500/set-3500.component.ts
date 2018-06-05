import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-set-3500',
  templateUrl: './set-3500.component.html',
  styleUrls: ['./set-3500.component.scss']
})
export class Set3500Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
      { id: 3500,
        name:"Набір - 3500ккал",
        price: 1205,
        imageUrl: "../../../assets/img/set-3500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 3500,
      'name': 'Набір - 3500ккал',
      'description': 'Якісне співвідноження білків,жирів і вуглеводів дозволяє ефективно набрати мязеву масу тіла.',
      'price': 1205,
      'dayPrice': 202,
      'imageUrl': '../../../assets/img/set-3500.jpg'
    }
  ];

}
