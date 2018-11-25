import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toast = new Subject<object>();
  toast$ = this.toast.asObservable();

  constructor() {}

  show(toast: {type: string, msg: string, timeOut?: any}): void {
    this.toast.next(toast);
  }

  showToast(type: string, msg: string, timeOut: number = 3000): void {
    this.show({
      type: type,
      msg: msg,
      timeOut: timeOut
    });
  }
}
