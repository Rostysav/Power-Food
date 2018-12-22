import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SochevysyaComponent } from './sochevysya.component';

describe('SochevysyaComponent', () => {
  let component: SochevysyaComponent;
  let fixture: ComponentFixture<SochevysyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SochevysyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SochevysyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
