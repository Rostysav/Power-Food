import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaLaymCoctailComponent } from './cola-laym--coctail.component';

describe('ColaLaymCoctailComponent', () => {
  let component: ColaLaymCoctailComponent;
  let fixture: ComponentFixture<ColaLaymCoctailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaLaymCoctailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaLaymCoctailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
