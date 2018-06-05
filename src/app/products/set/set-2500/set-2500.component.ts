import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-set-2500',
  templateUrl: './set-2500.component.html',
  styleUrls: ['./set-2500.component.scss']
})
export class Set2500Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
      { id: 2500,
        name:"Набір - 2500ккал",
        price: 1204,
        imageUrl: "../../../assets/img/set-2500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 2500,
      'name': 'Набір - 2500ккал',
      'description': 'Баланс шкидких та повільних вуглеводів та постійний контроль кількості білків,жирів вуглеводів сприятливо впливають на набір мязевої маси.Меню розраховано на отримання 2500 ккал в день',
      'price': 1204,
      'dayPrice': 201,
      'imageUrl': '../../../assets/img/set-2500.jpg'
    }
  ];

}
