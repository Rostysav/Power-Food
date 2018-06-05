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
          imageUrl: "../../../assets/img/lover-1000.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 1000,
      'name': 'Зниження - 1000ккал',
      'description': 'Вміст оптимального рівня білків, жирів та вуглеводів, що допоможуть позбутися зайвої ваги без втрати мязевоі маси.' +
      ' Раціон - 1000 ккал.',
      'price': 1201,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/lover-1000.jpg'
    }
  ];

}
