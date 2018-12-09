import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BylgyrSalatComponent } from './bylgyr-salat.component';

describe('BylgyrSalatComponent', () => {
  let component: BylgyrSalatComponent;
  let fixture: ComponentFixture<BylgyrSalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BylgyrSalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BylgyrSalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
