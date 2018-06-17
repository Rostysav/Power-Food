import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-balance-2000',
  templateUrl: './balance-2000.component.html',
  styleUrls: ['./balance-2000.component.scss']
})
export class Balance2000Component implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit() {
    this.selectedValue = '400';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дн', price: '400'},
    {number: '6 дн', price: '1200'},
    {number: '14 дн', price: '2800'},
    {number: '24 дн', price: '4800'},
    {number: '30 дн', price: '6000'}
  ];

  onSelected(data) {
  }

  orderProduct() {
    let myArray =  [
      { id: 2000,
        name:"Баланс - 2000ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/balance-2000.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 2000,
      'name': 'Баланс - 2000ккал',
      'description': 'Рівномірне співвідношення білків і вуглеводів та оптимальна кількість жирів сприяють підтримці комфортної ваги. Продуманий раціон дозволяє отримати близько 2000 ккал на добу.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/balance-2000.jpg'
    }
  ];

}
