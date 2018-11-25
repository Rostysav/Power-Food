import { Component, OnChanges, OnInit } from '@angular/core';
import { IRestaurant } from "../../restaurant";
import {ToastService} from "../../../service/toastr.service";

@Component({
  selector: 'pf-green-burger',
  templateUrl: './green-burger.component.html',
  styleUrls: ['./green-burger.component.scss']
})
export class GreenBurgerComponent implements OnInit, OnChanges {
  buttonText = 'Замовити';
  // buttonGreenText = 'В кошик';

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    // this.buttonText;
  }

  restaurants: IRestaurant[] = [
    {
      'id': 1,
      'name': 'Green бургер - 340гр',
      'description': 'Рівномірне співвідношення білків і вуглеводів та оптимальна кількість жирів сприяють підтримці комфортної ваги. Продуманий раціон дозволяє отримати близько 2000 ккал на добу.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/balance-2000.jpg'
    }
  ];

  orderProduct() {
    let myArray =  [
      { id: 1,
        name:"Green бургер - 340гр",
        price: 'test.price',
        imageUrl: "../../../../assets/img/restourant/burgers/green-burger.jpg"}
    ];
    localStorage.setItem('restaurant', JSON.stringify(myArray));
  }

}
