import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-balance-2000',
  templateUrl: './balance-2000.component.html',
  styleUrls: ['./balance-2000.component.scss']
})
export class Balance2000Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
      { id: 2000,
        name:"Баланс - 2000ккал",
        price: 1203,
        imageUrl: "../../../assets/img/balance-2000.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 2000,
      'name': 'Баланс - 2000ккал',
      'description': 'Рівномірне співвідношення білків і вуглеводів та оптимальна кількість жирів сприяють підтримці комфортної ваги. Продуманий раціон дозволяє отримати близько 2000 ккал на добу.',
      'price': 1203,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/balance-2000.jpg'
    }
  ];

}
