import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinachComponent } from './spinach.component';

describe('SpinachComponent', () => {
  let component: SpinachComponent;
  let fixture: ComponentFixture<SpinachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
