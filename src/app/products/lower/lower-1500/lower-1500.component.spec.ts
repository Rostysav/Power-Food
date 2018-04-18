import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lower1500Component } from './lower-1500.component';

describe('Lower1500Component', () => {
  let component: Lower1500Component;
  let fixture: ComponentFixture<Lower1500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lower1500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lower1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
