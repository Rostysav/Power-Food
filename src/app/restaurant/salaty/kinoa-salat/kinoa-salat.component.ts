import { Component, OnChanges, OnInit } from '@angular/core';
import { IRestaurant } from "../../restaurant";
import {ToastService} from "../../../service/toastr.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kinoa-salat',
  templateUrl: './kinoa-salat.component.html',
  styleUrls: ['./kinoa-salat.component.scss']
})
export class KinoaSalatComponent implements OnInit, OnChanges {
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
  ngOnChanges() {
    // this.buttonText;
  }

  restaurants: IRestaurant[] = [
    {
      'id': 7,
      'name': 'Салат з кіноа - 230 г',
      'description': 'Рівномірне співвідношення білків і вуглеводів та оптимальна кількість жирів сприяють підтримці комфортної ваги. Продуманий раціон дозволяє отримати близько 2000 ккал на добу.',
      'price': 78,
      'imageUrl': '../../../../assets/img/restourant/salaty/kinoa-salat.jpg'
    }
  ];

  orderProduct() {
    let myArray =
      { id: 1,
        name:"Салат з кіноа - 230 г",
        price: this.item*78 || 78,
        pieces: (this.item*78 || 78)/78,
        imageUrl: "../../../../assets/img/restourant/salaty/kinoa-salat.jpg"
      };
    let get_item = [];
    let data = localStorage.getItem('restaurant');
    get_item = JSON.parse(data) || [];
    if (get_item.length === 0) {
      localStorage.setItem('restaurant', JSON.stringify([myArray]));
      this.toastService.showToast(
        'success',
        `Замовлення на ${myArray.name} кількістю ${myArray.pieces} шт. додано!`,
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
        `Замовлення на ${myArray.name} кількістю ${myArray.pieces} шт. додано!`,
        3000);
      this.makeOrder = true;
    }
  }

  continue() {
    this.router.navigate(['/restaurant']);
    document.getElementById('continue').style.display = 'none';
  }
}
