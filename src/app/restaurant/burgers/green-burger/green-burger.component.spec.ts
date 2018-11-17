import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBurgerComponent } from './green-burger.component';

describe('GreenBurgerComponent', () => {
  let component: GreenBurgerComponent;
  let fixture: ComponentFixture<GreenBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
