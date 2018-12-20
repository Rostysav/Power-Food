import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrotSoupComponent } from './carrot-soup.component';

describe('CarrotSoupComponent', () => {
  let component: CarrotSoupComponent;
  let fixture: ComponentFixture<CarrotSoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrotSoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrotSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
