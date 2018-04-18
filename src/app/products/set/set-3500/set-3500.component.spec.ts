import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set3500Component } from './set-3500.component';

describe('Set3500Component', () => {
  let component: Set3500Component;
  let fixture: ComponentFixture<Set3500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set3500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set3500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
