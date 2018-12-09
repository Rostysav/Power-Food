import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrusketyComponent } from './bruskety.component';

describe('BrusketyComponent', () => {
  let component: BrusketyComponent;
  let fixture: ComponentFixture<BrusketyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrusketyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrusketyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
