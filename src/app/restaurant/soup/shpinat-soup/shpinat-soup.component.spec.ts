import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpinatSoupComponent } from './shpinat-soup.component';

describe('ShpinatSoupComponent', () => {
  let component: ShpinatSoupComponent;
  let fixture: ComponentFixture<ShpinatSoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShpinatSoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShpinatSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
