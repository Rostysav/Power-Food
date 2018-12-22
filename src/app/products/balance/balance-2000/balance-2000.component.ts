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
    this.selectedValue = '700';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дн', price: '700'},
    {number: '4 дн', price: '1380'},
    {number: '6 дн', price: '2040'},
    {number: '14 дн', price: '3960'},
    {number: '24 дн', price: '7680'}
  ];

  onSelected(data) {
  }

  orderProduct() {
    let myArray =  [
      { id: 2000,
        name:"Баланс - 2000 ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/balance-2000.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 2000,
      'name': 'Баланс - 2000 ккал',
      'description': 'Програма для людей, які хочуть правильно харчуватись. У раціоні 5 прийомів їжі на день.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/balance-2000.jpg'
    }
  ];

}
