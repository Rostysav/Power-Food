import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lower1000DescrComponent } from './lower-1000-descr.component';

describe('Lower1000DescrComponent', () => {
  let component: Lower1000DescrComponent;
  let fixture: ComponentFixture<Lower1000DescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lower1000DescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lower1000DescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
