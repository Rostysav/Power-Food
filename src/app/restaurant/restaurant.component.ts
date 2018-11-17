import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pf-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantComponent implements OnInit {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: '../assets/img/restourant/restourant1.jpg' },
      { name: '../assets/img/restourant/restourant2.jpg' },
      { name: '../assets/img/restourant/restourant3.jpg' },
      { name: '../assets/img/restourant/restourant4.jpg' },
    ]
  }

  ngOnInit() {
  }

}
