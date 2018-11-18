import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanaKotaComponent } from './pana-kota.component';

describe('PanaKotaComponent', () => {
  let component: PanaKotaComponent;
  let fixture: ComponentFixture<PanaKotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanaKotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanaKotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
