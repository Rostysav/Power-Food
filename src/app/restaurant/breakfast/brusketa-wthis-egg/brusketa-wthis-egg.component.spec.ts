import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrusketaWthisEggComponent } from './brusketa-wthis-egg.component';

describe('BrusketaWthisEggComponent', () => {
  let component: BrusketaWthisEggComponent;
  let fixture: ComponentFixture<BrusketaWthisEggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrusketaWthisEggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrusketaWthisEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
