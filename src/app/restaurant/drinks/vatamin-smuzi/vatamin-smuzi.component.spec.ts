import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VataminSmuziComponent } from './vatamin-smuzi.component';

describe('VataminSmuziComponent', () => {
  let component: VataminSmuziComponent;
  let fixture: ComponentFixture<VataminSmuziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VataminSmuziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VataminSmuziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
