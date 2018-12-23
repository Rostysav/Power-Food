import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-balance-2000-descr',
  templateUrl: './balance-2000-descr.component.html',
  styleUrls: ['./balance-2000-descr.component.scss']
})
export class Balance2000DescrComponent implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit() {
    this.selectedValue = '700';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    {number: '2 дн', price: '700'}
    // {number: '4 дн', price: '1380'},
    // {number: '6 дн', price: '2040'},
    // {number: '14 дн', price: '3960'},
    // {number: '24 дн', price: '7680'}
  ];

  onSelected(data) {}

  products: IProduct[] = [
    {
      'id': 2000,
      'name': 'Баланс - 2000 ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 1000 ккал.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/lover-1500.jpg'
    }
  ];

  orderProduct() {
    let myArray =  [
      { id: 2000,
        name:"Баланс - 2000 ккал",
        price: this.selectedValue,
        imageUrl: "../../../assets/img/lover-1500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

}
