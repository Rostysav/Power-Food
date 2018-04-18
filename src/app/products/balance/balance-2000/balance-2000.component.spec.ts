import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Balance2000Component } from './balance-2000.component';

describe('Balance2000Component', () => {
  let component: Balance2000Component;
  let fixture: ComponentFixture<Balance2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Balance2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Balance2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
