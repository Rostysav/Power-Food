import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-set-3500',
  templateUrl: './set-3500.component.html',
  styleUrls: ['./set-3500.component.scss']
})
export class Set3500Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
      { id: 3500,
        name:"Набір - 3500ккал",
        price: 1205,
        imageUrl: "https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 3500,
      'name': 'Набір - 3500ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 3500 ккал.',
      'price': 1205,
      'dayPrice': 202,
      'imageUrl': 'https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg'
    }
  ];

}
