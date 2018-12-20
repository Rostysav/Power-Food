import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelyachaVurizkaComponent } from './telyacha-vurizka.component';

describe('TelyachaVurizkaComponent', () => {
  let component: TelyachaVurizkaComponent;
  let fixture: ComponentFixture<TelyachaVurizkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelyachaVurizkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelyachaVurizkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
