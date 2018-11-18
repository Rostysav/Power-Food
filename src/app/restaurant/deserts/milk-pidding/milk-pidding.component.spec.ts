import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkPiddingComponent } from './milk-pidding.component';

describe('MilkPiddingComponent', () => {
  let component: MilkPiddingComponent;
  let fixture: ComponentFixture<MilkPiddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkPiddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkPiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
