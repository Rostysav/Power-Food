import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSmuziComponent } from './green-smuzi.component';

describe('GreenSmuziComponent', () => {
  let component: GreenSmuziComponent;
  let fixture: ComponentFixture<GreenSmuziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenSmuziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenSmuziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
