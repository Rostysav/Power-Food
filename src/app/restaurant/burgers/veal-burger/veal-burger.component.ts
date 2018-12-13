import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ToastService} from "../../../service/toastr.service";
import {Router} from "@angular/router";
import {IRestaurant} from "../../restaurant";

@Component({
  selector: 'pf-veal-burger',
  templateUrl: './veal-burger.component.html',
  styleUrls: ['./veal-burger.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VealBurgerComponent implements OnInit {
  buttonText = 'Замовити';
  orderText = 'В корзину';
  continueText = 'Продовжити';
  makeOrder = false;
  item;

  constructor(
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  restaurants: IRestaurant[] = [
    {
      'id': 3,
      'name': 'Бургер з телятиною - 350гр',
      'description': 'Рівномірне співвідношення білків і вуглеводів та оптимальна кількість жирів сприяють підтримці комфортної ваги. Продуманий раціон дозволяє отримати близько 2000 ккал на добу.',
      'price': 146,
      'imageUrl': '../../../../assets/img/restourant/burgers/veal-burger.jpg'
    }
  ];

  orderProduct() {
    let myArray =
      { id: 2,
        name:"Бургер з індичкою - 340гр",
        price: this.item*146 || 146,
        pieces: (this.item*146 || 146)/146,
        imageUrl: "../../../../assets/img/restourant/burgers/veal-burger.jpg"
      };
    let get_item = [];
    let data = localStorage.getItem('restaurant');
    get_item = JSON.parse(data) || [];
    if (get_item.length === 0) {
      localStorage.setItem('restaurant', JSON.stringify([myArray]));
      this.toastService.showToast(
        'success',
        `Замовлення на ${myArray.name} кількістю ${myArray.pieces} одиниць додано!`,
        3000);
      this.makeOrder = true;
    }
    else {
      // array.push();
      get_item.push(myArray);
      // let clientsArr =  JSON.parse(localStorage.getItem('users')) || [];
      // clientsArr.push(clientObj);
      localStorage.setItem('restaurant', JSON.stringify(get_item));
      this.toastService.showToast(
        'success',
        `Замовлення на ${myArray.name} кількістю ${myArray.pieces} одиниць додано!`,
        3000);
      this.makeOrder = true;
    }
  }

  continue() {
    this.router.navigate(['/restaurant']);
    document.getElementById('continue').style.display = 'none';
  }
}
