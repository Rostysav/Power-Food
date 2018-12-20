import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpkinSoupComponent } from './pumpkin-soup.component';

describe('PumpkinSoupComponent', () => {
  let component: PumpkinSoupComponent;
  let fixture: ComponentFixture<PumpkinSoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumpkinSoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpkinSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
