import { Component, OnInit } from '@angular/core';
import { IRestaurant } from "../../restaurant";
import { ToastService } from "../../../service/toastr.service";

@Component({
  selector: 'pf-turkey-burger',
  templateUrl: './turkey-burger.component.html',
  styleUrls: ['./turkey-burger.component.scss']
})
export class TurkeyBurgerComponent implements OnInit {

  buttonText = 'Замовити';
  // buttonGreenText = 'В кошик';

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {
    // this.buttonText;
  }

  restaurants: IRestaurant[] = [
    {
      'id': 2,
      'name': 'Бургер з індичкою - 340гр',
      'description': 'Рівномірне співвідношення білків і вуглеводів та оптимальна кількість жирів сприяють підтримці комфортної ваги. Продуманий раціон дозволяє отримати близько 2000 ккал на добу.',
      'price': 1200,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/balance-2000.jpg'
    }
  ];

  orderProduct() {
    let myArray =  [
      { id: 2,
        name:"Бургер з індичкою - 340гр",
        price: 'test.price',
        imageUrl: "../../../../assets/img/restourant/burgers/turkey-burger.jpg"}
    ];
    localStorage.setItem('restaurant', JSON.stringify(myArray));
  }

}
