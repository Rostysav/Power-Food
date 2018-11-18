import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanilCoclailComponent } from './vanil-coclail.component';

describe('VanilCoclailComponent', () => {
  let component: VanilCoclailComponent;
  let fixture: ComponentFixture<VanilCoclailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanilCoclailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanilCoclailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
