import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Balance2000DescrComponent } from './balance-2000-descr.component';

describe('Balance2000DescrComponent', () => {
  let component: Balance2000DescrComponent;
  let fixture: ComponentFixture<Balance2000DescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Balance2000DescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Balance2000DescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
