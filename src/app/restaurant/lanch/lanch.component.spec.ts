import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchComponent } from './lanch.component';

describe('LanchComponent', () => {
  let component: LanchComponent;
  let fixture: ComponentFixture<LanchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
