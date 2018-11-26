import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RostfibComponent } from './rostfib.component';

describe('RostfibComponent', () => {
  let component: RostfibComponent;
  let fixture: ComponentFixture<RostfibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RostfibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RostfibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
