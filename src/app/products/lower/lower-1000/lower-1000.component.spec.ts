import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lower1000Component } from './lower-1000.component';

describe('Lower1000Component', () => {
  let component: Lower1000Component;
  let fixture: ComponentFixture<Lower1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lower1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lower1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
