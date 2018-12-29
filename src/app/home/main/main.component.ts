import {Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ToastService } from "../../service/toastr.service";

@Component({
  selector: 'pf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    setTimeout(() => {
      this.checkIfWorkingHours();
    }, 0)
  }

  checkIfWorkingHours() {
    let currentTime = new Date().getHours();
    if (currentTime >= 22 || currentTime <= 10) {
      this.toastService.showToast(
        'warning',
        `Вибачте, зараз доставка не працює! Ви можете зробити Ваше замовлення, менеджер зв’яжеться з Вами у робочі години`,
        500000000);
    }
  }
}
