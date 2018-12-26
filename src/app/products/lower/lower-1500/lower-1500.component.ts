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
    this.selectedValue = '600';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дн', price: '600'},
    // {number: '4 дн', price: '1180'},
    // {number: '6 дн', price: '1740'},
    // {number: '12 дн', price: '3360'},
    // {number: '24 дн', price: '6480'}
  ];

  onSelected(data) {
  }

  orderProduct() {
    let myArray =  [
      { id: 1500,
        name:"Зниження - 1500 ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/lover-1500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
      {
        'id': 1500,
        'name': 'Зниження - 1500 ккал',
        'description': "Програма для тих, хто хоче схуднути за допомогою правильного харчування і регулярних тренувань. Вона розрахована на 5 прийомів їжі на день.",
        'price': 1200,
        'dayPrice': 300,
        'imageUrl': '../../../assets/img/lover-1500.jpg'
      }
  ];

}
