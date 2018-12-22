import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoaVegitablesComponent } from './kinoa-vegitables.component';

describe('KinoaVegitablesComponent', () => {
  let component: KinoaVegitablesComponent;
  let fixture: ComponentFixture<KinoaVegitablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinoaVegitablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoaVegitablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
