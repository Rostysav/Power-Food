import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulgurVegitablesComponent } from './bulgur-vegitables.component';

describe('BulgurVegitablesComponent', () => {
  let component: BulgurVegitablesComponent;
  let fixture: ComponentFixture<BulgurVegitablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulgurVegitablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulgurVegitablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
