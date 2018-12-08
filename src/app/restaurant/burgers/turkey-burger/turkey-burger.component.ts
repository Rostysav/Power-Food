import { Component, OnInit } from '@angular/core';
import { IRestaurant } from "../../restaurant";
import { ToastService } from "../../../service/toastr.service";
import { Router } from "@angular/router";

@Component({
  selector: 'pf-turkey-burger',
  templateUrl: './turkey-burger.component.html',
  styleUrls: ['./turkey-burger.component.scss']
})
export class TurkeyBurgerComponent implements OnInit {
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
      'id': 2,
      'name': 'Бургер з індичкою - 340гр',
      'description': 'Рівномірне співвідношення білків і вуглеводів та оптимальна кількість жирів сприяють підтримці комфортної ваги. Продуманий раціон дозволяє отримати близько 2000 ккал на добу.',
      'price': 124,
      'imageUrl': '../../../../assets/img/restourant/burgers/turkey-burger.jpg'
    }
  ];

  orderProduct() {
    let myArray =
      { id: 2,
        name:"Бургер з індичкою - 340гр",
        price: this.item*124 || 124,
        pieces: (this.item*124 || 124)/124,
        imageUrl: "../../../../assets/img/restourant/burgers/turkey-burger.jpg"
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
