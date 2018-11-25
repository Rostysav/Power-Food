import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangoCoctailComponent } from './mango-coctail.component';

describe('MangoCoctailComponent', () => {
  let component: MangoCoctailComponent;
  let fixture: ComponentFixture<MangoCoctailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangoCoctailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangoCoctailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
