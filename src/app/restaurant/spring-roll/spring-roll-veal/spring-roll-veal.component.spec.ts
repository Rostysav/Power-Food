import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRollVealComponent } from './spring-roll-veal.component';

describe('SpringRollVealComponent', () => {
  let component: SpringRollVealComponent;
  let fixture: ComponentFixture<SpringRollVealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringRollVealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRollVealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
