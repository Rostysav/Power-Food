import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmeletWithBasilicaComponent } from './omelet-with-basilica.component';

describe('OmeletWithBasilicaComponent', () => {
  let component: OmeletWithBasilicaComponent;
  let fixture: ComponentFixture<OmeletWithBasilicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmeletWithBasilicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmeletWithBasilicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
