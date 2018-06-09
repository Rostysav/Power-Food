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

  onSelected(data) {}

  products: IProduct[] = [
    {
      'id': 2500,
      'name': 'Набір - 2500ккал',
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
        name:"Набір - 2500ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/set-2500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

}
