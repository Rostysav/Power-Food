import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryMusseComponent } from './cherry-musse.component';

describe('CherryMusseComponent', () => {
  let component: CherryMusseComponent;
  let fixture: ComponentFixture<CherryMusseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryMusseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryMusseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
