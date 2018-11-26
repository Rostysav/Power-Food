import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OatmealComponent } from './oatmeal.component';

describe('OatmealComponent', () => {
  let component: OatmealComponent;
  let fixture: ComponentFixture<OatmealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OatmealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OatmealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
