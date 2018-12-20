import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyrkeyFileComponent } from './tyrkey-file.component';

describe('TyrkeyFileComponent', () => {
  let component: TyrkeyFileComponent;
  let fixture: ComponentFixture<TyrkeyFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyrkeyFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyrkeyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
