import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentOfsStatusComponent } from './shipment-ofs-status.component';

describe('ShipmentOfsStatusComponent', () => {
  let component: ShipmentOfsStatusComponent;
  let fixture: ComponentFixture<ShipmentOfsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentOfsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentOfsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
