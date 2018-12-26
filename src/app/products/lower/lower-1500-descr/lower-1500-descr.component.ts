import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-lower-1500-descr',
  templateUrl: './lower-1500-descr.component.html',
  styleUrls: ['./lower-1500-descr.component.scss']
})
export class Lower1500DescrComponent implements OnInit {
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

  products: IProduct[] = [
    {
      'id': 1500,
      'name': 'Зниження - 1500 ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 1000 ккал.',
      'price': 600,
      'dayPrice': 300,
      'imageUrl': '../../../assets/img/lover-1500.jpg'
    }
  ];

  orderProduct() {
    let myArray =  [
      { id: 1500,
        name:"Зниження - 1500 ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/lover-1500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

}