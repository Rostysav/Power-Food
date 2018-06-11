import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mobileNav = false;
  public popupMenu = false;
  public barEffect = false;

  constructor() { }

  ngOnInit() {

  	window.addEventListener('scroll', function() {
      // //Here you forgot to update the value
      const scrollPos = window.scrollY;
      const header = document.getElementById('header');

      if (scrollPos > 85) {
        header.classList.add('black-bg');
      } else {
        header.classList.remove('black-bg');
      }
    });

  }


}
