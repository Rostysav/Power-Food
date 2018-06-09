import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-lower-1000',
  templateUrl: './lower-1000.component.html',
  styleUrls: ['./lower-1000.component.scss']
})
export class Lower1000Component implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit() {
    this.selectedValue = '400';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    { number: '2 дні', price: '400' },
    { number: '6 днів', price: '1200' },
    { number: '14 днів', price: '2800' },
    { number: '24 дні', price: '4800' },
    { number: '30 днів', price: '6000' }
  ];

  onSelected(data) {}

  orderProduct() {
    let myArray =  [
        { id: 1000,
          name:"Зниження - 1000ккал",
          price: this.selectedValue,
          imageUrl: "../../../assets/img/lover-1000.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 1000,
      'name': 'Зниження - 1000ккал',
      'description': 'Вміст оптимального рівня білків, жирів та вуглеводів, що допоможуть позбутися зайвої ваги без втрати мязевоі маси.' +
      ' Раціон - 1000 ккал.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/lover-1000.jpg'
    }
  ];

}
