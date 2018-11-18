import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateCoclailComponent } from './chocolate-coclail.component';

describe('ChocolateCoclailComponent', () => {
  let component: ChocolateCoclailComponent;
  let fixture: ComponentFixture<ChocolateCoclailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolateCoclailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateCoclailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
