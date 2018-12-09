import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatyComponent } from './salaty.component';

describe('SalatyComponent', () => {
  let component: SalatyComponent;
  let fixture: ComponentFixture<SalatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
