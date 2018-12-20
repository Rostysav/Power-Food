import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRollShrimpComponent } from './spring-roll-shrimp.component';

describe('SpringRollShrimpComponent', () => {
  let component: SpringRollShrimpComponent;
  let fixture: ComponentFixture<SpringRollShrimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringRollShrimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRollShrimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
