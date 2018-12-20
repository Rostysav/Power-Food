import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRollComponent } from './spring-roll.component';

describe('SpringRollComponent', () => {
  let component: SpringRollComponent;
  let fixture: ComponentFixture<SpringRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
