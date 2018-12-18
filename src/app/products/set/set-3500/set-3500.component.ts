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
    this.selectedValue = '900';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дн', price: '900'},
    {number: '4 дн', price: '1780'},
    {number: '6 дн', price: '2640'},
    {number: '14 дн', price: '5160'},
    {number: '24 дн', price: '10080'}
  ];

  onSelected(data) {}

  orderProduct() {
    let myArray =  [
      { id: 3500,
        name:"Набір - 3500 ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/set-3500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 3500,
      'name': 'Набір - 3500 ккал',
      'description': "Якісне співвідношення білків, жирів та вуглеводів, низький вміст швидких вуглеводів і широкий вміст довгих вуглеводів. Програма містить в собі 6 прийомів їжі.",
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/set-3500.jpg'
    }
  ];

}
