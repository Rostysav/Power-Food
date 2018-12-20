import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoradoComponent } from './dorado.component';

describe('DoradoComponent', () => {
  let component: DoradoComponent;
  let fixture: ComponentFixture<DoradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
