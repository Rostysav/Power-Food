import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pf-lower-1000',
  templateUrl: './lower-1000.component.html',
  styleUrls: ['./lower-1000.component.scss']
})
export class Lower1000Component implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit() {
    this.selectedValue = '500';
  }

  daysControl = new FormControl('', [Validators.required]);

  days = [
    { number: '2 дн', price: '500' },
    // { number: '4 дн', price: '980' },
    // { number: '6 дн', price: '1440' },
    // { number: '12 дн', price: '2760' },
    // { number: '24 дн', price: '5280' }
  ];

  onSelected(data) {}

  orderProduct() {
    let myArray =  [
        { id: 1000,
          name:"Зниження - 1000 ккал",
          price: this.selectedValue,
          imageUrl: "../../../assets/img/lover-1000.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  products: IProduct[] = [
    {
      'id': 1000,
      'name': 'Зниження - 1000 ккал',
      'description': "Вміст оптимального рівня білків, жирів та вуглеводів для ефективного зниження ваги. В раціоні передбачено 4 прийоми їжі на день.",
      'price': 1200,
      'dayPrice': 250,
      'imageUrl': '../../../assets/img/lover-1000.jpg'
    }
  ];

}
