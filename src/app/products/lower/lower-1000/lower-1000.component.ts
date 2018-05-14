import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-lower-1000',
  templateUrl: './lower-1000.component.html',
  styleUrls: ['./lower-1000.component.scss']
})
export class Lower1000Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderProduct() {
    let myArray =  [
        { id: 1000,
          name:"Зниження - 1000ккал",
          price: 1201,
          imageUrl: "https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 1000,
      'name': 'Зниження - 1000ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 1000 ккал.',
      'price': 1201,
      'dayPrice': 200,
      'imageUrl': 'https://levelkitchen.com/upload/iblock/e6c/e6c770196583e33b3826801628f61bce.jpg'
    }
  ];

}
