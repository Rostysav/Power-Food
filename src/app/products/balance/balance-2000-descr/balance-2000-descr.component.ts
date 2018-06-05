import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';

@Component({
  selector: 'pf-balance-2000-descr',
  templateUrl: './balance-2000-descr.component.html',
  styleUrls: ['./balance-2000-descr.component.scss']
})
export class Balance2000DescrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products: IProduct[] = [
    {
      'id': 2000,
      'name': 'Баланс - 2000ккал',
      'description': 'Високий вміст білків з підтриманням оптимального рівня жирів і повільних вуглеводів' +
      ' допоможе позбутися від зайвих кілограмів без втрати м\'язової маси.' +
      ' Раціон - 1000 ккал.',
      'price': 1203,
      'dayPrice': 200,
      'imageUrl': '../../../assets/img/lover-1500.jpg'
    }
  ];

  orderProduct() {
    let myArray =  [
      { id: 2000,
        name:"Баланс - 2000ккал",
        price: 1203,
        imageUrl: "../../../assets/img/lover-1500.jpg"}
    ];
    localStorage.setItem('product', JSON.stringify(myArray));
  }

  // week = [
  //   {
  //     'day': 'Понеділок',
  //     'first': 1,
  //     'image1': '../../../../assets/img/icons/restaurant.png',
  //     'description1': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi, in numquam ' +
  //     'ab vero dolore hic reiciendis adipisci? Vel, veniam est! Blanditiis cumque aspernatur pariatur magni' +
  //     ' ducimus ad minus tempora!',
  //     'span1': '222',
  //     'span2': '10',
  //     'span3': '10',
  //     'span4': '51',
  //     'second': 2,
  //     'image2': '../../../../assets/img/icons/restaurant.png',
  //     'description2': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi, in numquam ' +
  //     'ab vero dolore hic reiciendis adipisci? Vel, veniam est! Blanditiis cumque aspernatur pariatur magni' +
  //     ' ducimus ad minus tempora!',
  //     'span5': '334',
  //     'span6': '10',
  //     'span7': '10',
  //     'span8': '51',
  //     'third': 3,
  //     'image3': '../../../../assets/img/icons/restaurant.png',
  //     'description3': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi, in numquam ' +
  //     'ab vero dolore hic reiciendis adipisci? Vel, veniam est! Blanditiis cumque aspernatur pariatur magni' +
  //     ' ducimus ad minus tempora!',
  //     'span9': '334',
  //     'span10': '10',
  //     'span11': '10',
  //     'span12': '51',
  //     'fourth': 4,
  //     'image4': '../../../../assets/img/icons/restaurant.png',
  //     'description4': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi, in numquam ' +
  //     'ab vero dolore hic reiciendis adipisci? Vel, veniam est! Blanditiis cumque aspernatur pariatur magni' +
  //     ' ducimus ad minus tempora!',
  //     'span13': '334',
  //     'span14': '10',
  //     'span15': '10',
  //     'span16': '51'
  //   },
  //   {
  //     'day': 'Вівторок',
  //     'first': 1,
  //     'image1': '../../../../assets/img/icons/restaurant.png',
  //     'description1': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur, delectus,' +
  //     ' dolores, earum ex expedita itaque nesciunt placeat porro quam quisquam quo repellat suscipit' +
  //     ' unde?',
  //     'span1': '354',
  //     'span2': '11',
  //     'span3': '11',
  //     'span4': '52',
  //     'second': 2,
  //     'image2': '../../../../assets/img/icons/restaurant.png',
  //     'description2': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur, delectus,' +
  //     ' dolores, earum ex expedita itaque nesciunt placeat porro quam quisquam quo repellat suscipit' +
  //     ' unde?',
  //     'span5': '434',
  //     'span6': '10',
  //     'span7': '10',
  //     'span8': '41',
  //     'third': 3,
  //     'image3': '../../../../assets/img/icons/restaurant.png',
  //     'description3': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi, in numquam ' +
  //     'ab vero dolore hic reiciendis adipisci? Vel, veniam est! Blanditiis cumque aspernatur pariatur magni' +
  //     ' ducimus ad minus tempora!',
  //     'span9': '334',
  //     'span10': '10',
  //     'span11': '10',
  //     'span12': '51',
  //     'fourth': 4,
  //     'image4': '../../../../assets/img/icons/restaurant.png',
  //     'description4': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi, in numquam ' +
  //     'ab vero dolore hic reiciendis adipisci? Vel, veniam est! Blanditiis cumque aspernatur pariatur magni' +
  //     ' ducimus ad minus tempora!',
  //     'span13': '334',
  //     'span14': '10',
  //     'span15': '12',
  //     'span16': '53'
  //   },
  //   {
  //     'day': 'Середа',
  //     'first': 1,
  //     'image1': '../../../../assets/img/icons/restaurant.png',
  //     'description1': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, corporis impedit?' +
  //     ' Aperiam assumenda at debitis deserunt dolor doloremque ipsum non placeat rerum sed totam, vero' +
  //     ' vitae voluptatem voluptatibus.',
  //     'span1': '354',
  //     'span2': '11',
  //     'span3': '11',
  //     'span4': '52',
  //     'second': 2,
  //     'image2': '../../../../assets/img/icons/restaurant.png',
  //     'description2': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, corporis impedit?' +
  //     ' Aperiam assumenda at debitis deserunt dolor doloremque ipsum non placeat rerum sed totam, vero' +
  //     ' vitae voluptatem voluptatibus.',
  //     'span5': '434',
  //     'span6': '10',
  //     'span7': '10',
  //     'span8': '41',
  //     'third': 3,
  //     'image3': '../../../../assets/img/icons/restaurant.png',
  //     'description3': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, corporis impedit?' +
  //     ' Aperiam assumenda at debitis deserunt dolor doloremque ipsum non placeat rerum sed totam, vero' +
  //     ' vitae voluptatem voluptatibus.',
  //     'span9': '334',
  //     'span10': '10',
  //     'span11': '10',
  //     'span12': '51',
  //     'fourth': 4,
  //     'image4': '../../../../assets/img/icons/restaurant.png',
  //     'description4': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, corporis impedit?' +
  //     ' Aperiam assumenda at debitis deserunt dolor doloremque ipsum non placeat rerum sed totam, vero' +
  //     ' vitae voluptatem voluptatibus.',
  //     'span13': '334',
  //     'span14': '10',
  //     'span15': '12',
  //     'span16': '53'
  //   },
  //   {
  //     'day': 'Четвер',
  //     'first': 1,
  //     'image1': '../../../../assets/img/icons/restaurant.png',
  //     'description1': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis eligendi' +
  //     ' facere fuga in incidunt ipsum iste necessitatibus nemo praesentium, repellendus sapiente suscipit ut!',
  //     'span1': '354',
  //     'span2': '11',
  //     'span3': '11',
  //     'span4': '52',
  //     'second': 2,
  //     'image2': '../../../../assets/img/icons/restaurant.png',
  //     'description2': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis eligendi' +
  //     ' facere fuga in incidunt ipsum iste necessitatibus nemo praesentium, repellendus sapiente suscipit ut!',
  //     'span5': '434',
  //     'span6': '10',
  //     'span7': '10',
  //     'span8': '41',
  //     'third': 3,
  //     'image3': '../../../../assets/img/icons/restaurant.png',
  //     'description3': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis eligendi' +
  //     ' facere fuga in incidunt ipsum iste necessitatibus nemo praesentium, repellendus sapiente suscipit ut!',
  //     'span9': '334',
  //     'span10': '10',
  //     'span11': '10',
  //     'span12': '51',
  //     'fourth': 4,
  //     'image4': '../../../../assets/img/icons/restaurant.png',
  //     'description4': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis eligendi' +
  //     ' facere fuga in incidunt ipsum iste necessitatibus nemo praesentium, repellendus sapiente suscipit ut!',
  //     'span13': '334',
  //     'span14': '10',
  //     'span15': '12',
  //     'span16': '53'
  //   },
  //   {
  //     'day': 'Пятниця',
  //     'first': 1,
  //     'image1': '../../../../assets/img/icons/restaurant.png',
  //     'description1': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum cupiditate ' +
  //     'deserunt dolores dolorum eaque exercitationem minus modi, natus nobis quae quaerat quibusdam veritatis,' +
  //     ' vitae voluptate voluptatum!',
  //     'span1': '354',
  //     'span2': '11',
  //     'span3': '11',
  //     'span4': '52',
  //     'second': 2,
  //     'image2': '../../../../assets/img/icons/restaurant.png',
  //     'description2': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum cupiditate ' +
  //     'deserunt dolores dolorum eaque exercitationem minus modi, natus nobis quae quaerat quibusdam veritatis,' +
  //     ' vitae voluptate voluptatum!',
  //     'span5': '434',
  //     'span6': '10',
  //     'span7': '10',
  //     'span8': '41',
  //     'third': 3,
  //     'image3': '../../../../assets/img/icons/restaurant.png',
  //     'description3': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum cupiditate ' +
  //     'deserunt dolores dolorum eaque exercitationem minus modi, natus nobis quae quaerat quibusdam veritatis,' +
  //     ' vitae voluptate voluptatum!',
  //     'span9': '334',
  //     'span10': '10',
  //     'span11': '10',
  //     'span12': '51',
  //     'fourth': 4,
  //     'image4': '../../../../assets/img/icons/restaurant.png',
  //     'description4': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum cupiditate ' +
  //     'deserunt dolores dolorum eaque exercitationem minus modi, natus nobis quae quaerat quibusdam veritatis,' +
  //     ' vitae voluptate voluptatum!',
  //     'span13': '334',
  //     'span14': '10',
  //     'span15': '12',
  //     'span16': '53'
  //   },
  //   {
  //     'day': 'Субота',
  //     'first': 1,
  //     'image1': '../../../../assets/img/icons/restaurant.png',
  //     'description1': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur' +
  //     ' maiores modi molestiae reiciendis sequi similique ullam, voluptatum! Ad consectetur fugiat labore' +
  //     ' necessitatibus non praesentium quisquam rerum similique voluptatem.',
  //     'span1': '354',
  //     'span2': '11',
  //     'span3': '11',
  //     'span4': '52',
  //     'second': 2,
  //     'image2': '../../../../assets/img/icons/restaurant.png',
  //     'description2': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur' +
  //     ' maiores modi molestiae reiciendis sequi similique ullam, voluptatum! Ad consectetur fugiat labore' +
  //     ' necessitatibus non praesentium quisquam rerum similique voluptatem.',
  //     'span5': '434',
  //     'span6': '10',
  //     'span7': '10',
  //     'span8': '41',
  //     'third': 3,
  //     'image3': '../../../../assets/img/icons/restaurant.png',
  //     'description3': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur' +
  //     ' maiores modi molestiae reiciendis sequi similique ullam, voluptatum! Ad consectetur fugiat labore' +
  //     ' necessitatibus non praesentium quisquam rerum similique voluptatem.',
  //     'span9': '334',
  //     'span10': '10',
  //     'span11': '10',
  //     'span12': '51',
  //     'fourth': 4,
  //     'image4': '../../../../assets/img/icons/restaurant.png',
  //     'description4': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur' +
  //     ' maiores modi molestiae reiciendis sequi similique ullam, voluptatum! Ad consectetur fugiat labore' +
  //     ' necessitatibus non praesentium quisquam rerum similique voluptatem.',
  //     'span13': '334',
  //     'span14': '10',
  //     'span15': '12',
  //     'span16': '53'
  //   },
  //   {
  //     'day': 'Неділя',
  //     'first': 1,
  //     'image1': '../../../../assets/img/icons/restaurant.png',
  //     'description1': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores, ' +
  //     'consectetur consequuntur ea eligendi fuga illum iure nam, non qui, quidem quis repellat? ' +
  //     'Cum ea eos ipsam molestiae officia pariatur, vitae.',
  //     'span1': '354',
  //     'span2': '11',
  //     'span3': '11',
  //     'span4': '52',
  //     'second': 2,
  //     'image2': '../../../../assets/img/icons/restaurant.png',
  //     'description2': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores, ' +
  //     'consectetur consequuntur ea eligendi fuga illum iure nam, non qui, quidem quis repellat? ' +
  //     'Cum ea eos ipsam molestiae officia pariatur, vitae.',
  //     'span5': '434',
  //     'span6': '10',
  //     'span7': '10',
  //     'span8': '41',
  //     'third': 3,
  //     'image3': '../../../../assets/img/icons/restaurant.png',
  //     'description3': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores, ' +
  //     'consectetur consequuntur ea eligendi fuga illum iure nam, non qui, quidem quis repellat? ' +
  //     'Cum ea eos ipsam molestiae officia pariatur, vitae.',
  //     'span9': '334',
  //     'span10': '10',
  //     'span11': '10',
  //     'span12': '51',
  //     'fourth': 4,
  //     'image4': '../../../../assets/img/icons/restaurant.png',
  //     'description4': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores, ' +
  //     'consectetur consequuntur ea eligendi fuga illum iure nam, non qui, quidem quis repellat? ' +
  //     'Cum ea eos ipsam molestiae officia pariatur, vitae.',
  //     'span13': '334',
  //     'span14': '10',
  //     'span15': '12',
  //     'span16': '53'
  //   }
  // ]

}
