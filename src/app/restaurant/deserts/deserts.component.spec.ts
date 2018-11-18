import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertsComponent } from './deserts.component';

describe('DesertsComponent', () => {
  let component: DesertsComponent;
  let fixture: ComponentFixture<DesertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
