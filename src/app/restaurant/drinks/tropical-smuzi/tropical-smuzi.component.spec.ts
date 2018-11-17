import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TropicalSmuziComponent } from './tropical-smuzi.component';

describe('TropicalSmuziComponent', () => {
  let component: TropicalSmuziComponent;
  let fixture: ComponentFixture<TropicalSmuziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TropicalSmuziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TropicalSmuziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
