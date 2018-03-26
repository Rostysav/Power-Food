import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	 window.addEventListener('scroll', function() {
      // //Here you forgot to update the value
      const scrollPos = window.scrollY;
      const header = document.getElementById('header');

      if (scrollPos > 100) {
        header.classList.add('black-bg');
      } else {
        header.classList.remove('black-bg');
      }
    });

  }

}
