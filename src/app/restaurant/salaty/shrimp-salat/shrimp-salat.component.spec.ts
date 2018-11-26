import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpSalatComponent } from './shrimp-salat.component';

describe('ShrimpSalatComponent', () => {
  let component: ShrimpSalatComponent;
  let fixture: ComponentFixture<ShrimpSalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrimpSalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrimpSalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
