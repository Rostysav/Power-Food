import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParoviKotletyComponent } from './parovi-kotlety.component';

describe('ParoviKotletyComponent', () => {
  let component: ParoviKotletyComponent;
  let fixture: ComponentFixture<ParoviKotletyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParoviKotletyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParoviKotletyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
