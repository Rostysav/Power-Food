import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-set-2500-descr',
  templateUrl: './set-2500-descr.component.html',
  styleUrls: ['./set-2500-descr.component.scss']
})
export class Set2500DescrComponent implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit() {
    this.selectedValue = '800';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дн', price: '800'},
    {number: '4 дн', price: '1580'},
    {number: '6 дн', price: '2340'},
    {number: '14 дн', price: '4560'},
    {number: '24 дн', price: '8880'}
  ];

  onSelected(data) {}

  products: IProduct[] = [
    {
      'id': 2500,
      'name': 'Набір - 2500 ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 1000 ккал.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/set-2500.jpg'
    }
  ];

  orderProduct() {
    let myArray =  [
      { id: 2500,
        name:"Набір - 2500 ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/set-2500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

}
