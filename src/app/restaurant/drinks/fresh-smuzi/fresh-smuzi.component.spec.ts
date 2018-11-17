import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshSmuziComponent } from './fresh-smuzi.component';

describe('FreshSmuziComponent', () => {
  let component: FreshSmuziComponent;
  let fixture: ComponentFixture<FreshSmuziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshSmuziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshSmuziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
