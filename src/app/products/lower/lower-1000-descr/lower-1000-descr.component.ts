import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-lower-1000-descr',
  templateUrl: './lower-1000-descr.component.html',
  styleUrls: ['./lower-1000-descr.component.scss']
})
export class Lower1000DescrComponent implements OnInit {
  selectedValue: string;

  constructor() {
  }

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

  products: IProduct[] = [
    {
      'id': 1000,
      'name': 'Зниження - 1000 ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 1000 ккал.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/lover-1000.jpg',
      'daysNumber': 2
    }
  ];

  orderProduct() {
    let myArray = [
      {
        id: 1000,
        name: "Зниження - 1000 ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/lover-1000.jpg"
      }
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

}