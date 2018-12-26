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
    this.selectedValue = '800';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дн', price: '800'},
    // {number: '4 дн', price: '1580'},
    // {number: '6 дн', price: '2340'},
    // {number: '14 дн', price: '4560'},
    // {number: '24 дн', price: '8880'}
  ];

  onSelected(data) {}

  orderProduct() {
    let myArray =  [
      { id: 2500,
        name:"Набір - 2500 ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/set-2500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 2500,
      'name': 'Набір - 2500 ккал',
      'description': "Швидкі і повільні вуглеводи в поєднанні з оптимальними значеннями білків і жирів необхідними для набору м'язевої маси. Раціон розрахований на 6 прийомів їжі.",
      'price': 800,
      'dayPrice': 400,
      'imageUrl': '../../../assets/img/set-2500.jpg'
    }
  ];

}
