import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLanchComponent } from './first-lanch.component';

describe('FirstLanchComponent', () => {
  let component: FirstLanchComponent;
  let fixture: ComponentFixture<FirstLanchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLanchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
