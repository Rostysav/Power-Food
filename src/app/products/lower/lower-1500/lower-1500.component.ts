import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-lower-1500',
  templateUrl: './lower-1500.component.html',
  styleUrls: ['./lower-1500.component.scss']
})
export class Lower1500Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
      { id: 1500,
        name:"Зниження - 1500ккал",
        price: 1202,
        imageUrl: "../../../assets/img/lover-1500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
      {
        'id': 1500,
        'name': 'Зниження - 1500ккал',
        'description': 'Добова калорійність в розмірі 1500 ккал. Страви, що не містять цукру. Програма дозволить зберегти мязеву масу за рахунок правильного співвідношення кількості білків, жирів та вуглеводів.',
        'price': 1202,
        'dayPrice': 201,
        'imageUrl': '../../../assets/img/lover-1500.jpg'
      }
  ];

}
