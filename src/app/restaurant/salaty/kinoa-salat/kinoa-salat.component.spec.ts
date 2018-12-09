import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoaSalatComponent } from './kinoa-salat.component';

describe('KinoaSalatComponent', () => {
  let component: KinoaSalatComponent;
  let fixture: ComponentFixture<KinoaSalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinoaSalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoaSalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
