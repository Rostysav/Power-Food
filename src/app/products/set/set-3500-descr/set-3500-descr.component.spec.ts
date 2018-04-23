import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set3500DescrComponent } from './set-3500-descr.component';

describe('Set3500DescrComponent', () => {
  let component: Set3500DescrComponent;
  let fixture: ComponentFixture<Set3500DescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set3500DescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set3500DescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
