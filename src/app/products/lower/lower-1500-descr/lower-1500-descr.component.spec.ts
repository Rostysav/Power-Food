import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lower1500DescrComponent } from './lower-1500-descr.component';

describe('Lower1500DescrComponent', () => {
  let component: Lower1500DescrComponent;
  let fixture: ComponentFixture<Lower1500DescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lower1500DescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lower1500DescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
