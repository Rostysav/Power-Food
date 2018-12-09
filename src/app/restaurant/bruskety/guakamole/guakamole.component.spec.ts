import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuakamoleComponent } from './guakamole.component';

describe('GuakamoleComponent', () => {
  let component: GuakamoleComponent;
  let fixture: ComponentFixture<GuakamoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuakamoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuakamoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
