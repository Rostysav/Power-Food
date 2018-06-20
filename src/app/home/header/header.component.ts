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

  }


}
