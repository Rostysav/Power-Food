import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersComponent } from './burgers.component';

describe('BurgersComponent', () => {
  let component: BurgersComponent;
  let fixture: ComponentFixture<BurgersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
