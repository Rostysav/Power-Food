import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  catalog = [
    {
      'title': 'каталог програм',
      'description': 'Ми пропонуємо 3 програми харчування в залежності від поставлених цілей: зниження, ' +
      'підтримка та набір ваги. В рамках кожної з програм передбачено вибір калорійності.',
      'mobile': ''
    }
  ];

  state = [
    {
      'id': 1,
      'name': 'Зниження',
      'description': 'Програма підійде тим, хто ставить перед собою мету позбутися від зайвих кілограмів. ' +
      'Процес зниження ваги пройде плавно і дозволить зберегти м\'язову масу за рахунок правильного' +
      ' співвідношення КБЖУ. Особливість цієї програми - високий вміст білків з підтриманням' +
      ' оптимального рівня жирів і повільних (низькоглікемічних) вуглеводів. Страви не містять цукру. ' +
      'На вибір два раціони - 1000 і 1500 ккал.',
      'price': '501',
      'image': 'https://cdn0.pokupon.ua/uploaded/new_campaign_pictures/452271/data/preview475x230/5.jpg?1518908201'
    },
    {
      'id': 2,
      'name': 'Баланс',
      'description': 'Програма підійде тим, хто ставить перед собою мету позбутися від зайвих кілограмів. ' +
      'Процес зниження ваги пройде плавно і дозволить зберегти м\'язову масу за рахунок правильного' +
      ' співвідношення КБЖУ. Особливість цієї програми - високий вміст білків з підтриманням' +
      ' оптимального рівня жирів і повільних (низькоглікемічних) вуглеводів. Страви не містять цукру. ',
      'price': '502',
      'image': 'https://cdn0.pokupon.ua/uploaded/new_campaign_pictures/452271/data/preview475x230/5.jpg?1518908201'
    },
    {
      'id': 3,
      'name': 'Набір',
      'description': 'Програма підійде тим, хто ставить перед собою мету позбутися від зайвих кілограмів. ' +
      'Процес зниження ваги пройде плавно і дозволить зберегти м\'язову масу за рахунок правильного' +
      ' співвідношення КБЖУ. Особливість цієї програми - високий вміст білків з підтриманням' +
      ' оптимального рівня жирів і повільних (низькоглікемічних) вуглеводів. Страви не містять цукру. ' +
      'На вибір два раціони - 2500 і 3500 ккал.',
      'price': '503',
      'image': 'https://cdn0.pokupon.ua/uploaded/new_campaign_pictures/452271/data/preview475x230/5.jpg?1518908201'
    }
  ];

}
