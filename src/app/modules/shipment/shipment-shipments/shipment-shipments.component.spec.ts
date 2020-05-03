import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentShipmentsComponent } from './shipment-shipments.component';

describe('ShipmentShipmentsComponent', () => {
  let component: ShipmentShipmentsComponent;
  let fixture: ComponentFixture<ShipmentShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
