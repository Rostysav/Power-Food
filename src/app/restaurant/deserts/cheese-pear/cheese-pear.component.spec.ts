import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesePearComponent } from './cheese-pear.component';

describe('CheesePearComponent', () => {
  let component: CheesePearComponent;
  let fixture: ComponentFixture<CheesePearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheesePearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheesePearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
