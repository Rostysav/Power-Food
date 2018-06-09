import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-lower-1500',
  templateUrl: './lower-1500.component.html',
  styleUrls: ['./lower-1500.component.scss']
})
export class Lower1500Component implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit() {
    this.selectedValue = '400';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дні', price: '400'},
    {number: '6 днів', price: '1200'},
    {number: '14 днів', price: '2800'},
    {number: '24 дні', price: '4800'},
    {number: '30 днів', price: '6000'}
  ];

  onSelected(data) {
  }

  orderProduct() {
    let myArray =  [
      { id: 1500,
        name:"Зниження - 1500ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/lover-1500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
      {
        'id': 1500,
        'name': 'Зниження - 1500ккал',
        'description': 'Добова калорійність в розмірі 1500 ккал. Страви, що не містять цукру. Програма дозволить зберегти мязеву масу за рахунок правильного співвідношення кількості білків, жирів та вуглеводів.',
        'price': 1200,
        'dayPrice': 200,
        'imageUrl': '../../../assets/img/lover-1500.jpg'
      }
  ];

}
