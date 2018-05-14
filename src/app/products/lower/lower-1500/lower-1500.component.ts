import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-lower-1500',
  templateUrl: './lower-1500.component.html',
  styleUrls: ['./lower-1500.component.scss']
})
export class Lower1500Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
      { id: 1500,
        name:"Зниження - 1500ккал",
        price: 1202,
        imageUrl: "https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
      {
        'id': 1500,
        'name': 'Зниження - 1500ккал',
        'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
        ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
        ' Раціон - 1500 ккал.',
        'price': 1202,
        'dayPrice': 201,
        'imageUrl': 'https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg',
      }
  ];

}
