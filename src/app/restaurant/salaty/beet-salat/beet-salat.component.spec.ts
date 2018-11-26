import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeetSalatComponent } from './beet-salat.component';

describe('BeetSalatComponent', () => {
  let component: BeetSalatComponent;
  let fixture: ComponentFixture<BeetSalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeetSalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeetSalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
