import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-set-2500',
  templateUrl: './set-2500.component.html',
  styleUrls: ['./set-2500.component.scss']
})
export class Set2500Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
      { id: 2500,
        name:"Набір - 2500ккал",
        price: 1204,
        imageUrl: "https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 2500,
      'name': 'Набір - 2500ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 2500 ккал.',
      'price': 1204,
      'dayPrice': 201,
      'imageUrl': 'https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg'
    }
  ];

}
