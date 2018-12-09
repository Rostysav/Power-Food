import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLanchComponent } from './third-lanch.component';

describe('ThirdLanchComponent', () => {
  let component: ThirdLanchComponent;
  let fixture: ComponentFixture<ThirdLanchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdLanchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdLanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
