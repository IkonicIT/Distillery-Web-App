import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTransportPermitRequestComponent } from './shipment-transport-permit-request.component';

describe('ShipmentTransportPermitRequestComponent', () => {
  let component: ShipmentTransportPermitRequestComponent;
  let fixture: ComponentFixture<ShipmentTransportPermitRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentTransportPermitRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentTransportPermitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
