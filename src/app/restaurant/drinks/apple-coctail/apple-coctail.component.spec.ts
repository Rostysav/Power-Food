import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleCoctailComponent } from './apple-coctail.component';

describe('AppleCoctailComponent', () => {
  let component: AppleCoctailComponent;
  let fixture: ComponentFixture<AppleCoctailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleCoctailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleCoctailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
