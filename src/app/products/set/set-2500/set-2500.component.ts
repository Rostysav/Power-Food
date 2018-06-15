import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-set-2500',
  templateUrl: './set-2500.component.html',
  styleUrls: ['./set-2500.component.scss']
})
export class Set2500Component implements OnInit {
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

  onSelected(data) {}

  orderProduct() {
    let myArray =  [
      { id: 2500,
        name:"Набір - 2500ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/set-2500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 2500,
      'name': 'Набір - 2500ккал',
      'description': "Баланс швидких та повільних білків, жирів та вуглеводів та постійний контроль кількості білків,жирів вуглеводів сприятливо впливають на набір м'язевої маси. Меню розраховано на отримання 2500 ккал на день",
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/set-2500.jpg'
    }
  ];

}
