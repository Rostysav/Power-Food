import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VealBurgerComponent } from './veal-burger.component';

describe('VealBurgerComponent', () => {
  let component: VealBurgerComponent;
  let fixture: ComponentFixture<VealBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VealBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VealBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
