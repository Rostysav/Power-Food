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
    let currentMinutes = new Date().getMinutes();
    if ((currentTime >= 21 || (currentTime >= 21 && currentMinutes >= 45)) || currentTime <= 8) {
      this.toastService.showToast(
        'warning',
        `Вибачте, зараз доставка не працює! Ви можете замовити продукти, менеджер зв'яжеться з вами в робочий час!`,
        5000000);
    }
  }
}
