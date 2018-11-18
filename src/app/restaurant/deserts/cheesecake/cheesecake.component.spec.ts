import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesecakeComponent } from './cheesecake.component';

describe('CheesecakeComponent', () => {
  let component: CheesecakeComponent;
  let fixture: ComponentFixture<CheesecakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheesecakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheesecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
