import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmeletComponent } from './omelet.component';

describe('OmeletComponent', () => {
  let component: OmeletComponent;
  let fixture: ComponentFixture<OmeletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmeletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
