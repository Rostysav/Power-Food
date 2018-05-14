import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public popupMenu = false;

  constructor() { }

  ngOnInit() {
  }

}
