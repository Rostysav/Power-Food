import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicSmuziComponent } from './classic-smuzi.component';

describe('ClassicSmuziComponent', () => {
  let component: ClassicSmuziComponent;
  let fixture: ComponentFixture<ClassicSmuziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicSmuziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicSmuziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
