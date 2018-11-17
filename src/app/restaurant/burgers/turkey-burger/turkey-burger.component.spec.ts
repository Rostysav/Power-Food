import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyBurgerComponent } from './turkey-burger.component';

describe('TurkeyBurgerComponent', () => {
  let component: TurkeyBurgerComponent;
  let fixture: ComponentFixture<TurkeyBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkeyBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
