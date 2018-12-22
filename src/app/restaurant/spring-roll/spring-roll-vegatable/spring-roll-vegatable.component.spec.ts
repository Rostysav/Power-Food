import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRollVegatableComponent } from './spring-roll-vegatable.component';

describe('SpringRollVegatableComponent', () => {
  let component: SpringRollVegatableComponent;
  let fixture: ComponentFixture<SpringRollVegatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringRollVegatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRollVegatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
