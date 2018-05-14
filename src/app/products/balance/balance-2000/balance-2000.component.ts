import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-balance-2000',
  templateUrl: './balance-2000.component.html',
  styleUrls: ['./balance-2000.component.scss']
})
export class Balance2000Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
      { id: 2000,
        name:"Баланс - 2000ккал",
        price: 1203,
        imageUrl: "https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 2000,
      'name': 'Баланс - 2000ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 2000 ккал.',
      'price': 1203,
      'dayPrice': 200,
      'imageUrl': 'https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg'
    }
  ];

}
