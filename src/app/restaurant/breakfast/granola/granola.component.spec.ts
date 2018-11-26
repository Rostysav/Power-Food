import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GranolaComponent } from './granola.component';

describe('GranolaComponent', () => {
  let component: GranolaComponent;
  let fixture: ComponentFixture<GranolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GranolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
