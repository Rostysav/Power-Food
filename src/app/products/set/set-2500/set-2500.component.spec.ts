import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set2500Component } from './set-2500.component';

describe('Set2500Component', () => {
  let component: Set2500Component;
  let fixture: ComponentFixture<Set2500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set2500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set2500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
