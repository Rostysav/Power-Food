import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThxPageComponent } from './thx-page.component';

describe('ThxPageComponent', () => {
  let component: ThxPageComponent;
  let fixture: ComponentFixture<ThxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
