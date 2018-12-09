import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLanchComponent } from './second-lanch.component';

describe('SecondLanchComponent', () => {
  let component: SecondLanchComponent;
  let fixture: ComponentFixture<SecondLanchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLanchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
