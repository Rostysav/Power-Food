import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lover1000Component } from './lover-1000.component';

describe('Lover1000Component', () => {
  let component: Lover1000Component;
  let fixture: ComponentFixture<Lover1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lover1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lover1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
