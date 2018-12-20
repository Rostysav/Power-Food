import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeasSoupComponent } from './peas-soup.component';

describe('PeasSoupComponent', () => {
  let component: PeasSoupComponent;
  let fixture: ComponentFixture<PeasSoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeasSoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeasSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
