import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Set2500DescrComponent } from './set-2500-descr.component';

describe('Set2500DescrComponent', () => {
  let component: Set2500DescrComponent;
  let fixture: ComponentFixture<Set2500DescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set2500DescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Set2500DescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
