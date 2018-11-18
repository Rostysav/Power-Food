import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawberryCoclailComponent } from './strawberry-coclail.component';

describe('StrawberryCoclailComponent', () => {
  let component: StrawberryCoclailComponent;
  let fixture: ComponentFixture<StrawberryCoclailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrawberryCoclailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrawberryCoclailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
